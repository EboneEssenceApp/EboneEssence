import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './WelcomeScreen.styles';

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <LinearGradient
        colors={['#2D0845', '#8B4513']} // Dark purple to deep gold
        style={styles.gradient}>
        <View style={styles.content}>
          {/* Logo/Brand Image */}
          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/images/brand-glow.png')}
              style={styles.logoImage}
            />
          </View>

          {/* App Name */}
          <Text style={styles.appName}>Eboné Essencé</Text>

          {/* Tagline */}
          <Text style={styles.tagline}>Vibe. Love. Thrive.</Text>

          {/* Subtitle */}
          <Text style={styles.subtitle}>
            A premium space for meaningful connections—whether for love or
            community.
          </Text>

          {/* Get Started Button */}
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>GET STARTED</Text>
          </TouchableOpacity>

          {/* Login Link */}
          <TouchableOpacity style={styles.loginContainer}>
            <Text style={styles.loginText}>
              Already have an account? Log In
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
