import { red } from '@mui/material/colors';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, ScrollView, SafeAreaView, } from 'react-native';
import { superior } from './superior';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>

      <Image source={require('./assets/imagens/treinofacil.png')} style={{width:200, height:200, alignSelf:'center'}} />
      <Text style={{alignSelf:'center', fontSize:40}}>Treino Fácil!</Text>
      <StatusBar style="auto" />

      <Pressable onPress={OpenSupTraining}>
        <View style={styles.btnSelectTraining}>
          <Image source={require('./assets/imagens/braco.png')} style={{width:100, height:100, marginBottom:10}} />
          <Text>Superiores </Text>
        </View>
      </Pressable>

      <Pressable onPress={OpenSupTraining}>
        <View style={styles.btnSelectTraining}>
            <Image source={require('./assets/imagens/perna.png')} style={{width:100, height:100, marginBottom:10}} />
          <Text>Inferiores</Text>
        </View>
      </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0B0B0',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:10
  },
  btnSelectTraining: {
    margin:15,
    padding: 10,
    backgroundColor: 'white',
    width: 300,
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'black'
  }
});


function OpenSupTraining() {
  alert('funfo')
  superior()
}