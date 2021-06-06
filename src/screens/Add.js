import React from 'react';
import {View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Add = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>navigation.navigate('contentTab')}>
                    <AntDesign name='arrowleft' color='#E0E0E0' size={20}/>
                </TouchableOpacity>
                <Text style={styles.title}>Write New Message</Text>
                <Text style={{color:'#121212'}}>.</Text>
            </View>

            <View style={{flex:1}}></View>
            <View style={{bottom:20}}>
                <View style={styles.inputView}>
                    <TextInput 
                        placeholder='write a message'
                        placeholderTextColor='#FFFFFFB3'
                        style={styles.input}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#121212',
        paddingHorizontal:15
    },
    header:{
        height:45,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    title:{
        color:'#E0E0E0',
        fontSize:14,
        fontFamily:'Lato-Medium'
    },
    input:{
        fontSize:14,
        color:'#FFFFFFB3',
        paddingHorizontal:20,
        fontFamily:'Lato-Regular'
    },
    inputView:{
        backgroundColor:'#1E1E1E',
        height:64,
        justifyContent:'center',
        borderRadius:5,
    }

})
export default Add;