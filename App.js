import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import SelectLanguage from './src/screens/SelectLanguage';
import BtnLanguage from './src/components/BtnLanguage';
import ContentTab from './src/screens/ContentTab';
import Profile from './src/screens/Profile';
import Msg from './src/screens/Msg';
import HeaderMessage from './src/components/HeaderMessage';
import ContentMessage from './src/screens/ContentMessage';
import SendRecepion from './src/screens/SendRecepion';
import Add from './src/screens/Add';
import Send from './src/screens/Send';
import Recepion from './src/screens/Recepion';
import BlackHoal from './src/screens/BlackHoal';
import Movies from './src/screens/Movies';
import NewGroup from './src/screens/NewGroup';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="selectLanguage"
          component={SelectLanguage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="btnLanguage"
          component={BtnLanguage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="contentTab"
          component={ContentTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="msg"
          component={Msg}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="headerMessage"
          component={HeaderMessage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="contentMessage"
          component={ContentMessage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="add"
          component={Add}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="sendRecepion"
          component={SendRecepion}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="send"
          component={Send}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="recepion"
          component={Recepion}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="blackHoal"
          component={BlackHoal}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="movies"
          component={Movies}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="newGroup"
          component={NewGroup}
          options={{headerShown: false}}
        />

        
        
      </Stack.Navigator>
  </NavigationContainer>
  );
}