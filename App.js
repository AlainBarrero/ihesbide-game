import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import CreateMuseoHome from './screens/museo.home';
import CreateMuseoMistake from './screens/museo.mistake';
import CreateErrotatxoHome from './screens/errotatxo.home';
import CreateErrotatxoMistake from './screens/errotatxo.mistake';
import CreateExilioHome from './screens/exilio.home';
import CreateExilioMistake from './screens/exilio.mistake';
import CreateIglesiaHome from './screens/iglesia.home';
import CreateIglesiaMistake from './screens/iglsesia.mistake';
import CreateFuenteHome from './screens/fuente.home';
import CreateFuenteMistake from './screens/fuente.mistake';
import CreateLegadoHome from './screens/legado.home';
import CreateLegadoMistake from './screens/legado.mistake';
import CreateFinalHome from './screens/final.home';

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
      <Stack.Screen 
        name="CreateExilioHome" 
        component={CreateExilioHome}
        options={{ title: 'IHESBIDE', headerTitleAlign: 'center', headerLeft: null}}
      />
      <Stack.Screen 
        name="CreateExilioMistake" 
        component={CreateExilioMistake}
        options={{ title: 'IHESBIDE', headerTitleAlign: 'center', headerLeft: null}}
      />
      <Stack.Screen 
        name="CreateIglesiaHome" 
        component={CreateIglesiaHome}
        options={{ title: 'IHESBIDE', headerTitleAlign: 'center', headerLeft: null}}
      />
      <Stack.Screen 
        name="CreateIglesiaMistake" 
        component={CreateIglesiaMistake}
        options={{ title: 'IHESBIDE', headerTitleAlign: 'center', headerLeft: null}}
      />
      <Stack.Screen 
        name="CreateFuenteHome" 
        component={CreateFuenteHome}
        options={{ title: 'IHESBIDE', headerTitleAlign: 'center', headerLeft: null}}
      />
      <Stack.Screen 
        name="CreateFuenteMistake" 
        component={CreateFuenteMistake}
        options={{ title: 'IHESBIDE', headerTitleAlign: 'center', headerLeft: null}}
      />
      <Stack.Screen 
        name="CreateLegadoHome" 
        component={CreateLegadoHome}
        options={{ title: 'IHESBIDE', headerTitleAlign: 'center', headerLeft: null}}
      />
      <Stack.Screen 
        name="CreateLegadoMistake" 
        component={CreateLegadoMistake}
        options={{ title: 'IHESBIDE', headerTitleAlign: 'center', headerLeft: null}}
      />
      <Stack.Screen 
        name="CreateFinalHome" 
        component={CreateFinalHome}
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