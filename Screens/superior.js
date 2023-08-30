import { StyleSheet, Text, View, Image, ScrollView, Alert, Pressable, TouchableOpacity} from 'react-native';
import * as React from 'react';
import { Card } from 'react-native-paper';
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { ProgressBar, MD3Colors } from 'react-native-paper';
import {useState} from 'react';
import { Checkbox } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { RadioButton } from 'react-native-paper';





export function Superior() {
  
 
  const [valor, setValor] = React.useState(0)
  
  
  // function soma(id, series){
    
  //   if (series < 1){
      
  //     series += 0.25
  //     setValor(prev => prev+1)

  //     if( series === 1){
  //       setChecked(false)
  //     }
      
  //   }else {
  //     series = 0;
  //   }
    
  //   return dados[id].seriesFeitas = series
    
  // }
  
  return (
    <ScrollView>

    <View style={styles.container}>
     

        <View style={styles.btnSelectTraining}>
          <Image source={require('../assets/imagens/braco.png')} style={{width:100, height:100, marginVertical:10,}} />
          <Text> Superiores </Text>
        </View>
        
        
        <View style={{ alignItems:'center'}}>
        {dados.map((dados) => {
          
          const [checked, setChecked] = React.useState(false);


          return (
            
            
            <View style={{alignContent:'center', alignItems:'baseline', marginBottom:15, opacity: dados.seriesFeitas === 1 ? 0.7 : 1}}>
            <Card style={{alignContent:'center', width:'90%', borderRadius:10,}}>
              <Card.Content style={{}}>
              <ProgressBar progress={dados.seriesFeitas} style={{backgroundColor:'#EDCAFF', color:'#693E7F'}} />
              <Text style={{textAlign:'center'}}>{dados.seriesFeitas*4}/{dados.serie}</Text>
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
                <Image source={require('../assets/imagens/braco.png')} style={{width:100, height:100, marginBottom:10, alignSelf:'center'}}></Image>
                <View style={{flexDirection:'row', alignSelf:'center', gap:15, marginBottom:15}}>
                  <Text style={styles.descricao}><Feather name="repeat" size={15} color="#EDCAFF" />  {dados.serie} / {dados.repeticao} </Text>
                  <Text style={styles.descricao}><MaterialCommunityIcons name="weight-kilogram" size={20} color="#EDCAFF" />  {dados.peso} kg </Text>
                  <Text style={styles.descricao}><MaterialCommunityIcons name="clock-time-eight-outline" size={20} color="#EDCAFF" />  {dados.descanco}s </Text>
                </View>
                <View>

                  <TouchableOpacity style={styles.descricao} disabled={ dados.seriesFeitas === 1 } onPress={() => {
                  if (dados.seriesFeitas < 1){
      
                    dados.seriesFeitas += 0.25;
                    setValor(prev => prev+1);
                    if(dados.seriesFeitas >= 1 ){
                      setChecked(!checked)
                    }
                    
                    
                  }else {
                    dados.seriesFeitas = 0;
                  }
                  
                  }}>
                    <Text style={{color:'#EDCAFF', textAlign:'center'}}>
                      Contar serie
                    </Text>
                  </TouchableOpacity>
                
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
  }
  
});

var dados = [{
  id: 0,
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
  id: 2,
  exercicio: 'biceps rosca',
  serie: 4,
  repeticao: 10,
  peso: 30,
  descanco: 60,
  seriesFeitas : 0
},
];

