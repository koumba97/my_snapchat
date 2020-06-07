import React from 'react';
import { Camera } from 'expo-camera';
import { View, Text, ImageBackground, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import RNPickerSelect from 'react-native-picker-select';
import styles from './styles';
import Toolbar from './Toolbar';
import Gallery from './Gallery';
import SelectContact from '../Contact/SelectContact';
import SelectContactStyle from '../Contact/SelectContactStyle';

var result=[]; let sending='';
export default class CameraPage extends React.Component {
    camera = null;
    
    state = {
        captures: [],
        snapData: [],
        capturing: null,
        hasCameraPermission: null,
        cameraType: Camera.Constants.Type.back,
        flashMode: Camera.Constants.FlashMode.off,
        loading: true,

    };


    handleChange =(event) =>{
        console.log(event.target);
    
        let name = 'dureeSnap'
        let value = event.target.value
        console.log(value)
        this.setState({
          [name]: value
        })
    }

    deletePicture = async () => {
        this.setState({ captures:[] });
    }
    setFlashMode = (flashMode) => this.setState({ flashMode });
    setCameraType = (cameraType) => this.setState({ cameraType });
    handleCaptureIn = () => this.setState({ capturing: true });

    handleCaptureOut = () => {
        if (this.state.capturing)
        this.camera.stopRecording();

    };

    handleShortCapture = async () => {
        const photoData = await this.camera.takePictureAsync();
        this.setState({ capturing: false, captures: [photoData, ...this.state.captures] })
    };

    handleLongCapture = async () => {
        const videoData = await this.camera.recordAsync();
        this.setState({ capturing: false, captures: [videoData, ...this.state.captures] });
    };

    async componentDidMount() {
        const camera = await Permissions.askAsync(Permissions.CAMERA);
        const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
        const hasCameraPermission = (camera.status === 'granted' && audio.status === 'granted');

        this.setState({ hasCameraPermission });
    };

    showContacts = async () =>{
       
        fetch("http://snapi.epitech.eu/all", {
            method: 'GET',
            headers: {
                'token': 'oPoKp91E7sfkY5V55upcpLyE',
            }
        })
        .then(response => response.json())
        .then((responseJson)=> {
            //console.log(snapData)
            sending="ready";
            for(let i=0; i<responseJson['data'].length; i++){
                result.push(responseJson['data'][i]);
            }
            
            this.setState({
                loading: false  
            })

            
        })
        .catch(error=>console.log(error))
        
    }

    sendingSnap = async () =>{
       
        fetch("http://snapi.epitech.eu/snap", {
            method: 'POST',
            headers: {
                'Content-Type':'multipart/form-data',
                'token': 'oPoKp91E7sfkY5V55upcpLyE',
            }, 
            body: JSON.stringify({
                duration:this.state.duration,
                to:this.state.to,
                image:this.state.image,
            })
              
      
        })
        .then((response) => response.json())
        
    }


    
    render() {
        const { hasCameraPermission, flashMode, cameraType, capturing, captures } = this.state;

        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>Access to camera has been denied.</Text>;
        }

        else if(sending=="ready"){
       
            return(
                <View style={styles.container}>
                    <Text style={{fontSize:20, paddingLeft:20, fontWeight:'bold', backgroundColor:'black', color:'white'}}>Envoyer à ...</Text>
                    <View style={styles.container}>
                        <SelectContact data={result} />
                    </View>
                </View>
            )
        }


        else if(captures.length>0){
            this.state.snapData=[{'duration':this.state.dureeSnap, 'to':'', 'image':captures[0]['uri'] }]
            
            return (
                <View style={{backgroundColor:'black'}}>
                    <RNPickerSelect
                        onValueChange={(value) => this.state.snapData[0]['duration']=value}

                        items={[
                            { label: '1', value: '1' },
                            { label: '2', value: '2' },
                            { label: '3', value: '3' },
                            { label: '4', value: '4' },
                            { label: '5', value: '5' },
                            { label: '6', value: '6' },
                            { label: '7', value: '7' },
                            { label: '8', value: '8' },
                            { label: '9', value: '9' },
                            { label: '10', value: '10' },
                        ]}
                    />
                    <Text style={{textAlign:'right'}}>
                        <FontAwesomeIcon icon={faTimes} textAlign={'right'} size={30} color={"white"} onPress={this.deletePicture} />
                    </Text>
                    
                    <Gallery captures={captures}/>

                    <View style={{margin:20, marginLeft:320, height:40, width:40, padding:10, borderRadius:300, backgroundColor:'rgb(15, 203, 255)'}}>
                        <FontAwesomeIcon icon={faPaperPlane} textAlign={'center'} size={20} color={"white"} onPress={this.showContacts} />
                    </View>

                </View>
            )
        }

        

        else{

            return (
                <React.Fragment>
                    <View>
                        <Camera
                            type={cameraType}
                            flashMode={flashMode}
                            style={styles.preview}
                            ref={camera => this.camera = camera}
                        />
                    </View>
    
                    {captures.length > 0 && <Gallery captures={captures}/>}
    
                    <Toolbar 
                        capturing={capturing}
                        flashMode={flashMode}
                        cameraType={cameraType}
                        setFlashMode={this.setFlashMode}
                        setCameraType={this.setCameraType}
                        onCaptureIn={this.handleCaptureIn}
                        onCaptureOut={this.handleCaptureOut}
                        onLongCapture={this.handleLongCapture}
                        onShortCapture={this.handleShortCapture}
                    />
                </React.Fragment>
            );
        }
    };
};