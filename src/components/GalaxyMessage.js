import React from 'react';
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const GalaxtyMessage = () =>{
    return(
        <View style={styles.container}>
            <View style={{flex:1}}>
                {/* card 1 */}
                <View style={{flexDirection:'row'}}>
                    
                    <View style={{justifyContent:'flex-end'}}>
                        <Image source={require('../asstes/image/2.jpg')} style={styles.img}/>
                    </View>
                    <View style={styles.cardMsg}>
                        <Text style={styles.userName}>ibrahim</Text>
                        <Text style={styles.textMsg}>Hey Fly 9! I was tossing and turning all night! I haven’t slept a wink in 3 days! What’s</Text>
                        <Text style={styles.timeMsg}>17:45</Text>
                    </View>
                </View>

                {/* card 2 */}
                <View style={[styles.cardMsg,{backgroundColor:'#2F2F2F' ,alignSelf:'flex-end',marginTop:10}]}>
                    <Text style={[styles.textMsg,{color:'#E0E0E0'}]}>Where are you going?I am going to the salon for my haircut. What hairstyle would you like?</Text>
                    <Text style={[styles.timeMsg,{color:'#E0E0E0'}]}>17:45</Text>
                </View>

                {/* card 3 */}
                <View style={{flexDirection:'row',marginTop:10}}>
                    
                    <View style={{justifyContent:'flex-end'}}>
                        <Image source={require('../asstes/image/2.jpg')} style={styles.img}/>
                    </View>
                    <View style={styles.cardMsg}>
                        <Text style={styles.userName}>Mohamad</Text>
                        <Text style={styles.textMsg}>Hey Fly 9! I was tossing and turning all night! I haven’t slept a wink in 3 days! What’s</Text>
                        <Text style={styles.timeMsg}>17:45</Text>
                    </View>
                </View>
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
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:10,
        paddingHorizontal:15
    },
    img:{
        width:32,height:32,borderRadius:32,resizeMode:'contain'
    },
    cardMsg:{
        width:260,
        paddingHorizontal:10,
        paddingVertical:10,
        backgroundColor:'#E0E0E0',
        borderRadius:5,
        marginLeft:5
    },
    userName:{
        fontSize:16,
        color:'#2F2F2F'
    },
    textMsg:{
        color:'#4C5264',
        fontSize:14
    },
    timeMsg:{
        fontSize:10,
        color:'#2F2F2F',
        alignSelf:'flex-end',
        marginTop:5
    },
    msgWrapper: {
        height: 50,
        backgroundColor: '#252525',
        marginBottom: 15,
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
})
export default GalaxtyMessage;