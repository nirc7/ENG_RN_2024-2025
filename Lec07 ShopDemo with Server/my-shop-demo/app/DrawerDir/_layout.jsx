import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';
import { Text } from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { router } from 'expo-router';
import { Feather } from '@expo/vector-icons';

import { ShopContext } from '../ShopContextProvider';
import { useContext } from 'react';

const CustomDrawerContent = (props) => {
  const { currentUser } = useContext(ShopContext);

  if (!currentUser.admin) {
    console.log('not admin');

    return (
      <DrawerContentScrollView {...props}>
        <Text>{'\n\n  user mail=' + currentUser.mail}</Text>
        <Text>{'\n\n\n'} SHOP{'\n\n\n'}</Text>
        <DrawerItem
          label={"shop"}
          onPress={() => { router.push('/DrawerDir/(tabs)/shop'); }}
          icon={({ color, size }) => (<Feather name="shopping-cart" size={24} color={'green'} />)}
        />
       
        <Text>{'\n\n\n'}____________{'\n\n\n'}</Text>
        <DrawerItem
          label={"logout"}
          onPress={() => { router.push('/'); }}
          icon={({ color, size }) => (<Feather name="log-out" size={24} color={color} />)}
        />
      </DrawerContentScrollView>
    );
  }
  else {
    console.log('admin');
    return (
      <DrawerContentScrollView {...props}>
         <Text>{'\n\n  user mail=' + currentUser.mail}</Text>
        <Text>{'\n\n\n'} SHOP{'\n\n\n'}</Text>
        <DrawerItem
          label={"shop"}
          onPress={() => { router.push('/DrawerDir/(tabs)/shop'); }}
          icon={({ color, size }) => (<Feather name="shopping-cart" size={24} color={'green'} />)}
        />
        <DrawerItem
          label={"add item"}
          onPress={() => { router.push('/additem'); }}
          icon={({ color, size }) => (<Feather name="plus-square" size={24} color={color} />)}
        />
        <Text>{'\n\n\n'}____________{'\n\n\n'}</Text>
        <DrawerItem
          label={"logout"}
          onPress={() => { router.push('/'); }}
          icon={({ color, size }) => (<Feather name="log-out" size={24} color={color} />)}
        />
      </DrawerContentScrollView>
    );
  }
}

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: true,
          headerTitle: 'Shop',
          headerTintColor: '#fff',
          headerStyle: { backgroundColor: '#54313f' }
        }}
      />
    </GestureHandlerRootView>
    // <GestureHandlerRootView style={{ flex: 1 }}>
    //   <Drawer screenOptions={{
    //     headerStyle: {
    //       backgroundColor: '#f4511e',
    //     },
    //     headerTintColor: '#fff',
    //     headerTitleStyle: {
    //       fontWeight: 'bold',
    //     },
    //   }}>
    //     < Drawer.Screen
    //       name="drawerPage1" // This is the name of the page and must match the url from root
    //       options={{
    //         drawerLabel: 'dP1',
    //         title: 'dp1',
    //       }}
    //     />
    //     <Drawer.Screen
    //       name="drawerPage2"
    //       options={{
    //         headerShown: false
    //       }}
    //     />
    //     <Drawer.Screen
    //       name="(tabs)"
    //       title="properties2"
    //       options={{
    //         drawerLabel: 'properties2',
    //         title: 'properties',
    //       }}
    //     />
    //   </Drawer>
    // </GestureHandlerRootView >
  );
}
