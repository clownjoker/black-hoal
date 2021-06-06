import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import GalaxtyMessage from '../components/GalaxyMessage';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Policy = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{navigation.navigate('contentTab')}}>
                    <AntDesign name='arrowleft' color='#ECF1FF' size={25}/>
                </TouchableOpacity>
    
                <Text style={styles.title}>Moves</Text>
        
                <Text style={{color:'#121212'}}> .</Text>
            </View>
            <GalaxtyMessage />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#121212',
        // paddingHorizontal:15
    },
    header:{
        height:50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:15
    },
    title:{
        color:'#E0E0E0',
        fontSize:14
    }
})
export default Policy;