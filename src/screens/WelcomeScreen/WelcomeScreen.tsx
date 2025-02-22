import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './WelcomeScreen.styles';

type IconFamilyType =
  | 'FontAwesome6'
  | 'MaterialCommunityIcons'
  | 'FontAwesome'
  | 'Entypo'
  | 'Ionicons';

const OutlinedHeart = () => (
  <View style={styles.outlinedHeart}>
    <Icon name="favorite-border" size={20} color="#FFB74D" />
  </View>
);

const NavIcon = ({
  iconFamily,
  name,
}: {
  iconFamily: IconFamilyType;
  name: string;
}) => {
  let IconComponent;

  switch (iconFamily) {
    case 'FontAwesome6':
      IconComponent = FontAwesome6;
      break;
    case 'MaterialCommunityIcons':
      IconComponent = MaterialCommunityIcons;
      break;
    case 'FontAwesome':
      IconComponent = FontAwesome;
      break;
    case 'Entypo':
      IconComponent = Entypo;
      break;
    case 'Ionicons':
      IconComponent = Ionicons;
      break;
    default:
      IconComponent = FontAwesome6;
  }

  return (
    <View style={styles.navIcon}>
      <IconComponent name={name} size={28} color="#FFB74D" />
    </View>
  );
};

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Top Icons */}
      <View style={styles.header}>
        <Icon name="radio-button-unchecked" size={24} color="#FFB74D" />
        <Icon name="access-time" size={24} color="#FFB74D" />
      </View>

      {/* Main Content */}
      <LinearGradient
        colors={['rgba(156, 39, 176, 0.3)', 'transparent']}
        style={styles.gradient}>
        <View style={styles.content}>
          {/* Top Hearts */}
          <View style={styles.heartsRow}>
            <OutlinedHeart />
            <OutlinedHeart />
          </View>

          {/* Center Heart */}
          <View style={styles.centerHeart}>
            <Icon name="favorite" size={30} color="#FFB74D" />
          </View>

          {/* Title and Subtitle */}
          <Text style={styles.title}>Eboné Essencé</Text>
          <Text style={styles.subtitle}>
            The elegant app for enhancing your daily love and romance experience
          </Text>

          {/* Get Started Button */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>GET STARTED</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <NavIcon iconFamily="Ionicons" name="flame-sharp" />
          <NavIcon iconFamily="MaterialCommunityIcons" name="star-shooting" />
          <NavIcon iconFamily="FontAwesome" name="heartbeat" />
          <NavIcon iconFamily="Entypo" name="chat" />
          <NavIcon iconFamily="Ionicons" name="person-circle-sharp" />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
