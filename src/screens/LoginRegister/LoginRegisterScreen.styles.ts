import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D0845',
  },
  gradient: {
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  titleImage: {
    width: width * 0.6,
    height: 50,
    resizeMode: 'contain',
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 25,
    marginBottom: 30,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  toggleButtonActive: {
    backgroundColor: '#9C27B0',
    borderRadius: 25,
  },
  toggleText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 15,
    color: 'white',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#FFD966',
  },
  submitButton: {
    backgroundColor: '#9C27B0',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#FFD966',
  },
  submitText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  backIcon: {
    color: '#FFD966',
    fontSize: 30,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  customCheckbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#FFD966',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customCheckboxChecked: {
    backgroundColor: '#FFD966',
  },
  checkmark: {
    color: '#2D0845',
    fontSize: 14,
    fontWeight: 'bold',
  },
  checkboxLabel: {
    color: 'white',
    fontSize: 14,
  },
  forgotPasswordButton: {
    alignItems: 'center',
    marginTop: 16,
  },
  forgotPasswordText: {
    color: '#FFD966',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
