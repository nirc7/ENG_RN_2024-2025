import { Dimensions, Text, View, Button, Alert } from "react-native";

import { router, Link } from 'expo-router';

import { Button as BTNElm, Icon, Input } from '@rneui/themed';
import { useContext } from "react";
import { ShopContext } from "./ShopContextProvider";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Index() {
  const { users, LoginUser } = useContext(ShopContext);

  btnLogin = () => {
    console.log(users[1]);
    
    if (LoginUser('avi', '123') === undefined) {
      Alert.alert('Wrong Login', 'email or pass invalid!', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }
    else {
      router.push('/DrawerDir/(tabs)/shop');
    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{
        width: windowWidth * 0.8,
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Text>Login Page</Text>

        {/* <Button title="this is rn btn" />

      <BTNElm color="error" >asdasd</BTNElm> */}

        <Input
          placeholder='Email'
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        />
        <Input placeholder="Password" secureTextEntry={true}
          leftIcon={{ type: 'font-awesome', name: 'lock' }} />

        <BTNElm radius={"sm"} type="solid" color="success"
          onPress={btnLogin}>
          <Icon name="login" color="purple" />
          login
        </BTNElm>

        <Link href="registration"
          style={{
            color: 'blue',
            margin:20
          }}>register...</Link>

      </View>
    </View>
  );
}
