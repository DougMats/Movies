import React from 'react'
import { StyleSheet, View, Text,TextInput } from 'react-native'


export default function Search(props) {
  return (

    <View style={styles.wrap}>



      <TextInput
        
        style={styles.input}
        placeholder="Search"
        placeholderTextColor={"white"}
        />
    </View>
  )
}
const styles = StyleSheet.create({
  wrap:{
    marginTop:32,
    flexDirection:"row",
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.3)",
    height:30
  },

  input: {
    top:0,
    fontSize:14,
    lineHeight:15,
    height:35,
    marginLeft:25,
  }
})