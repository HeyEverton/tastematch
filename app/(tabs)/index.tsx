import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, StatusBar, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Tabs } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {

    console.log(navigation)
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const handleLogin = () => {
    console.log('Email: ', email);
    console.log('Password: ', password);
    navigation.setOptions({ headerShown: true });
    navigation.navigate('explore'); 
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image source={require('../../assets/images/logos/tastematch_logo__blue.png')} style={styles.logo}/>
      <Text style={styles.title}>TasteMatch</Text>
      <Text style={styles.subtitle}>Faça login para continuar</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#888"
        keyboardType="email-address"
        value={email}
        autoCorrect={false}
        onChangeText={setEmail}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Senha"
          placeholderTextColor="#888"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeIcon}
        >
          <Icon name={showPassword ? 'eye-off' : 'eye'} size={20} color="#888" />
        </TouchableOpacity>
      </View>
      <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
      <Button title="Entrar" onPress={handleLogin} color="#5A67D8" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1a1a1a',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#333',
    borderColor: '#444',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    color: '#fff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#333',
    borderColor: '#444',
    borderWidth: 1,
    marginBottom: 12,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 8,
    color: '#fff',
  },
  eyeIcon: {
    padding: 8,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#888',
    marginBottom: 24,
  },
  logo: {
    width: 300,
    height: 200,
  }
});
