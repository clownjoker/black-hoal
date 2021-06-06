import React from 'react'
import {View,TouchableOpacity,Text,StyleSheet,} from 'react-native';

const BtnLanguage = ({onPress,title}) =>{
    const {btn, titleBtn} = styles;
    return(
        <View >
            <TouchableOpacity style={btn} onPress={onPress}>
                <Text style={titleBtn}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn:{
        width:74,
        height:64,
        backgroundColor:'#2F2F2F',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
    },
    titleBtn:{
        color:'#E0E0E0',
        fontSize:16,
        fontFamily:'Lato-Black'

    }
})
export default BtnLanguage;