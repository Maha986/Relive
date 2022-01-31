
import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from "react"
import { Image, View, Platform, Button } from 'react-native';
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';


function UploadImage() {
  const [image, setImage] = useState(null);
  const navigation = useNavigation();
  //getting permissions
  useEffect(async () => {
    let timerId = setInterval(async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert("permission denied");
        }
      }
    }, 100); return () => clearTimeout(timerId);
  }, [])

  //selecting image
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1
    })
    if (!result.cancelled) {
      setImage(result.uri)
    }
  }


  //forwarding formdata to next screen
  const submit = async () => {
    var result = /[^.]*$/.exec(image)[0];
    const formdata = new FormData();
    formdata.append("file", {
      uri: image,
      name: `test.${result}`,
      type: `image/${result}`
    });
    navigation.navigate("ProgressPage", { form: formdata, imguri: image });
  }

  return (
    <SafeAreaView style={styles.container}>
      {

        image && <Image source={{ uri: image }} style={{
          resizeMode: "contain",
          width: 400,
          height: 300,
          borderColor: "#841584"
        }} />

      }

      <View style={styles.getstarted}>
        <Button title='Choose Image' onPress={pickImage} color="#841584" />
      </View>
      {
        image !== null &&
        <View style={styles.getstarted}>
          <Button onPress={submit} title='Submit' color="#841584"></Button>
        </View>
      }
    </SafeAreaView>
  );
}



export default UploadImage;

