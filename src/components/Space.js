import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';

const Space=({text,onPress})=>{
    return(
        <View>
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Text style={[styles.text,styles.text2]}>9s</Text>
                <Text style={[styles.text,{marginTop:5}]}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#1E1E1E',
        paddingHorizontal:10,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        marginTop:15,
        position:'relative',
        paddingBottom:10
    },
    text:{
        color:'#E0E0E0',
        fontSize:12,
        fontFamily:'Lato-Medium'
    },
    text2:{
        alignSelf:'flex-end',
        marginTop:-8,
        fontSize:10
    }
})
export default Space;