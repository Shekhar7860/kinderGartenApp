import React, { Component} from 'react'
import {View, Text, Image,TextInput,  TouchableOpacity} from 'react-native'
import styles from "../styles/styles";

export default class Welcome extends Component {
    goToPage = (page) => {
        this.props.navigation.navigate(page)
    }
render () { 
return (<View>
    <Image  style={styles.imageWidth} source={require('../images/kinder.jpg')} ></Image>
    <View style={{marginTop:10}}>
    <TextInput style={styles.input} placeholder="Email"  placeholderTextColor = "black"></TextInput>
    <TextInput style={styles.input} placeholder="Password"  placeholderTextColor = "black" secureTextEntry={true}></TextInput>
     <TouchableOpacity style={styles.buttonBackground}>
        <Text onPress={this.goToPage.bind(this, 'Login')} style={styles.welcomeLoginText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.textStyle2}>OR</Text>
        <TouchableOpacity style={styles.buttonBackgroundfb}>
        <Text onPress={this.goToPage.bind(this, 'Register')}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBackgroundgplus}>
        <Text onPress={this.goToPage.bind(this, 'Register')}>Google</Text>
        </TouchableOpacity>
        </View></View>)} 
      
}