import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, ScrollView, SafeAreaView, Alert, navigate, navigation } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomeScreen(props) {
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
      
          <Pressable onPress={OpenInfTraining}>
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
  Alert.alert('Funcionou!','Aqui vai abrir o treino superior')
  navigation.navigate('Profile', {name: 'Superior'})
}

function OpenInfTraining() {
  Alert.alert('Funcionou!','Aqui vai abrir o treino inferrior')
}


<View style={styles.centeredView}>
                    <Modal
                      animationType="slide"
                      transparent={true}
                      visible={modalVisible}
                      onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                      }}>
                      <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                          <Text style={styles.modalText}>Hello World!</Text>
                          <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
                          </Pressable>
                        </View>
                      </View>
                    </Modal>
                    <Pressable onPress={() => setModalVisible(true)}>
                        <Text style={styles.descricao}><MaterialCommunityIcons name="weight-kilogram" size={20} color="#EDCAFF" />  {dados.peso} kg </Text>
                    </Pressable>
                  </View>