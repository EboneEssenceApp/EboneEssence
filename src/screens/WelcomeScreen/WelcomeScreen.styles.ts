import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D0845', // Dark purple background
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  logoContainer: {
    width: width * 0.6,
    height: width * 0.6,
    marginTop: 20,
    marginBottom: 25,
    // borderRadius: width * 0.3,
    // borderWidth: 2,
    // borderColor: '#FFD700',
    overflow: 'hidden',
  },
  titleImage: {
    width: width * 0.8, // Adjust width as needed
    height: 60, // Adjust height as needed
    resizeMode: 'contain',
    marginBottom: 12,
  },
  logoImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  appName: {
    fontSize: 40,
    fontFamily: 'MarcellusSC-Regular',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 8,
    textShadowColor: 'rgba(255, 215, 0, 0.3)',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 4,
  },
  appNameGradient: {
    height: 70, // Increased to accommodate larger font
    marginBottom: 16,
  },
  appNameGradientText: {
    opacity: 0,
  },
  tagline: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'Marcellus-Regular',
    textAlign: 'center',
    marginBottom: 16,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    marginBottom: 48,
    lineHeight: 24,
    paddingHorizontal: 20,
    marginTop: 16,
  },
  getStartedButton: {
    backgroundColor: '#9C27B0',
    paddingHorizontal: 48,
    paddingVertical: 16,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    borderWidth: 2,
    borderColor: '#D4A857',
  },
  getStartedText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  loginContainer: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 16,
    textAlign: 'center',
  },
  loginHighlight: {
    color: '#FFD966',
  },
  loginHighlightPressed: {
    textDecorationLine: 'underline',
    textDecorationColor: '#FFD966',
  },
  decorativeIcon: {
    width: 50,
    height: 50,
    marginTop: 50,
  },
});
