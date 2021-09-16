import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Dashboard from './src/screens/Dashboard.js'
import Movie from './src/screens/Movie.js'
import { latest, infoMovie } from './src/services/index'
import { Icon } from 'react-native-eva-icons';




function App() {

  const [Latest, setLatest] = useState({});

  useEffect(() => {
    Get()
  }, [])

  async function Get() {
    // const info = await infoMovie(550)
    // console.log("app: ", info)

    const getlatest = await latest()
    setLatest(getlatest)
    console.log("latest: ", getlatest)
  }

return <Movie/>


  // return (
  //   <SafeAreaView>
  //      {/* <Icon name="arrow-back" fill={"red"} width={30} height={30} /> */}
  //     <Text>ditasea</Text>
  //     {Latest !== {} &&
  //       <View>
  //         <Text>id: {Latest.id}</Text>
  //         <Text>title: {Latest.title}</Text>
  //         <Text>language: {Latest.original_language}</Text>
  //       </View>
  //     }
  //   </SafeAreaView>
  // );
  
};

export default App;