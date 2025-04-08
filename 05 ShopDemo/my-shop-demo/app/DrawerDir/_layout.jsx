import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';
import { Text } from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {router} from 'expo-router';
import { Feather } from '@expo/vector-icons';

const CustomDrawerContent = (props) => {

  return (

    <DrawerContentScrollView {...props}>
      <DrawerItem
        label={"shop"}
        onPress={()=> {router.push('/DrawerDir/(tabs)/shop');}}
      />
      <DrawerItem
        label={"add item"}
        onPress={()=> {router.push('/DrawerDir/(tabs)/additem');}}
        icon={({color, size})=> (<Feather name="arrow-up-circle" size={24} color={color}/>)}
      />
      <Text>asdasd</Text>
      <DrawerItem
        label={"login"}
        onPress={()=> {router.push('/');}}
        icon={({color, size})=> (<Feather name="arrow-up-circle" size={24} color={color}/>)}
      />
    </DrawerContentScrollView>
  );
}

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={props => <CustomDrawerContent {...props} />} />
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
