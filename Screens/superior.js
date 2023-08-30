import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView, Alert, Pressable, } from 'react-native';
import * as React from 'react';
import { Switch, Card } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { List } from 'react-native-paper';
import { Treinos } from './exercicio';
import { FlatList, RefreshControl } from 'react-native-gesture-handler';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import {useState} from 'react';
import { Checkbox } from 'react-native-paper';
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

export function Superior() {
  
  const [timesPressed, setTimesPressed] = useState(0);
  const [checked, setChecked] = React.useState(false);
  
  return (
    <ScrollView>

    <View style={styles.container}>
     

        <View style={styles.btnSelectTraining}>
          <Image source={require('../assets/imagens/braco.png')} style={{width:100, height:100, marginBottom:10,}} />
          <Text> Superiores </Text>
        </View>
        
        
        <View>
        {dados.map((dados) => {
          return (
            
            
            <View style={{alignContent:'center', alignItems:'baseline', marginBottom:15}}>
            <Card style={{alignContent:'center', width:350, borderRadius:10,}}>
              <Card.Content style={{}}>
              <ProgressBar progress={numeroSerieConcluida} style={{backgroundColor:'#EDCAFF', color:'#693E7F'}} />
              <View>
                <Text style={{textAlign:'center', fontSize:20, marginBottom:10}}> {dados.exercicio} </Text>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => { 
                    setChecked(!checked);
                    soma();
                    
                    
                  }}
                  />
                    <Button
                    onPress={soma}
                    title="Learn More"/>
              </View>
                <Image source={require('../assets/imagens/braco.png')} style={{width:100, height:100, marginBottom:10, alignSelf:'center'}}></Image>
                <View style={{marginLeft:20, flexDirection:'row', alignSelf:'center', gap:15}}>
                  <Text style={styles.descricao}><Feather name="repeat" size={15} color="#EDCAFF" />  {dados.serie} / {dados.repeticao} </Text>
                  <Text style={styles.descricao}><MaterialCommunityIcons name="weight-kilogram" size={20} color="#EDCAFF" />  {dados.peso} kg </Text>
                  <Text style={styles.descricao}><MaterialCommunityIcons name="clock-time-eight-outline" size={20} color="#EDCAFF" />  {dados.descanco}s </Text>
                </View>
                <View>

                  <Pressable onPress={soma}>
                    <Text>teste {numeroSerieConcluida}</Text>
                  </Pressable>
                  
                </View>
              </Card.Content>
            </Card>
          </View>
          );
        })}
      </View>
      </View>
        </ScrollView>
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
      width:'100%',
      marginVertical:20,
    top:0,
  },
  descricao: {
    backgroundColor:'#693E7F',
    color: '#EDCAFF',
    borderRadius: 10,
    paddingHorizontal:10,
    paddingVertical:5,
    textAlign:'center',
  }
  
});

const dados = [{
  id: 1,
  exercicio: 'biceps halter',
  serie: 4,
  repeticao: 10,
  peso: 25,
  descanco: 60,
  seriesFeitas : 0
},
{
  id: 1,
  exercicio: 'biceps barra',
  serie: 4,
  repeticao: 10,
  peso: 30,                                      
  descanco: 60,
  seriesFeitas : 0
},
{
  id: 1,
  exercicio: 'biceps rosca',
  serie: 4,
  repeticao: 10,
  peso: 30,
  descanco: 60,
  seriesFeitas : 0
},
];

// const [numeroSerieConcluida ] = useState(0);

var numeroSerieConcluida = 0.0
function soma(){
 if (numeroSerieConcluida < 1){
   numeroSerieConcluida += 0.25;

 }else numeroSerieConcluida = 0;

  
}
