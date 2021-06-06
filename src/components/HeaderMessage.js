import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity, Image, TextInput,ScrollView,KeyboardAvoidingView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const HeaderMessage =({onPress}) =>{
    
        const {
            container,contentImageName,image,username,btnAddFriend,titleBtn
        } = styles;
    
        return(
            <View style={container}>
                <TouchableOpacity onPress={onPress}>
                    <AntDesign name='arrowleft' color='#ECF1FF' size={20}/>
                </TouchableOpacity>
    
                <View style={contentImageName}>
                    <Image source={require('../asstes/image/2.jpg')} style={image}/>
                    <Text style={username}>Mohamad</Text>
                </View>
    
                <TouchableOpacity style={btnAddFriend}>
                    <Text style={titleBtn}>Add Friend</Text>
                </TouchableOpacity>
            </View>

        )
    
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        paddingHorizontal:15,
        height:50,
        alignItems:'center',
        justifyContent:'space-between'
    },
    contentImageName:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    image:{
        width:26,
        height:26,
        borderRadius:26
    },
    username:{
        color:'#FFFFFF',
        marginLeft:5,
        fontSize:14
    },
    btnAddFriend:{
        backgroundColor:'#1A1A1A',
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:5
    },
    titleBtn:{
        color:'#EEEEEE',
        fontSize:10
    }
})
export default HeaderMessage;