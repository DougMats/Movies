import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import Card from './Card'
function Slider(props) {
  return (
    <View>
      <View style={styles.header}>
        <Text style={{fontSize:13, textTransform:"uppercase", color:"white", fontWeight:"bold"}}>{props.title}</Text>
        <Text style={{color:"white", opacity:0.6}}>See all</Text>
      </View>
      <ScrollView horizontal={true}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    paddingHorizontal:30,
    paddingVertical:24,
    justifyContent:"space-between"
  }
})

export default Slider;
