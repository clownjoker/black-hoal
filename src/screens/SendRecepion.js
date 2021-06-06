import React from 'react';
import {View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native';


const SendRecepion = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.sendView}>
                <TouchableOpacity onPress={()=>navigation.navigate('send')}>
                    <Image source={require('../asstes/icons/action.png')} style={styles.image}/>
                </TouchableOpacity>
                <Text style={styles.title}>Send</Text>
            </View>

            <View style={[styles.sendView,{backgroundColor:'#121212'}]}>
                <TouchableOpacity onPress={()=>navigation.navigate('recepion')}>
                    <Image source={require('../asstes/icons/action2.png')} style={styles.image}/>
                </TouchableOpacity>
                <Text style={styles.title}>Recepion</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    sendView:{
        flex:1,
        backgroundColor:'#1A1A1A',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:34,
        color:'#E0E0E0',
        fontFamily:'Lato-Bold'
    },
    image:{
        width:130,height:130
    }
})
export default SendRecepion;