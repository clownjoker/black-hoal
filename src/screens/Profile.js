import React from 'react';
import {View, Text,StyleSheet,Image, TouchableOpacity,ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Friends from '../components/Friends';

const Profile = ({navigation}) =>{
    const { 
        container,contentImgArrow,arrowBack,image,imageView,btnEdit,titleBtnEdit,nameUser,titleFriends,
        contentFriendCard
    } = styles;
    return(
        <View style={container}>
            {/* content image profile and arrow back */}
            <View style={contentImgArrow}>

                {/* arrow back */}
                <TouchableOpacity style={arrowBack} onPress={()=>navigation.navigate('blackHoal')}>
                    <AntDesign name='arrowleft' color='#000' size={25}/>
                </TouchableOpacity>

                {/* image */}
                <View style={{alignItems:'center',marginTop:5}}>

                    <View style={imageView}>
                        <Image source={require('../asstes/image/profile.png')} style={image}/>

                        <TouchableOpacity style={btnEdit}>
                            <Text style={titleBtnEdit}>Edit Photo</Text>
                        </TouchableOpacity>

                        <Text style={nameUser}>ibrahim</Text>
                    </View>

                </View>
            </View>

            {/* contet of firend */}
            <View style={{flex:1}}>
                <Text style={titleFriends}>Friends</Text>
                <ScrollView style={{marginTop:10}}>
                    <Friends  onPress={()=>navigation.navigate('msg')} username='Nicolas McCoy' source={require('../asstes/image/2.jpg')}/>
                    <Friends  username='Amber Schneider' source={require('../asstes/image/2.jpg')}/>
                    <Friends  username='Justin Miller' source={require('../asstes/image/2.jpg')}/>
                    <Friends  username='Eliza Watkins' source={require('../asstes/image/2.jpg')}/>
                    <Friends  username='Francine Hoffman' source={require('../asstes/image/2.jpg')}/>
                    <Friends  username='Nick Alvarado' source={require('../asstes/image/2.jpg')}/>

                </ScrollView>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#121212'
    },
    contentImgArrow:{
        backgroundColor:'#252525',
        height:210
    },
    arrowBack:{
        marginTop:10,
        marginLeft:15
    },
    imageView:{
        width:120,
        height:120,
        backgroundColor:'#eee',
        borderRadius:120,
        resizeMode:'contain',
        position:'relative',
        alignItems:'center'
    },
    image:{
        width:110,
        height:110,
        resizeMode:'contain',
        borderRadius:300
    },
    btnEdit:{
        backgroundColor:'#1E1E1E',
        marginTop:-10,
        paddingVertical:2,
        height:23,
        width:83,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    titleBtnEdit:{
        color:'#FFFFFF',
        alignSelf:'center',
        fontSize:10,
        fontFamily:'Lato-Medium'
    },
    nameUser:{
        color:'#FFFFFF',
        fontSize:18,
        marginTop:10,
        fontFamily:'Lato-Bold'
    },
    titleFriends:{
        fontSize:14,
        color:'#fff',
        marginTop:10,
        alignSelf:'center',
        fontFamily:'Lato-Medium'
    },
    contentFriendCard:{
        height:52,
        marginTop:20,
        marginHorizontal:15,
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:2
    }
})
export default Profile;