import React, { useEffect, useState } from 'react';
import { View, Text, Button, } from 'react-native';
import { LoginButton, AccessToken, Settings } from 'react-native-fbsdk-next';
import { requestTrackingPermissionsAsync } from 'expo-tracking-transparency';

export default function Index() {
  const [trackingPermission, setTrackingPermission] = useState(null);

  useEffect(() => {
    // Request User Tracking Permission when the app starts
    const requestTrackingPermission = async () => {
      const { status } = await requestTrackingPermissionsAsync();

      Settings.initializeSDK();
      if (status === "granted") {
        await Settings.getAdvertiserTrackingEnabled();
      }
    };

    requestTrackingPermission();
  }, []);

 

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>nir screen.</Text>
      <Text>from the link in youtube : </Text>
      <Text>https://www.youtube.com/watch?v=VADy1X8NHeo&ab_channel=MissCoding</Text>
      <Text>Facebook Login with ATT Permission</Text>

      {/* Facebook Login Button */}
      <LoginButton
        onLoginFinished={(error, result) => {
          if (error) {
            console.log('Login failed with error:', error);
          } else if (result.isCancelled) {
            console.log('Login was cancelled');
          } else {
            AccessToken.getCurrentAccessToken().then((data) => {
              console.log('Login success with access token:', data?.accessToken.toString());
            });
          }
        }}
        onLogoutFinished={() => console.log('User logged out')}
      />

      {/* Display message based on User Tracking Permission */}
      {!trackingPermission && (
        <Text>
          Please allow tracking to enable personalized ads and improve your experience.
        </Text>
      )}

     
    </View>
  );
}
