import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, ScrollView, SafeAreaView, Alert } from 'react-native';

export function Superior() {
  return (
  
    <View style={styles.container}>
      <ScrollView>

        <View style={styles.btnSelectTraining}>
          <Image source={require('../assets/imagens/braco.png')} style={{width:100, height:100, marginBottom:10,}} />
          <Text> Superiores </Text>
        </View>

      
      

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
    width: '100%'
  },
  btnSelectTraining: {
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'black',
    width:'100%'
  }
});

function OpenSupTraining() {
  Alert.alert('Funcionou!','Aqui vai abrir o treino superior')
}

function OpenInfTraining() {
  Alert.alert('Funcionou!','Aqui vai abrir o treino inferrior')
}

