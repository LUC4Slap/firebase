import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Keyboard,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import firebase from './src/config/firebaseConnection';

console.disableYellowBox = true;

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function cadastrar() {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((value) => {
        Keyboard.dismiss();
        alert('Usuario criado ' + value.user.email);
      })
      .catch((error) => {
        if (error.code === 'auth/weak-password') {
          alert('Sua senha de ter 6 caracteres');
          return;
        }
        if (error.code === 'auth/invalid-email') {
          alert('Este e-amail é invalido');
          return;
        } else {
          console.log(error);
          alert('Ops algo deu errado.');
          return;
        }
      });
    setEmail('');
    setPassword('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>E-mail</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <Text style={styles.texto}>Senha</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button title="Cadastrar" onPress={cadastrar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  texto: {
    fontSize: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#121212',
    height: 45,
    fontSize: 17,
  },
});
