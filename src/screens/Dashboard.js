import React from 'react'
import { SafeAreaView, ScrollView, StatusBar, TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import Slider from '../components/Slider'
import Header from '../components/Header'
import Search from '../components/Search'

export default function Dashboard() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#5CA0D3" }}>
      <StatusBar backgroundColor={"#5CA0D3"} barStyle="light-content" />
      <View style={{ padding: 55 }}>

        <Header title="Hello, what do you want to watch ?" />
        <Search />
      </View>


      <View style={{ paddingTop: 20, paddingBottom: 100, backgroundColor: "#2C3848", borderRadius: 20 }}>

        <Slider title="RECOMMENDED FOR YOU" />
        <Slider title="TOP RATED" />
      </View>
    </SafeAreaView>
  )
}