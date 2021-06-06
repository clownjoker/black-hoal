import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';


import SpaceScreen from './SpaceScreen';
import ZoneScreen from './ZoneScreen';

class BlackHoal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zone: false,
      galaxy: false,
      space: false,
      disable: false,
    };
  }

  componentDidMount() {
    {
      this.setState({space: true});
    }
  }

  render() {
    const zoneFunction = () => {
      this.setState({zone: true});
      this.setState({galaxy: false});
      this.setState({space: false});
    };
    const galaxyFunction = () => {
      this.setState({zone: false});
      this.setState({galaxy: true});
      this.setState({space: false});
    };
    const spaceFunction = () => {
      this.setState({zone: false});
      this.setState({galaxy: false});
      this.setState({space: true});
    };
    const btnStyle = this.state.disable ? styles.btnNormal : styles.btnPress;

    return (
      <View style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <Image
            source={require('../asstes/image/blackHoal.png')}
            style={{width: 120, height: 19, resizeMode: 'contain'}}
          />
          <AntDesign name="infocirlce" size={20} color="#E0E0E0" />
        </View>

        {/* 3 btn space zone galaxy */}
        <View style={styles.btnView}>
          <TouchableOpacity
            style={btnStyle}
            onPress={() => {
              spaceFunction();
            }}>
            <Text style={styles.titleBtn}>Space</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={btnStyle}
            onPress={() => {
              zoneFunction();
            }}>
            <Text style={styles.titleBtn}>Zone</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={btnStyle}
            onPress={() => {
              galaxyFunction();
            }}>
            <Text style={styles.titleBtn}>Galaxy</Text>
          </TouchableOpacity>
        </View>

        {this.state.space ? <SpaceScreen /> : null}
        {this.state.zone ? <ZoneScreen /> : null}
        {this.state.galaxy ? 
            <View style={styles.containerGalaxy}>
            <View style={styles.contentMovieMarital}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('movies')}>
                <Image
                  source={require('../asstes/image/movies.jpg')}
                  style={styles.imgMovieCrazy}
                />
              </TouchableOpacity>
      
              <TouchableOpacity onPress={() => this.props.navigation.navigate('movies')}>
                <Image
                  source={require('../asstes/image/marital.jpg')}
                  style={styles.imgMarital}
                />
              </TouchableOpacity>
            </View>
      
            <View style={styles.contentCrazy}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('movies')}>
                <Image
                  source={require('../asstes/image/crazy.jpg')}
                  style={styles.imgMovieCrazy}
                />
              </TouchableOpacity>
            </View>
      
            <View style={styles.contentPsychological}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('movies')}>
                <Image
                  source={require('../asstes/image/psychological.jpg')}
                  style={styles.imgPsychological}
                />
              </TouchableOpacity>
            </View>
      
            <View style={styles.contentPolicy}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('movies')}>
                <Image
                  source={require('../asstes/image/policy.jpg')}
                  style={styles.imgPolicyAnime}
                />
              </TouchableOpacity>
      
              <TouchableOpacity onPress={() => this.props.navigation.navigate('movies')}>
                <Image
                  source={require('../asstes/image/mylovestory.jpg')}
                  style={styles.imgMyLoveStory}
                />
              </TouchableOpacity>
            </View>
      
            <View style={styles.contentAnime}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('movies')}>
                <Image
                  source={require('../asstes/image/anime.jpg')}
                  style={styles.imgPolicyAnime}
                />
              </TouchableOpacity>
            </View>
      
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('newGroup')}
              style={styles.btnNewGroup}>
              <Ionicons name="md-add-circle" size={18} color="#E0E0E0" />
              <Text style={styles.titleNewGroup}> New Group</Text>
            </TouchableOpacity>
          </View>
        
        : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  btnNormal: {
    width: 100,
    height: 48,
    backgroundColor: '#2F2F2F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  btnPress: {
    width: 100,
    height: 48,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  titleBtn: {
    color: '#737373',
    fontFamily: 'Lato-Bold',
    fontSize: 14,
  },
  msgWrapper: {
    height: 50,
    backgroundColor: '#252525',
    marginBottom: 15,
    marginHorizontal: 15,
    borderRadius: 25,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },

  inputMsg: {
    fontFamily: 'Cairo-Regular',
    fontSize: 12,
    color: '#EEEEEECC',
    flex: 1,
    marginLeft: 10,
  },

  containerGalaxy: {
    flex: 1,
    backgroundColor: '#121212',
    position: 'relative',
  },
  contentMovieMarital: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imgMovieCrazy: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },
  imgMarital: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
  },
  contentCrazy: {
    alignItems: 'flex-end',
    marginTop: -30,
  },
  contentPsychological: {
    alignItems: 'center',
    marginTop: -50,
  },
  imgPsychological: {
    width: 170,
    height: 170,
    resizeMode: 'contain',
  },
  contentPolicy: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: -60,
  },
  imgPolicyAnime: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },
  imgMyLoveStory: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  contentAnime: {
    alignItems: 'flex-start',
    marginTop: -10,
  },
  btnNewGroup: {
    width: 142,
    height: 45,
    backgroundColor: '#1A1A1A',
    bottom: 60,
    alignSelf: 'center',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  titleNewGroup: {
    fontSize: 12,
    color: '#EEEEEECC',
    marginLeft: 5,
    fontFamily: 'Lato-Medium',
  },
});
export default BlackHoal;
