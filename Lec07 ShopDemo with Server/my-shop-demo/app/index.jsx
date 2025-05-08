import { useContext, useState } from "react";
import { Dimensions, Text, View, Button, Alert } from "react-native";

import { router, Link } from 'expo-router';

import { Button as BTNElm, Icon, Input } from '@rneui/themed';

import { ShopContext } from "./ShopContextProvider";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const apiUrl = 'http://www.rup2.somee.com/api/Students/';

export default function Index() {
  const { users, LoginUser, SetUser } = useContext(ShopContext);
  const [mail, setMail] = useState(null);
  const [password, setPassword] = useState(null);


  const fetchLoginFromServer = (myMail, myPassword) => {
    const data2Send = {
      "mail": myMail,
      "password": myPassword
    };

    fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(data2Send),
      headers: new Headers({
        'Content-type': 'application/json; charset=UTF-8', //very important to add the 'charset=UTF-8'!!!!
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(res => {
        console.log('res=', res);
        console.log('res.status=', res.status);

        if (res.status === 200) {
          return res.json()
        }
        else if (res.status === 204) {
          console.log('wrong email or pass!');
          Alert.alert('Wrong Login', 'email or pass invalid!', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
          return;
        }
        else {
          console.log('ERR!');
          return;
        }
      })
      .then(
        (result) => {
          console.log("fetch POST= ", result);
          let user = {
            id: result.id,
            mail: result.mail,
            pass: result.password,
            admin: result.isAdmin
          };
          console.log('user=', user);

          SetUser(user);
          router.push('/DrawerDir/(tabs)/shop');
        },
        (error) => {
          console.log("err post=", error);
        });
  }




  btnLogin = () => {
    console.log(users[1]);
    console.log(users.length);
    console.log(users);

    //let currentUser = LoginUser(mail, password);
    fetchLoginFromServer(mail, password);
    // let currentUser = await fetchLoginFromServer(mail, password);
    // console.log(currentUser);
    // if (currentUser === undefined) {
    //   Alert.alert('Wrong Login', 'email or pass invalid!', [
    //     {
    //       text: 'Cancel',
    //       onPress: () => console.log('Cancel Pressed'),
    //       style: 'cancel',
    //     },
    //     { text: 'OK', onPress: () => console.log('OK Pressed') },
    //   ]);
    // }
    // else {
    //   SetUser(currentUser);
    //   router.push('/DrawerDir/(tabs)/shop');
    // }
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
          onChangeText={txt => setMail(txt)}
        />
        <Input placeholder="Password" secureTextEntry={true}
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={txt => setPassword(txt)}
        />

        <BTNElm radius={"sm"} type="solid" color="success"
          onPress={btnLogin}>
          <Icon name="login" color="purple" />
          login
        </BTNElm>

        <Link href="registration"
          style={{
            color: 'blue',
            margin: 20
          }}>register...</Link>

      </View>
    </View>
  );
}
