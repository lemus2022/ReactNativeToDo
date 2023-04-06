import React from 'react';
import {Text, View} from 'react-native';

const ListHeader = () => {
  return (
    <View style={{marginBottom: 10}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
        To Do App
      </Text>
    </View>
  );
};

export default ListHeader;
