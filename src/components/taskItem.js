import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import AntDesing from 'react-native-vector-icons/AntDesign';

const TaskItem = ({task, onPress, onPressEdit}) => {
  return (
    
    <View style={style.container}>
      <Text style={style.text}>*  {task}</Text>
      <TouchableOpacity style={style.editButton} onPress={onPressEdit}>
        
      <AntDesing
            name="edit"
            color={'#919596'}
            size={25}
            style={style.editButton}
          />
          <TouchableOpacity style={style.button} onPress={onPress}>
        <AntDesing
          name="delete"
          color={'#D2ECFD'}
          size={27}
          style={style.buttonDelete}
        />
       
      </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    padding: 10,
    flexDirection: 'row',
    borderRadius: 10,
    height: 90,
    backgroundColor: '#0dc3ff',
  },
  button: {
    alignItems: 'center',
    paddingTop: 3,
    height: 40,
    width: 40,
    borderRadius: 5,
  },
  editButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 1,
    borderRadius: 10,
    height: 35,
    width: 35,
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 6,
    fontSize: 22,
  },
  buttonDelete: {
    color: '#d90021',
    paddingHorizontal: 1,
    paddingVertical: 1,
  },
  bullet: {
    color: 'black',
  }
});

export default TaskItem;
