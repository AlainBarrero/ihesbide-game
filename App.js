import React from 'react';
import { StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import CreateMuseoHome from './screens/museo.home';
import CreateMuseoMistake from './screens/museo.mistake';
import CreateErrotatxoHome from './screens/errotatxo.home';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CreateMuseoHome" component={CreateMuseoHome}/>
      <Stack.Screen name="CreateMuseoMistake" component={CreateMuseoMistake}/>
      <Stack.Screen name="CreateErrotatxoHome" component={CreateErrotatxoHome}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (  
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
