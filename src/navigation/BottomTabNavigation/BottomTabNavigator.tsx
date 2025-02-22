import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WelcomeScreen from '../../screens/WelcomeScreen/WelcomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RootStackParamList} from '../types';

const Tab = createBottomTabNavigator<RootStackParamList>();

const HomeIcon = ({color}: {color: string}) => (
  <Ionicons name="home" size={28} color={color} />
);

const MatchesIcon = ({color}: {color: string}) => (
  <Ionicons name="flame" size={28} color={color} />
);

const MessagesIcon = ({color}: {color: string}) => (
  <Entypo name="chat" size={28} color={color} />
);

const ProfileIcon = ({color}: {color: string}) => (
  <Ionicons name="person-circle-sharp" size={28} color={color} />
);

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#2A2A2A',
          borderTopWidth: 0,
          height: 60,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: '#FFB74D',
        tabBarInactiveTintColor: 'rgba(255, 183, 77, 0.5)',
      }}>
      <Tab.Screen
        name="Home"
        component={WelcomeScreen}
        options={{
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="Matches"
        component={WelcomeScreen}
        options={{
          tabBarIcon: MatchesIcon,
        }}
      />
      <Tab.Screen
        name="Messages"
        component={WelcomeScreen}
        options={{
          tabBarIcon: MessagesIcon,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={WelcomeScreen}
        options={{
          tabBarIcon: ProfileIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
