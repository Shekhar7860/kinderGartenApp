import React, { Component} from 'react'
import {View, Text, Image,TextInput,  TouchableOpacity} from 'react-native'
import styles from "../styles/styles";
import {  Card, Divider, SearchBar, List, ListItem  } from 'react-native-elements';
export default class Home extends Component {
    goToPage = (page) => {
        this.props.navigation.navigate(page)
    }
render () { 
return (<View>
     <SearchBar
          placeholder="Search Products..."
          lightTheme
          round
          
          autoCorrect={false}
          
        />
      <Text>This Is Home</Text>
    </View>)} 
      
}