import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D0845', // Dark purple background
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  logoContainer: {
    width: width * 0.7,
    height: width * 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
    borderRadius: width * 0.35,
    // Enhanced shadow configuration
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.6,
    shadowRadius: 16,
    elevation: 20,
  },
  logoImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: width * 0.35,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    // Additional inner glow effect
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  appName: {
    fontSize: 48,
    color: 'white',
    fontFamily: 'MarcellusSC-Regular',
    textAlign: 'center',
    marginBottom: 16,
    letterSpacing: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 4,
  },
  tagline: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'Marcellus-Regular',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    marginBottom: 48,
    lineHeight: 24,
  },
  primaryButton: {
    backgroundColor: '#9C27B0', // Purple
    paddingHorizontal: 48,
    paddingVertical: 16,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginContainer: {
    marginTop: 16,
  },
  loginText: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 16,
  },
});
