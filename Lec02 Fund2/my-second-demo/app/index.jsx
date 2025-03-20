import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  const [num, setNum] = useState();

  const btnAdd = () => {
    console.log(1);
    setNum(num => num + 1);
  }

  const onChangeNumber = (text) => {
    console.log(text);
    setNum(Number(text));
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Another something2</Text>
      <Button
        onPress={btnAdd}
        title="Add One"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />

      <View style={{margin:20, padding:20}}>
        <Text style={{fontSize:40,color:"red"}}>Num={num}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});