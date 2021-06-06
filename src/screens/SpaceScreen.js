import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import Space from '../components/Space';

const SpaceScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={{position: 'relative'}}>
        <Space
          onPress={() => this.props.navigation.navigate('msg')}
          text="The quick, brown fox jumps over a lazy dog"
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Space text="The quick" />
          <Space text="The quick, brown fox jumps ddddddsss" />
        </View>

        <Space text="The quick, brown fox jumps over a lazy dog. DJs flock by" />
        <Space text="The quick, brown fox jumps over a lazy dog. DJs flock by" />
        <Space text="The quick, brown fox " />

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Space text="The quick" />
          <Space text="The quick, brown fox jumps ddddddsss" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: '#121212'
    }
})
export default SpaceScreen;
