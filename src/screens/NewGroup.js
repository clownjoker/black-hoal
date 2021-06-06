import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';


const NewGroup = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{navigation.navigate('blackHoal')}}>
                    <AntDesign name='arrowleft' color='#ECF1FF' size={25}/>
                </TouchableOpacity>
    
                <Text style={styles.title}>Create New Group­­­­</Text>
        
                <Text style={{color:'#121212'}}> .</Text>
            </View>
            <View style={{flex:1}}></View>
            <View style={styles.inputContent}>
                <TextInput
                    placeholder='group name'
                    placeholderTextColor='#FFFFFFB3'
                    style={styles.input}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#121212',
    },
    header:{
        height:50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:15
    },
    title:{
        color:'#E0E0E0',
        fontSize:14
    },
    inputContent:{
        backgroundColor:'#1E1E1E',
        height:64,
        bottom:20,
        marginHorizontal:15,
        borderRadius:5,
        justifyContent:'center',
        paddingLeft:20
    },
    input:{
        fontSize:14,
        color:'#FFFFFFB3'
    }
})
export default NewGroup;