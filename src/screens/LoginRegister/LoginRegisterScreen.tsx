import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  //   Pressable,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './LoginRegisterScreen.styles';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'LoginRegister'>;

const LoginRegisterScreen = ({navigation, route}: Props) => {
  const [mode, setMode] = useState<'login' | 'register'>(
    route.params.initialMode,
  );
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
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
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" style={styles.backIcon} />
        </TouchableOpacity>

        <View style={styles.header}>
          <Image
            source={require('../../assets/images/ebone-essence-title.png')}
            style={styles.titleImage}
          />
        </View>

        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              mode === 'login' && styles.toggleButtonActive,
            ]}
            onPress={() => setMode('login')}>
            <Text style={styles.toggleText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              mode === 'register' && styles.toggleButtonActive,
            ]}
            onPress={() => setMode('register')}>
            <Text style={styles.toggleText}>Register</Text>
          </TouchableOpacity>
        </View>

        {mode === 'login' ? (
          <>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="rgba(255, 255, 255, 0.6)"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="rgba(255, 255, 255, 0.6)"
              secureTextEntry
            />
            <TouchableOpacity
              style={styles.checkboxContainer}
              onPress={() => setKeepLoggedIn(!keepLoggedIn)}>
              <View
                style={[
                  styles.customCheckbox,
                  keepLoggedIn && styles.customCheckboxChecked,
                ]}>
                {keepLoggedIn && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.checkboxLabel}>Keep me logged in.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forgotPasswordButton}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="rgba(255, 255, 255, 0.6)"
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="rgba(255, 255, 255, 0.6)"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="rgba(255, 255, 255, 0.6)"
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="rgba(255, 255, 255, 0.6)"
              secureTextEntry
            />
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitText}>Register</Text>
            </TouchableOpacity>
          </>
        )}
      </LinearGradient>
    </SafeAreaView>
  );
};

export default LoginRegisterScreen;
