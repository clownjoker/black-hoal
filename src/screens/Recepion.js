import React from 'react';
import {View, Text,StyleSheet,Image,TouchableOpacity,TextInput,KeyboardAvoidingView,Platform } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Recepion = ({navigation}) =>{
    return(
        <KeyboardAvoidingView behavior='position'  style={styles.container}>
            {/* arrow */}
            <View style={styles.arrow}>
                <TouchableOpacity onPress={()=>navigation.navigate('sendRecepion')}>
                    <AntDesign name='arrowleft' size={25} color='#ECF1FF'/>
                </TouchableOpacity>
            </View>

            <View style={{width:'100%' ,height:400,backgroundColor:'#eee',marginTop:15,borderRadius:5}}>

            </View>

            <View style={styles.msgWrapper}>
                <TextInput
                    placeholder="Write your message…"
                    style={styles.inputMsg}
                    placeholderTextColor="#EEEEEECC"
                    multiline
                    onChangeText={(message) => this.setState({message})}
                />
                <TouchableOpacity>
                    <MaterialCommunityIcons color='#FFFFFF' size={25} name='send'/>
                </TouchableOpacity>
                   
            </View>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:20,
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
    msgWrapper: {
        height: 50,
        backgroundColor: '#252525',
        marginBottom: 15,
        borderRadius: 25,
        paddingHorizontal:10,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:15
      },
      
      inputMsg: {
        fontFamily: 'Cairo-Regular',
        fontSize: 12,
        color: '#EEEEEECC',
        flex: 1,
        marginLeft:10,
        fontFamily:'Lato-Medium'
      },
})
export default Recepion;