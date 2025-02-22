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
import {styles} from './WelcomeScreen.styles';

const OutlinedHeart = () => (
  <View style={styles.outlinedHeart}>
    <Icon name="favorite-border" size={20} color="#FFB74D" />
  </View>
);

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
      </LinearGradient>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
