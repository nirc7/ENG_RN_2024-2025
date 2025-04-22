import { useContext, useState } from 'react';
import { View, Text } from 'react-native';

import { router } from 'expo-router';

import { ListItem, Avatar, Button as BTNElm, Icon } from '@rneui/themed';
import { Feather } from '@expo/vector-icons';

import { ShopContext } from '../../ShopContextProvider';


export default function Shop(props) {
  const { items, ToggleItemChecked } = useContext(ShopContext);


  let itemsList = items.map(item =>
    <ListItem
      key={item.id}
      bottomDivider
      onPress={() => ToggleItemChecked(item.id)}
    >
      <ListItem.CheckBox
        // Use ThemeProvider to change the defaults of the checkbox
        iconType="material-community"
        checkedIcon="checkbox-marked"
        uncheckedIcon="checkbox-blank-outline"
        checked={item.checked}
        onPress={() => ToggleItemChecked(item.id)}
        size={40}
      />
      <Avatar
        rounded
        source={{ uri: item.img }}
      />
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.price}$</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <View>
      <Text>Shop</Text>
      <View style={{ margin: 20 }} >
        {itemsList}
      </View>

      <View style={{
        margin: 20, width: 150,
        // justifyContent: "center",
        // alignItems: "center",
        alignSelf: 'center'
      }} >
        <BTNElm radius={"sm"} type="solid" color="secondary"
          onPress={() => router.push('cart')}>
          <Feather name="shopping-cart" size={30} color={'green'} />
          <Text style={{ color: 'white', margin: 10 }}> Buy</Text>
        </BTNElm>
      </View>

    </View>
  )
}