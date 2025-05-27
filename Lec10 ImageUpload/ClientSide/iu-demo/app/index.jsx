import { useState } from 'react';
import { Button, Image, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      console.log('file=', result.assets[0].file);
      console.log('file=', result.assets[0].fileName);
      console.log('file=', result.assets[0].filePath);
      console.log('file=', result.assets[0].uri);
      
      setImage(result.assets[0].uri);
    }
  };

  const uploadImage = () => {
    imageUpload(image, 'cp1.jpg');
  }

  const imageUpload = (imgUri, picName) => {

    console.log(imgUri);
    console.log(picName);
    

    //let urlAPI = "https://localhost:7260/api/Files/upload";
    let urlAPI = "http://n1.somee.com/api/files/upload";
    let dataI = new FormData();
    dataI.append('file', {
      uri: imgUri,
      name: picName,
      type: 'image/jpg'
    });

    const config = {
      method: 'POST',
      body: dataI,
    }

    console.log(urlAPI);
    console.log(config);
    console.log(config.body);
    console.log(config.body.append);
    console.log(config.body.append.uri);
    console.log(config.body.append.name);
    
    fetch(urlAPI, config)
      .then((res) => {
        console.log(res.status);
        if (res.status == 200) {
          console.log(res.status);
          return res.json();
        }
        else { return "err"; }
      })
      .then((responseData) => {
        console.log(responseData);
        if (responseData != "err") {
          console.log(responseData.filePath);
        }
        else { alert('error uploding ...'); }
      })
      .catch(err => { alert('err upload= ' + err); });
  }

  return (
    <View style={styles.container}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Button title='Upload Image' onPress={uploadImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});


// import { Text, View } from "react-native";

// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>Edit app/index.tsx to edit this screen.</Text>
//     </View>
//   );
// }
