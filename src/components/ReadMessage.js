import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

const ReadMeassage = ({source,username,TextMsg,Time}) =>{
    return(
        <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
                <Image source={source} style={styles.image}/>
                <View style={{marginLeft:10,}}>
                    <Text style={styles.userName}>{username}</Text>
                    <Text style={styles.text}>{TextMsg}</Text>
                </View>
            </View>
            <View style={styles.viewRight}>
                <Text style={styles.time}>{Time}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
        
    },
    image:{
        width:40,
        height:40,
        borderRadius:40
    },
    userName:{
        color:'#E0E0E0',
        fontSize:15,
        fontFamily:'Lato-Medium'
    },
    text:{
        color:'#E0E0E0',
        fontSize:13,
        width:200,
        fontFamily:'Lato-Regular'
    },
    viewRight:{
        justifyContent:'center',
        alignItems:'center'
    },
    time:{
        color:'#FFFFFFB3',
        fontSize:10,
        fontFamily:'Lato-Regular'
    },
    onOff:{
        width:10,
        height:10,
        borderRadius:10,
        marginTop:10,
        backgroundColor:'#FFFFFFB3'
    }
})
export default ReadMeassage;