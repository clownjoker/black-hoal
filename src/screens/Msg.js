import React,{Component} from 'react';
import {View,Text,StyleSheet,ScrollView,TouchableOpacity,TextInput,Image} from 'react-native';
import Header from '../components/HeaderMessage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo'

class Msg extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          show: true,
          message: '',
        };
      }
    render(){
        return(
            <View style={styles.container}>
                <Header onPress={()=>this.props.navigation.navigate('contentTab')}/>

                <ScrollView style={{flex:1,marginHorizontal:15}}>
                    <View style={styles.cardMsg}>
                        <Text style={styles.text}>
                            Hey Fly 9! I was tossing and turning all night! I haven’t slept a wink in 3 days! What’s
                        </Text>
                        <Text style={styles.time}>17:45</Text>
                    </View>

                    <View style={styles.cardMsg2}>
                        <Text style={styles.text2}>
                            Where are you going?I am going to the salon for my haircut. What hairstyle would you like?  
                        </Text>
                        <Text style={styles.time2}>17:45</Text>
                    </View>
                </ScrollView>

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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#121212'
    },
    msgWrapper: {
        height: 50,
        backgroundColor: '#252525',
        marginBottom: 15,
        marginHorizontal: 15,
        borderRadius: 25,
        paddingHorizontal:10,
        flexDirection: 'row',
        alignItems: 'center',
      },
      
      inputMsg: {
        fontFamily: 'Cairo-Regular',
        fontSize: 12,
        color: '#EEEEEECC',
        flex: 1,
        marginLeft:10
      },
      cardMsg:{
        paddingHorizontal:10,
        paddingVertical:10,
        backgroundColor:'#E0E0E0',
        width:260,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        borderBottomRightRadius:5,
      },
      cardMsg2:{
        paddingHorizontal:10,
        paddingVertical:10,
        backgroundColor:'#2F2F2F',
        width:260,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5,
        alignSelf:'flex-end',
        marginTop:10
      },
    text:{
        fontSize:14,
        color:'#4C5264'
    },
    text2:{
        fontSize:14,
        color:'#E0E0E0',
    },
    time:{
        fontSize:12,
        color:'#2F2F2F',
        alignSelf:'flex-end',
        marginTop:5
    },
    time2:{
        alignSelf:'flex-end',fontSize:12,color:'#E0E0E0',marginTop:5
    }
})
export default Msg;