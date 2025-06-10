import { Button, Text, View } from "react-native";

import {
  GoogleSignin,
  statusCodes,
  isSuccessResponse,
  isErrorWithCode,
  GoogleSigninButton
} from '@react-native-google-signin/google-signin';
import { useEffect } from "react";


export default function Index() {
  useEffect(() => {
    GoogleSignin.configure({
      iosClientId: "452754846413-bk0jkhskdbasdgrtm9mjq6rpq8r62avr.apps.googleusercontent.com",
      webClientId: "452754846413-l93kf2pc1m18s84k1sdg86oiho12enkd.apps.googleusercontent.com",
      profileImageSize: 150
    });
  });

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      if (isSuccessResponse(response)) {
        console.log(response.data);
        console.log(response.data.user);
        console.log(response.data.user.email);
        console.log(response.data.user.givenName);

      } else {
        // sign in was cancelled by user
      }
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            // operation (eg. sign in) already in progress
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            // Android only, play services not available or outdated
            break;
          default:
          // some other error happened
        }
      } else {
        // an error that's not related to google sign in occurred
      }
    }
  };


  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      console.log('signed out');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>nir's demo.</Text>
      <Text></Text>
      <Button title="signin" onPress={signIn} />
      <Text></Text>
      <Button title="signout" onPress={signOut} />
      <Text></Text>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={ signIn }
        disabled={false}
      />
    </View>
  );
}
