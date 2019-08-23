import React from "react"; 
import { View, Text,Button } from "react-native"; 
import { createStackNavigator, createAppContainer } from "react-navigation"; 

import DetailsScreen from './js/pages/details';
import LoginScreen from './js/pages/login';


class HomeScreen extends React.Component { 
  render() { 
    return (<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Home Screen</Text> 
            <Button
              title="Go to Details"
              onPress = {()=>this.props.navigation.navigate('Details')}
            />
            <Button
              title="Login page"
              onPress = {()=>this.props.navigation.navigate('Login')}
            />
          </View>); 
  } 
  
} 
     
const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Login:LoginScreen
  },
  {
    initialRouteName: "Home"
  }
); 
export default createAppContainer(AppNavigator);