import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image,ImageBackground} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Send = ({navigation}) =>{
    return(
        <View style={styles.container}>
            {/* arrow */}
            <View style={styles.arrow}>
                <TouchableOpacity onPress={()=>navigation.navigate('sendRecepion')}>
                    <AntDesign name='arrowleft' size={25} color='#ECF1FF'/>
                </TouchableOpacity>
            </View>

            <View style={styles.choosinImage}>
                <ImageBackground source={require('../asstes/icons/3.png')} style={styles.imgBackground}>
                    <Image source={require('../asstes/icons/4.png')} style={styles.img}/>
                </ImageBackground>
            </View> 
            
            <View style={{height:150,marginTop:20}}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.titleBtn}>chose image to sheer</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:15,
        backgroundColor:'#121212'
    },
    arrow:{
        marginTop:15
    },
    choosinImage:{
        height:310,
        marginTop:30,
        justifyContent:'center',
        alignItems:'center'
    },
    imgBackground:{
        width:160,
        height:160,
        justifyContent:'center',
        alignItems:'center'
    },
    btn:{
        height:60,
        backgroundColor:'#FFFFFF',
        marginTop:20,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    titleBtn:{
        color:'#121212',
        fontSize:16,
        fontFamily:'Lato-Bold'
    },
    img:{
        width:80,
        height:80,
        resizeMode:'contain'
    }
})
export default Send;