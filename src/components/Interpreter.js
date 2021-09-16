import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'


function Interpreter(props) {
  return (
    <View style={styles.wrap}>
      <View style={styles.container}>
      <Image style={styles.image}
        source={{ uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-H9paZHsqPzGrEkSt-LzrQHaEK%26pid%3DApi&f=1" }}
      />
      </View>
      <Text style={styles.name}>Jason Momoa</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  wrap: {
    width: 90,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow:"hidden"
  },
  image: {
    width: null,
    height: null,
    flex: 1,
    resizeMode: 'cover'
  },
  name: {   
    marginTop:10,
    width:"70%",
    textAlign:"center",
    fontSize:13,
    lineHeight:18,
    fontWeight:"400",
    color:"white",
    opacity:0.7
  }
})
export default Interpreter;