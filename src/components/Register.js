import React, { Component} from 'react'
import {View, Text,TextInput, Image, TouchableOpacity} from 'react-native'
import styles from "../styles/styles";
export default class Register extends Component {
    goToPage = (page) => {
        this.props.navigation.navigate(page)
    }
render () { 
return (<View>
      <Image  style={styles.imageWidth} source={require('../images/kinder.jpg')} ></Image>
    <View style={{marginTop:10}}>
    <TextInput style={styles.input} placeholder="Email"  placeholderTextColor = "black"></TextInput>
    <TextInput style={styles.input} placeholder="UserName"  placeholderTextColor = "black"></TextInput>
    <TextInput style={styles.input} placeholder="Password"  placeholderTextColor = "black" secureTextEntry={true}></TextInput>
    <TextInput style={styles.input} placeholder="Confirm Password"  placeholderTextColor = "black" secureTextEntry={true}></TextInput>
    <TouchableOpacity style={styles.buttonBackground}>
        <Text onPress={this.goToPage.bind(this, 'Select')} style={styles.welcomeLoginText}>SignUp</Text>
        </TouchableOpacity>
        
        </View></View>)} 
      
}