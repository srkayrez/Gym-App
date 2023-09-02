import { 
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Alert,
  Pressable,
  TouchableOpacity,
  Modal,
  TextInput,} from 'react-native';

import * as React from 'react';
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import { 
  Button,
  Dialog,
  Portal,
  PaperProvider,
  ProgressBar,
  Card,
  Checkbox } from 'react-native-paper';
  
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { useCountdown } from 'react-native-countdown-circle-timer'



export function Inferior() {
  
 
  const [valor, setValor] = React.useState(0)
  

  
  return (
    
    <ScrollView>

        <View style={styles.btnSelectTraining}>
          <Image source={require('../assets/imagens/perna.png')} style={{width:100, height:100, marginVertical:10,}} />
          <Text> Inferiores </Text>
        </View>
               
        <View style={{ alignItems:'center'}}>
        {dados.map((dados) => {
          
          const [checked, setChecked] = React.useState(false);
          
          const [modalVisible, setModalVisible] = React.useState(false);
          const [modalTimerVisible, setModalTimerVisible] = React.useState(false);

          const [text, onChangeText] = React.useState('Useless Text');
          const [number, onChangeNumber] = React.useState('');

          const {
            path,
            pathLength,
            stroke,
            strokeDashoffset,
            remainingTime,
            elapsedTime,
            size,
            strokeWidth,
          } = useCountdown({ isPlaying: true, duration: 7, colors: '#abc' })

          
          

          
          return (

            
            
            <View key={dados.id} style={{alignContent:'center', alignItems:'baseline', marginBottom:15, opacity: dados.seriesFeitas === 1 ? 0.7 : 1, width:'100%'}}>
            <Card style={{alignContent:'center', width:'90%', borderRadius:10, alignSelf:'center'}}>
              <Card.Content style={{}}>
              <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text style={{textAlign:'center', fontSize:20, marginBottom:10}}> {dados.exercicio} </Text>
                    
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    if (dados.seriesFeitas < 1){
                      dados.seriesFeitas = 1
                      setChecked(!checked);
                    }else {dados.seriesFeitas = 0
                      setChecked(false)
                    }
                  }}
                />
                
              </View>
                  <ProgressBar progress={dados.seriesFeitas} style={{backgroundColor:'#EDCAFF', color:'#693E7F'}} />
                    <Text style={{textAlign:'center'}}>{dados.seriesFeitas*4}/{dados.serie}</Text>
                <Image source={require('../assets/imagens/perna.png')} style={{width:100, height:100, marginBottom:10, alignSelf:'center'}}></Image>
                <View style={{flexDirection:'row', alignSelf:'center', gap:15, marginBottom:15}}>
                  <Text style={styles.descricao}><Feather name="repeat" size={15} color="#EDCAFF" />  {dados.serie} / {dados.repeticao} </Text>

                  <View style={styles.centeredView}>
                    <Modal
                      animationType="slide"
                      transparent={true}
                      visible={modalVisible}
                      onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                      }}>
                      <View style={{flex:1 ,justifyContent: 'center', alignItems: 'center',}}>
                        <View style={styles.modalView}>
                          <Text style={styles.modalText}>Seu peso atual é: {dados.peso}</Text>
                            <TextInput
                              style={styles.input}
                              onChangeText={onChangeNumber}
                              value={number}
                              placeholder="Novo peso"
                              keyboardType="numeric"
                            />

                          <View style={{flexDirection:'row',width: '100%' , justifyContent:'space-between'}}>
                            <Pressable style={{marginHorizontal:10,}}
                              onPress={() => {
                                setModalVisible(!modalVisible)
                              }}>
                              <Text style={styles.descricaoFechar}>Cancelar</Text>
                            </Pressable>

                            <Pressable style={{marginHorizontal:10}}
                              onPress={() => {
                                dados.peso = number
                                setModalVisible(!modalVisible)
                              }}>
                              <Text style={styles.descricaoSalvar}>Salvar</Text>
                            </Pressable>
                          </View>
                        </View>
                      </View>
                    </Modal>
                    <Pressable onPress={() => setModalVisible(true)}>
                        <Text style={styles.descricao}><MaterialCommunityIcons name="weight-kilogram" size={20} color="#EDCAFF" />  {dados.peso} kg </Text>
                    </Pressable>
                  </View>

                  <Text style={styles.descricao}><MaterialCommunityIcons name="clock-time-eight-outline" size={20} color="#EDCAFF" />  
                  {dados.descanco}
                  s 
                  </Text>
                </View>
                <View>

                  <View style={styles.centeredView}>
                    <Modal
                      animationType="slide"
                      transparent={true}
                      visible={modalTimerVisible}
                      onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        
                      }}>
                      <View style={{flex:1 ,justifyContent: 'center', alignItems: 'center',}}>
                        <View style={styles.modalView}>
                       
                       <Text style={{fontSize:20, marginBottom:15}}>Descanço</Text>

                        <CountdownCircleTimer
                          isPlaying
                          duration={60}
                          colors={['#693E7F', '#693E7F', '#693E7F', '#693E7F']}
                          colorsTime={[50, 40, 30, 10]}>

                          {({ remainingTime }) => <Text style={{fontSize:50}}>{remainingTime}</Text>}

                        </CountdownCircleTimer>


                          <View style={{flexDirection:'row', marginTop:15}}>
                            <Pressable style={{marginHorizontal:10,}}
                              onPress={() => {
                                setModalTimerVisible(!modalTimerVisible)
                              }}>
                              <Text style={styles.descricao}>Pular</Text>
                            </Pressable>

                             

                          </View>
                        </View>
                      </View>
                    </Modal>
                    <TouchableOpacity style={styles.descricao} disabled={ dados.seriesFeitas === 1 } onPress={() => {

                      setModalTimerVisible(!modalTimerVisible)
                      
                      if (dados.seriesFeitas < 1){
                        
                        dados.seriesFeitas += 0.25;
                        
                        setValor(prev => prev+1);
                        
                        if(dados.seriesFeitas >= 1 ){
                          
                          setChecked(!checked)
                          
                        }
                      }
                      else {
                        // dados.seriesFeitas = 0;
                  }

                  }}>
                    <Text style={{color:'#EDCAFF', textAlign:'center'}}>
                      Contar serie
                    </Text>
                  </TouchableOpacity>
                  </View>




                </View>
              </Card.Content>
            </Card>
          </View>
          );
        })}
      </View>
        </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EDEBFF',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    },
    btnSelectTraining: {
      backgroundColor: 'white',
      alignItems: 'center',
      borderColor: 'black',
      width:'100%',
      marginBottom:20,
    top:0,
  },
  descricao: {
    backgroundColor:'#693E7F',
    color: '#EDCAFF',
    borderRadius: 10,
    paddingHorizontal:10,
    paddingVertical:5,
    textAlign:'center',
  },
  descricaoFechar: {
    backgroundColor:'#EDCAFF',
    color: '#693E7F',
    borderRadius: 10,
    padding:10,
    textAlign:'center',
  },
  descricaoSalvar: {
    backgroundColor:'#693E7F',
    color: '#EDCAFF',
    borderRadius: 10,
    padding: 10,
    textAlign:'center',
  },
  modalView: {
    verticalAlign: 'center',
    justifyContent: 'center',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%'
    
  },

  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:15,
    textAlign:'center',
    width:'90%',
  
}}
);

var dados = [{
  id: 0,
  exercicio: 'Leg press',
  serie: 4,
  repeticao: 10,
  peso: 25,
  descanco: 60,
  seriesFeitas : 0
},
{
  id: 1,
  exercicio: 'Agachamento (HACK)',
  serie: 4,
  repeticao: 10,
  peso: 30,                                      
  descanco: 60,
  seriesFeitas : 0
},
{
  id: 2,
  exercicio: 'Abdutora',
  serie: 4,
  repeticao: 10,
  peso: 30,
  descanco: 60,
  seriesFeitas : 0
},
];

