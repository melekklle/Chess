import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.replace('MainTabs');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>E-Posta ve Şifre Giriniz</Text>
      <TextInput
        placeholder="E-Posta"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Şifre"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signup} onPress={handleLogin}>
          <Text style={styles.signUpText}>Kaydolun</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    padding:20
  },
  title: {
    fontSize:25,
    marginBottom:20,
    textAlign:'center'
  },
  input: {
    borderWidth:1,
    padding:12,
    marginBottom:15,
    borderRadius:6
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  button: { 
    flex: 1,
    backgroundColor:'#2196F3',
    padding:15,
    borderRadius:6,
    alignItems:'center',
    marginRight:5
  },
  buttonText: {
    color:'white',
    fontSize:16
  },
  signUpText: {
    fontSize:16,
    color:'white'
  },
  signup: {
    flex: 1,
    backgroundColor:'#769656',
    padding:15,
    borderRadius:6,
    alignItems:'center',
    marginLeft:5
  }
});
