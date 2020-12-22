import React,{useState} from 'react'
import { SafeAreaView, View,ScrollView,Text,StyleSheet, TextInput } from 'react-native'

const App = () =>{
  const [inputValue, setInputValue] = useState()

  const currencyPerRupee = {
    DOLLAR:0.014,
    EURO:0.012,
    POUND:0.011,
    RUBEL:0.93,
    AUSDOLLAR:0.2,
    CANDOLLAR:0.019,
    YEN:1.54,
    DINAR:0.0043,
    BITCOIN:0.000004
  }

  return (
    <>
    <ScrollView backgroundColor="#1b262c">
      <SafeAreaView style={styles.container}>      
      <View style={styles.resultContainer}>
      <Text style={styles.resultValue}>12.23</Text>
      </View>
      <View style={styles.inputContainer}>
      <TextInput
      style={styles.input}
      keyboardType="numeric"
      placeholder="Enter Value"
      placeholderTextColor="#c1c1c1">
      </TextInput>
      </View>
      <View style={styles.convertButtonContainer}>

      </View>
      </SafeAreaView>

    </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#1b262c"
  },
  resultContainer:{
    height:70,
    marginTop:80,
    justifyContent:'center',
    borderColor:"#bbe1fa",
    borderWidth:2,
    alignItems:'center',
  },
  resultValue:{
    fontSize:30,
    color:'#FFF'
  },
  inputContainer:{
    height:70,
    marginTop:10,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2,
    borderColor:"#bbe1fa"
  },
  input:{
    fontSize:30,
    textAlign:'center',
    color:'#FFF'
  },
  convertButtonContainer:{
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:10
  }
})

export default App