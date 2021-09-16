import React from 'react'
import {ScrollView, View, Text, StyleSheet} from 'react-native'
import Card from './Card'
function TopRated(){
    return(
<ScrollView horizontal="true">
<Card/>
<Card/>
<Card/>
</ScrollView>
    )
}
export default TopRated;
