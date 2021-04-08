import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import CreateMuseoHome from './screens/museo.home';
import CreateMuseoMistake from './screens/museo.mistake';
import CreateErrotatxoHome from './screens/errotatxo.home';
import CreateErrotatxoMistake from './screens/errotatxo.mistake';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="CreateMuseoHome" 
        component={CreateMuseoHome}
        options={{ title: 'IHESBIDE', headerTitleAlign: 'center', headerLeft: null}}
      />
      <Stack.Screen 
        name="CreateMuseoMistake" 
        component={CreateMuseoMistake}
        options={{ title: 'IHESBIDE', headerTitleAlign: 'center', headerLeft: null}}
      />
      <Stack.Screen 
        name="CreateErrotatxoHome" 
        component={CreateErrotatxoHome}
        options={{ title: 'IHESBIDE', headerTitleAlign: 'center', headerLeft: null}}
      />
      <Stack.Screen 
        name="CreateErrotatxoMistake" 
        component={CreateErrotatxoMistake}
        options={{ title: 'IHESBIDE', headerTitleAlign: 'center', headerLeft: null}}
      />
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