import { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { router } from 'expo-router';

import { ShopContext } from './ShopContextProvider';

import { Input, Button as BTNElm, Icon } from '@rneui/themed';

import * as ImagePicker from 'expo-image-picker';


export default function AddItem(props) {
  const { AddItem } = useContext(ShopContext);
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);

  const { currentUser } = useContext(ShopContext);

  if (!currentUser.admin) {
    console.log('not admin');
    router.push('/DrawerDir/(tabs)/shop');
  }
  else { console.log('admin'); }

  const btnAddItem = () => {
    AddItem(name, price, image);
    router.push('/DrawerDir/(tabs)/shop');
  }

  const btnPickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const btnPickCamera = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View>
      <Text>Add Item</Text>
      <Input
        placeholder='Name'
        leftIcon={{ type: 'feather', name: 'user' }}
        onChangeText={txt => setName(txt)}
      />
      <Input placeholder="Price"
        keyboardType='number-pad'
        leftIcon={{ type: 'feather', name: 'dollar-sign' }}
        onChangeText={txt => setPrice(txt)}
      />

      <View style={{
        margin: 20, width: 250,
        //justifyContent: "center",
        //alignItems: "center",
        alignSelf: 'center',
        padding: 10
      }} >
        <View style={{ margin: 10 }}>
          <BTNElm
            radius={"sm"} type="solid" color="secondary"
            onPress={btnPickImage}>
            <Icon
              style={{ color: 'black', marginRight: 20 }}
              name='image'
              type='feather'
              color='#220022'
            />
            <Text style={{ color: 'black', margin: 1 }}>Image Library</Text>
          </BTNElm>
        </View>
        <View style={{ margin: 10 }}>
          <BTNElm radius={"sm"} type="solid" color="secondary"
            onPress={btnPickCamera}>
            <Icon
              style={{ color: 'black', marginRight: 20 }}
              name='camera'
              type='feather'
              color='#220022'
            />
            <Text style={{ color: 'black', margin: 1 }}>Image Camera</Text>
          </BTNElm>
        </View>
        {image && <Image source={{ uri: image }} style={styles.image} />}

      </View>


      <View style={{
        margin: 20, width: 150,
        //justifyContent: "center",
        //alignItems: "center",
        alignSelf: 'center'
      }} >
        <BTNElm radius={"sm"} type="solid" color="success"
          onPress={btnAddItem}>
          <Icon
            style={{ color: 'black', marginLeft: 10 }}
            name='plus-square'
            type='feather'
            color='#aa00aa'
          />
          <Text style={{ color: 'black', margin: 1 }}> Add Item </Text>
        </BTNElm>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
    alignSelf: 'center'
  },
});