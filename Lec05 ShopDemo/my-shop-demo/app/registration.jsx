import { Dimensions, Text, View, Button, Alert } from "react-native";

import { router, Link } from 'expo-router';

import { Button as BTNElm, Icon, Input } from '@rneui/themed';
import { useContext } from "react";
import { ShopContext } from "./ShopContextProvider";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Registration() {
  const { AddUser } = useContext(ShopContext);

  btnRegister = () => {

    let rnd = Math.floor(Math.random() * 10) + 1;
    let name = 'avi' + rnd;
    let pass = rnd;
    AddUser(name, pass);
    router.push('/');
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
        <Text>Registration Page</Text>

        <Input
          placeholder='Email'
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        />
        <Input placeholder="Password" secureTextEntry={true}
          leftIcon={{ type: 'font-awesome', name: 'lock' }} />

        <BTNElm radius={"sm"} type="solid" color="success"
          onPress={btnRegister}>
          <Icon
            name='person-add-outline'
            type='ionicon'
            color='#f50'
          />
          Register
        </BTNElm>

        <Link href="/"
          style={{
            color: 'blue',
            margin: 20
          }}>login...</Link>

      </View>
    </View>
  );
}
