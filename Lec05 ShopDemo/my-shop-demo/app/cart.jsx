import { useContext, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

import { router } from 'expo-router';

import { ListItem, Avatar, Button as BTNElm, Icon, PricingCard, lightColors } from '@rneui/themed';
import { Feather } from '@expo/vector-icons';

import { ShopContext } from './ShopContextProvider';


export default function Cart(props) {
  const { items, ToggleItemChecked, SetAllItems2Off } = useContext(ShopContext);
  const [sumPrice, setSumPrice] = useState(0);

  let sum = 0;
  let itemsList = items.map(item => {
    console.log(item);
    if (item.checked) {
      sum += item.price;
      return (
        <PricingCard
          key={item.id}
          color={lightColors.secondary}
          title={item.name}
          price={item.price + '$'}
          //info={['description 1']}
          button={{ title: ' Remove', icon: 'flight-land' }}
          onButtonPress={() => ToggleItemChecked(item.id)}
        />
      )
    }
  });


  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ margin: 10 }}>
          <Text>Cart</Text>
          {itemsList}
        </View>

        <View style={{
          width: 150,
          //justifyContent: "center",
          alignItems: "center",
          alignSelf: 'center'
        }} >
          <Text style={{ fontSize: 30 }}>{sum}</Text>
        </View>
        <View style={{
          margin: 20, width: 150,
          //justifyContent: "center",
          //alignItems: "center",
          alignSelf: 'center'
        }} >
          <BTNElm
            type="solid"
            buttonStyle={{
              backgroundColor: 'rgba(78, 116, 289, 0.7)',
              borderRadius: 13,
            }}
            onPress={() => {
              SetAllItems2Off();
              router.push('/DrawerDir/(tabs)/shop');
            }}>
            <Feather name="dollar-sign" size={30} color={'cyan'} />
            <Text style={{ color: 'black', margin: 10 }}> Pay</Text>
          </BTNElm>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}