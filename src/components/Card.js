import React from 'react'
import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native'

export default function Card() {
  return (
    <TouchableOpacity style={{ marginHorizontal: 20 }}>
      <View style={{ width: 130, height: 170, borderRadius: 20, backgroundColor: "#ccc", overflow:"hidden" }}>
        <Image style={{ width: null, height: null, flex: 1, resizeMode: 'cover' }} source={{uri:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhdqwalls.com%2Fwallpapers%2Faquaman-2018-movie-poster-1z.jpg&f=1&nofb=1"}} />
      </View>
      <Text style={{ fontSize: 13,fontWeight:"600", color:"white" }}>dfdfd</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  wrap: { flexDirection: "column" }
})