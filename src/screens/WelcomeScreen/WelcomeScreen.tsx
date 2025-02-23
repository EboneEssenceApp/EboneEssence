import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  Pressable,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './WelcomeScreen.styles';

const WelcomeScreen = () => {
  const [isLoginPressed, setIsLoginPressed] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={[
          '#8C2AC2',
          '#7526B6',
          '#5B089D',
          '#3A0055',
          '#220033',
          '#100019',
        ]}
        style={styles.gradient}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/couples-icon.png')}
            style={styles.logoImage}
          />
        </View>

        <Image
          source={require('../../assets/images/ebone-essence-title.png')}
          style={styles.titleImage}
        />

        <Text style={styles.tagline}>Vibe. Love. Thrive.</Text>

        <Text style={styles.subtitle}>
          A premier space for social connections,{'\n'}meaningful love, and a
          thriving community.
        </Text>

        <TouchableOpacity style={styles.getStartedButton}>
          <Text style={styles.getStartedText}>GET STARTED</Text>
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <Pressable
            onPressIn={() => setIsLoginPressed(true)}
            onPressOut={() => setIsLoginPressed(false)}>
            <Text
              style={[
                styles.loginHighlight,
                isLoginPressed && styles.loginHighlightPressed,
              ]}>
              Log In
            </Text>
          </Pressable>
        </View>

        <Image
          source={require('../../assets/images/heart-icon.png')}
          style={styles.decorativeIcon}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
