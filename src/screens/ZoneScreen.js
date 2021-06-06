import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Zone from '../components/Zone';

const ZoneScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Zone
          image={require('../asstes/image/2.jpg')}
          username="ibrahim"
          text="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two"
        />

        <Zone
          image={require('../asstes/image/2.jpg')}
          username="ibrahim"
          text="test test test test test testtest test testtest test testtest test testtest test test"
        />

        <Zone
          image={require('../asstes/image/2.jpg')}
          username="ibrahim"
          text="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two"
        />
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
export default ZoneScreen;
