import React from 'react'
import { StyleSheet, View, Text } from 'react-native'


export default function Header({ title }) {
	return (
		<View style={styles.wrap}>
			<Text style={styles.title}>{title}</Text>
		</View>
	)
}
const styles = StyleSheet.create({
	wrap: {},
	title: {
		fontFamily: 'Open Sans Bold',
		lineHeight:40,
		fontSize:26,
		color:"white",
		fontWeight:"bold",
		textTransform:"uppercase",
		textAlign:"left"}
})