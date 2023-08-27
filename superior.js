import { red } from '@mui/material/colors';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, ScrollView, SafeAreaView, } from 'react-native';

export function superior() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Pagina 2</Text>
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
    backgroundColor: 'red',
    width: 300,
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'black'
  }
});


