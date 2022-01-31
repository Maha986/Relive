import { View, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react';
import { Button, Image} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { styles } from './styles';

const ProgressPage = ({ route }) => {
  const navigation = useNavigation();
  const [formdata, setFormData] = useState(null);
  const [visible, setVisible] = useState(true);
  const [filename, setFilename] = useState("");
  const grayimage=route.params.imguri;

  useEffect(() => {
    setFormData(route.params.form);
  }, []);

  //on page load send the request to api
  useEffect(async () => {

    if (formdata !== null) {
      try {
        const response = await fetch('https://color-api.azurewebsites.net/api_b64',
          {
            method: 'post',
            body: formdata
          }
        );
        await imageStoring(response);
        setVisible(false);
      } catch (error) {
        errorDisplay(error);
      }
    }

    async function imageStoring(response) {
      const json = await response.json();
      //remove the inverted commas and first character from response to get base64
      const datas = (json[0].substring(1).replace(/['"]+/g, ''));

      const file = (FileSystem.documentDirectory + `colorized_image${Date.now()}.png`);

      //storing the file to mobile
      FileSystem.writeAsStringAsync(file, datas, {
        encoding: FileSystem.EncodingType.Base64,
      });

      await setmediaResult(MediaLibrary.saveToLibraryAsync(file));
      await setFilename(file);
    }

    function errorDisplay(error) {
      console.error(error);
      Alert("There is an error colorizing your image. Please try again");
    }
  }, [formdata])




  const [mediaResult, setmediaResult] = useState(null);



  useEffect(() => {
    if (mediaResult !== null) {
     
        navigation.navigate("ModalPage",{grayimage:grayimage});
     
      
    };
  }, [mediaResult])
  return (
    <>
      {
        visible ?
          <AnimatedLoader
            visible={visible}
            overlayColor="rgba(0,0,0,0.3)"
            animationStyle={styles.lottie}
            speed={1}>
            <Text>Colorizing Your image</Text>
            <View style={styles.getstarts}>
              <Button onPress={() => navigation.navigate("UploadingPage")} title='Cancel Processing' color="#841584"></Button>
            </View>
          </AnimatedLoader> :
          <View style={styles.container}>
            <Image style={{ resizeMode: "contain", width: 300, height: 300,margin:2}} source={{ uri: grayimage }} />
            <Image style={{ resizeMode: "contain", width: 300, height: 300,margin:2}} source={{ uri: filename }} />
            <View style={styles.getstarted}>
              <Button title='Colorize More Images' onPress={() => navigation.navigate('UploadingPage')} color="#841584" style={{marginBottom: 5}}></Button>
            </View>
          </View>
      }
    </>
  );

};

export default ProgressPage;
