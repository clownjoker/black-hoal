import React from 'react';
import {View, Text, StyleSheet,TextInput,TouchableOpacity,Image,ImageBackground} from 'react-native';
import Button from '../components/BtnLanguage';
import UserIcon from 'react-native-vector-icons/Entypo';

const SelectLanguage=({navigation})=>{
    
    const {container,image,titleWrapper,selectLanguageContent,
           userNameContanet,input,icon,btnNextContentBG,
           next
        } = styles;

    return(
        <View style={container}>
            {/* title */}
            <View style={titleWrapper}>
                <Image source={require('../asstes/image/blackHoal.png')} style={image}/>
            </View>

            {/* btn to select language */}
            <View style={selectLanguageContent}>
                {/* use onPress props to handel fun */}
                <Button title='EN'/>
                <Button title='AR'/>
            </View>
            {/* input user name */}
            <View style={userNameContanet}>
                <UserIcon name='user' size={18} color='#E0E0E0' style={icon}/>
                <TextInput 
                    style={input}
                    placeholder='User Name'
                    placeholderTextColor='#E0E0E0'
                    
                />
            </View>

            {/* Btn next  */}
            {/* style={btnNext} */}
            <TouchableOpacity  onPress={()=>navigation.navigate('contentTab')}>
                <ImageBackground source={require('../asstes/icons/action.png')} style={btnNextContentBG}>
                    <Text style={next}>
                        next
                    </Text>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#000'
    },
    titleWrapper:{
        marginTop:120,
        alignItems:'center'
    },
    image:{
        width:230,
        height:37,
        resizeMode:'contain'
    },
    selectLanguageContent:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:110,
        paddingHorizontal:60
    },
    userNameContanet:{
        backgroundColor:'#1E1E1E',
        height:60,
        marginTop:30,
        marginHorizontal:30,
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center',
    },
    input:{
        flex:1,
        marginRight:20,
        marginLeft:10,
        fontSize:14,
        textAlign:'center',
        fontFamily:'Lato-Regular'
    },

    icon:{
        marginLeft:20
    },

    btnNextContentBG:{
        marginTop:30,
        alignSelf:'center',
        width:110,
        height:110,
        alignItems:'center',
        justifyContent:'center',
    },
    
    next:{
        color:'#E0E0E0',
        fontSize:16,
        fontFamily:'Lato-Bold'
    }
})
export default SelectLanguage;
