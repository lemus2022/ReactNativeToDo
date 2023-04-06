import React from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import HomeScreen from './src/screens/homeScreen';

const image = {uri: 'https://t4.ftcdn.net/jpg/03/07/55/03/360_F_307550392_TLfmBMFsRZbt0uNSeohoXuvPTSRCaKIt.jpg'};


const App = () => {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <HomeScreen />
    </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default App;
