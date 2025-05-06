import { useContext } from "react";
import { Dimensions, Text, View, Button, Alert } from "react-native";

const windowWidth = Dimensions.get('window').width;

export default function About() {
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
        <Text>about Page</Text>

      </View>
    </View>
  );
}
