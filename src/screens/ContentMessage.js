import React from 'react';
import {View, Text,StyleSheet,TouchableHighlight, Image, ScrollView } from 'react-native';
import Meassage from '../components/Message';
import ReadMessage from '../components/ReadMessage';


const ContentMessage = () =>{
    const [ isPress, setIsPress ] = React.useState(false);
    const touchProps = {
        activeOpacity: 1,
        style: isPress ? styles.btnPress : styles.btnNormal,
        onHideUnderlay: () => setIsPress(false),
        onShowUnderlay: () => setIsPress(true),
        onPress: () => console.log('HELLO'),           
      };

    const touchProps2 = {
        activeOpacity: 1,                              
        style: isPress ? styles.btnNormal : styles.btnPress, 
        onHideUnderlay: () => setIsPress(true),
        onShowUnderlay: () => setIsPress(false),
        onPress: () => console.log('HELLO'),                 
    };
      
    return(
        <View style={styles.container}>
            <View style={styles.btnView}>
                <TouchableHighlight {...touchProps}>
                    <Text style={styles.titleBtn}>Messages</Text>
                </TouchableHighlight>
                <TouchableHighlight {...touchProps2}>
                    <Text style={styles.titleBtn}>Comment</Text>
                </TouchableHighlight>
            </View>

            {isPress == true ? (
            <>
                <View style={{flex:1,backgroundColor:'#121212'}}>
                <ScrollView >
                    <ReadMessage source={require('../asstes/image/2.jpg')} username='Mohamed' TextMsg='bad nymph, for quick jigs vex!' Time='1h'/>
                    <ReadMessage source={require('../asstes/image/2.jpg')} username='Bobby Gray' TextMsg='The quick' Time='1h'/>
                    <ReadMessage source={require('../asstes/image/2.jpg')} username='Lori Oliver' TextMsg='Lorem ipsum' Time='1h'/>
                    <ReadMessage source={require('../asstes/image/2.jpg')} username='Justin Gordon' TextMsg='The quick, brown fox jumps over a lazy' Time='1h'/>
                    <ReadMessage source={require('../asstes/image/2.jpg')} username='Will Coleman' TextMsg='Lorem ipsum dolor sit' Time='1h'/>
                    <ReadMessage source={require('../asstes/image/2.jpg')} username='Vincent Matthews' TextMsg='The quick, brown fox jumps over a lazy dog. DJs flock by' Time='1h'/>
                    <ReadMessage source={require('../asstes/image/2.jpg')} username='Sandra Freeman' TextMsg='The quick, brown fox!' Time='1h'/>
                </ScrollView>
                </View>
            </>
          ) : (
            <View style={{flex:1,backgroundColor:'#121212'}}>
                <ScrollView >
                    <Meassage source={require('../asstes/image/2.jpg')} username='Mohamed' TextMsg='bad nymph, for quick jigs vex!' Time='1h'/>
                    <Meassage source={require('../asstes/image/2.jpg')} username='Bobby Gray' TextMsg='The quick' Time='1h'/>
                    <Meassage source={require('../asstes/image/2.jpg')} username='Lori Oliver' TextMsg='Lorem ipsum' Time='1h'/>
                    <Meassage source={require('../asstes/image/2.jpg')} username='Justin Gordon' TextMsg='The quick, brown fox jumps over a lazy' Time='1h'/>
                    <Meassage source={require('../asstes/image/2.jpg')} username='Will Coleman' TextMsg='Lorem ipsum dolor sit' Time='1h'/>
                    <Meassage source={require('../asstes/image/2.jpg')} username='Vincent Matthews' TextMsg='The quick, brown fox jumps over a lazy dog. DJs flock by' Time='1h'/>
                    <Meassage source={require('../asstes/image/2.jpg')} username='Sandra Freeman' TextMsg='The quick, brown fox!' Time='1h'/>

                </ScrollView>
            </View>
          )}

          
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#121212'
    },
    btnView:{
        flexDirection:'row'
    },
    btn:{
        height:55,
        flex:1,
        backgroundColor:'#1E1E1E',
        borderBottomWidth:1,
        borderColor:'#1E1E1E',
        alignItems:'center',
        justifyContent:'center'
    
    },
    btn2:{
        height:60,
        flex:1,
        backgroundColor:'#252525',
        borderBottomWidth:1,
        borderColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    
    },
    btnNormal: {
        backgroundColor:'#252525',
        flex:1,
        height:60,
        borderColor:'#FFFFFF',
        borderBottomWidth:1,
        justifyContent:'center',
        alignItems:'center'
      },
      btnPress: {
        backgroundColor:'#1E1E1E',
        flex:1,
        height:60,
        borderColor:'#1E1E1E',
        borderBottomWidth:1,
        justifyContent:'center',
        alignItems:'center'
    },
    titleBtn:{
        color:'#E0E0E0',
        fontSize:14,
        fontFamily:'Lato-Medium'
    }
})
export default ContentMessage;