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
      quality: 0.3,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const uploadImg2Server = () => {

    imageUpload(image, 'myPic1.jpg')
  }

  const imageUpload = (imgUri, picName) => {
    let urlAPI = "http://n2n.somee.com/api/Files/upload";

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
      <Button title="Upload img 2 Server" onPress={uploadImg2Server} />
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
//       <Text>Rup screen.</Text>
//     </View>
//   );
// }
