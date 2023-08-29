import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, ScrollView, Alert, } from 'react-native';
import * as React from 'react';
import { Switch, Card } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { List } from 'react-native-paper';

export function Treinos(exercicio,serie,repeticao,peso,descanco) {
  
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);
  
    return (
        <List.Accordion style={{width:350, borderTopLeftRadius:20, borderTopRightRadius:20 }} title= {exercicio}>
          <View style={{alignContent:'center', alignItems:'baseline'}}>
            <Card style={{alignContent:'center', width:350, borderBottomLeftRadius:10,borderBottomRightRadius:10, borderRadius:0}}>
              <Card.Content style={{}}>
                <Image source={require('../assets/imagens/braco.png')} style={{width:100, height:100, marginBottom:10, alignSelf:'center'}}></Image>
                <View style={{marginLeft:20, flexDirection:'row', alignSelf:'center', gap:15}}>
                  <Text style={styles.descricao}><Feather name="repeat" size={15} color="#EDCAFF" />  {serie} / {repeticao} </Text>
                  <Text style={styles.descricao}><MaterialCommunityIcons name="weight-kilogram" size={20} color="#EDCAFF" />  {peso} kg </Text>
                  <Text style={styles.descricao}><MaterialCommunityIcons name="clock-time-eight-outline" size={20} color="#EDCAFF" />  {descanco}s </Text>
                </View>
              </Card.Content>
            </Card>
          </View>
        </List.Accordion>
    )}

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
    marginVertical:20
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