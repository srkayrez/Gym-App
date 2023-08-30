import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, ScrollView, Alert, } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Superior } from './Screens/superior';

function HomeScreen({ navigation }) {
  return (
    
    <View style={styles.container}>
          
      
          <Image source={require('./assets/imagens/treinofacil.png')} style={{width:200, height:200, alignSelf:'center'}} />
          <Text style={{alignSelf:'center', fontSize:40}}>Treino Fácil!</Text>
          <StatusBar style="auto" />
      
          <Pressable style={styles.btnSelectTraining} onPress={() => navigation.navigate('Treino Superior')}>
              <Image source={require('./assets/imagens/braco.png')} style={{width:100, height:100, marginBottom:10}} />
              <Text>Superiores </Text>
          </Pressable>
      
          <Pressable style={styles.btnSelectTraining} onPress={() => navigation.navigate('Treino Superior')}>
                <Image source={require('./assets/imagens/perna.png')} style={{width:100, height:100, marginBottom:10}} />
              <Text>Inferiores</Text>
          </Pressable>
          
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0B0B0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSelectTraining: {
    margin:15,
    padding: 10,
    backgroundColor: 'white',
    width: '90%',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'black'
  }
});

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Treino Fácil" component={HomeScreen} />
        <Stack.Screen name="Treino Superior" component={Superior} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
