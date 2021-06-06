import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';

const Friends = ({username ,source,onPress}) =>{
    const {contentFriendCard,image,onOff,Name} = styles;
    return(
        <TouchableOpacity style={contentFriendCard} onPress={onPress}>

            <View style={{position:'relative'}}>
                <Image source={source} style={image}/>
                <View style={onOff}/>
            </View>

            <View style={{marginLeft:20}}>
                <Text style={Name}>{username}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    contentFriendCard:{
        height:52,
        marginTop:10,
        marginHorizontal:15,
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:2
    },
    image:{
        height:50,
        width:50,
        borderRadius:50
    },
    onOff:{
        width:12,
        height:12,
        borderRadius:12,
        backgroundColor:'#00F86B',
        bottom:10,
        marginLeft:5,
        borderWidth:1,
        borderColor:'#fff'
    },
    Name:{
        fontSize:14,
        color:'#E0E0E0',
        fontFamily:'Lato-Regular'
    }
})
export default Friends;