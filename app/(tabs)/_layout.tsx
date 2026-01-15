import { Tabs } from 'expo-router';
import { Camera, User } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1e2227',
          borderTopColor: '#3e4452',
        },
        tabBarActiveTintColor: '#61afef',
        tabBarInactiveTintColor: '#6b717d',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Cámara',
          tabBarIcon: ({ color, size }) => <Camera size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}