import React, { Component} from 'react'
import {View, Text, Image,TextInput, dimensions,  TouchableOpacity} from 'react-native'
import styles from "../styles/styles";
import {  Card, Divider, SearchBar, List, ListItem  } from 'react-native-elements';
export default class Home extends Component {
  constructor (props) {
    super (props)
    this.state = {
      listView : true,
      mapView : false
    }
  }
    goToPage = (page) => {
        this.props.navigation.navigate(page)
    }
    setView = (val) => {
    if(val == "list" ) {
      this.setState({mapView: false, listView: true}) 
    }else{
      this.setState({mapView: true, listView: false}) 
      }
    
  }
render () { 
return (<View>
     <SearchBar
          placeholder="Search Products..."
          lightTheme
          round
          
          autoCorrect={false}
          
        />
      <View style={{backgroundColor:"white" ,width:'100%',height:50,marginLeft:0,flexDirection:"row",justifyContent: "center",alignItems: "center"}}>
<TouchableOpacity onPress={this.setView.bind(this, 'list')} style={{backgroundColor:this.state.listView == true ? "'#e84393" : "white",width:"50%",height:48,justifyContent:"center",alignItems:"center",marginTop:2}}>
<View>
<Text style={{color: this.state.listView == true ? "white" : "black" }}>ListView</Text>
</View>
</TouchableOpacity>
<TouchableOpacity  onPress={this.setView.bind(this, 'map')} style={{backgroundColor:this.state.mapView == true ? "'#e84393" : "white",width:"50%",height:48,justifyContent:"center",alignItems:"center",marginTop:2}}>
<Text style={{color: this.state.mapView == true ? "white" : "black"}}>MapView</Text>
</TouchableOpacity>

</View>
{this.state.listView ? <Text>I am ListView</Text> : <Text>I am mapView</Text>}
    </View>)} 
      
}