import { Text, View } from "react-native";

import MapView, { Marker } from 'react-native-maps';
//var MapView = require('react-native-maps');

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Map Demo</Text>
      <MapView style={{width:300, height:500}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          key={1}
          coordinate={{latitude: 37.78825, longitude: -122.4324}}
          title={'TITLE1'}
          description={'decr1'}
        />

      </MapView>
    </View>
  );
}
