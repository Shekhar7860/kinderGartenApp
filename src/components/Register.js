import React, { Component} from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import styles from "../styles/styles";
export default class Welcome extends Component {
render () { 
return (<View>
    <Image  style={styles.imageWidth} source={require('../images/kinder.jpg')} ></Image>
    <Text style={styles.textStyle}>Register</Text>
    <Text style={styles.welcomeTextStyle}>Welcome To Your School Finding APP</Text>
     <TouchableOpacity style={styles.buttonBackground}>
        <Text onPress={() => this.goToLogin()} style={styles.welcomeLoginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBackgroundSignUp}>
        <Text onPress={() => this.goToLogin()}>Sign Up</Text>
        </TouchableOpacity></View>)} 
      
}