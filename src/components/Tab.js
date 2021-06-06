import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import Profile from '../screens/Profile';
import ContentMessage from '../screens/ContentMessage';
import Add from '../screens/Add';
import SendRecepion from '../screens/SendRecepion';
import BlackHoal from '../screens/BlackHoal';
 

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    const activeTintLabelColor = '#569EF8';
    const inactiveTintLabelColor = '#909090';

  return (
    <Tab.Navigator
      initialRouteName="home"
      tabBarOptions={{
        activeTintColor: '#ddd',
        inactiveTintColor: '#CAD1E5',
        style:{ backgroundColor:'#252525',borderTopColor:'#252525'},
        showLabel: false
        }
      } 
    > 
        

        <Tab.Screen
            name="profile"
            component={Profile}
            options={{
            tabBarIcon: ({ color, size }) => (
                <Image source={require('../asstes/image/2.jpg')} style={{width:25,height:25,borderRadius:100,resizeMode:'center'}}/>
                ),
            }}
            
        />

        <Tab.Screen
            name="contentMessage"
            component={ContentMessage}
            options={{
            tabBarIcon: ({ color, size }) => (
                <Image source={require('../asstes/icons/msg.png')} style={{width:25,height:25,resizeMode:'contain'}}/>
                ),
            }}
            
        />

        <Tab.Screen
            name="blackHoal"
            component={BlackHoal}
            options={{
            tabBarIcon: ({ color, size }) => (
                <Image source={require('../asstes/icons/action.png')} style={{marginTop:-60,width:75,height:75,resizeMode:'contain'}}/>
                ),
            }}
            
        />

        <Tab.Screen
            name="add"
            component={Add}
            options={{
            tabBarIcon: ({ color, size }) => (
                <Image source={require('../asstes/icons/add.png')} style={{width:25,height:25,resizeMode:'contain'}}/>
                ),
            }}
            
        />

        <Tab.Screen
            name="sendRecepion"
            component={SendRecepion}
            options={{
            tabBarIcon: ({ color, size }) => (
                <Image source={require('../asstes/icons/img.png')} style={{width:25,height:25,resizeMode:'contain'}}/>
                ),
            }}
            
        />
        
        
    </Tab.Navigator>
  );
}
