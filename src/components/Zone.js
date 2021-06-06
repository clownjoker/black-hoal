import React from 'react';
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Zone = ({image,username,text}) =>{
    return(
        <View style={styles.conatainer}> 
            {/* header card */}
            <View style={styles.headerCard}>
                <View style={styles.subHeaderCard}>
                    <Image source={image} style={styles.img}/>
                    <Text style={styles.username}>{username}</Text>
                </View>
                <Text style={styles.time}>1h 30m</Text>
            </View>
            {/* contant card */}
            <View style={styles.contentCard}>
                <Text style={styles.textContent}>{text}</Text>
            </View>
            {/* comment view */}
            <View style={styles.commentView}>
                <TextInput 
                    placeholder='Comment...'
                    placeholderTextColor='#EEEEEECC'
                    style={styles.inputComment}
                />
            </View>

            
        </View>
    )
}

const styles = StyleSheet.create({
    conatainer:{
        paddingHorizontal:15,
        flex:1,
        marginTop:15,
    },
    headerCard:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    subHeaderCard:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        width:32,
        height:32,borderRadius:32
    },
    username:{
        fontSize:12,
        color:'#E0E0E0',
        marginLeft:10,
        fontFamily:'Lato-Medium'
    },
    time:{
        fontSize:12,
        color:'#EEEEEECC',
        fontFamily:'Lato-Medium'
    },
    contentCard:{
        paddingHorizontal:10,
        paddingVertical:15,
        backgroundColor:'#1A1A1A',
        marginTop:5,
        borderRadius:5
    },
    textContent:{
        fontSize:12,
        color:'#E0E0E0',
        lineHeight:15,
        fontFamily:'Lato-Regular'
    },
    commentView:{
        height:40,
        backgroundColor:'#2F2F2F',
        marginTop:4,
        borderBottomRightRadius:5,
        borderBottomLeftRadius:5
    },
    inputComment:{
        fontSize:12,
        color:'#EEEEEECC',
        paddingLeft:10,
        fontFamily:'Lato-Medium'
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
})
export default Zone