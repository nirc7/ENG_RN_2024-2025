import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{  tabBarActiveTintColor: 'purple' , headerShown: false }}>
      <Tabs.Screen
        name="shop"
        options={{
          title: 'shop',
          tabBarIcon: ({ color }) => {
            console.log('color', color);
            return <FontAwesome size={24} name="cog" color={color !== 'purple' ? 'red' : color} />
          },
        }}
      />
      <Tabs.Screen
        name="additem"
        options={{
          title: 'add item',
          tabBarIcon: ({ color }) => <FontAwesome size={24} name="plane" color={color} />,
        }}
      />
    </Tabs>
  );
}
