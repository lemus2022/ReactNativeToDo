import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ListHeader from '../components/listHeader';
import TaskItem from '../components/taskItem';
import useTask from '../hooks/useTask';

import AntDesing from 'react-native-vector-icons/AntDesign';
import Weather from '../components/weather';

const screenHeight = Dimensions.get('screen').height;

const HomeScreen = () => {
  const {addTask, deleteTask, task, tasks, showAdd, updateAdd, editTask, updateTask, canEdit} =
    useTask();
  const [showWeather, setShowWeather] = useState(false);
  const [actualId, setActualId] = useState();
  const [showBtn, setShowBtn] = useState(false);

  // const [task, setTask] = useState('');
  // //Guardar tasks
  // const [tasks, setTasks] = useState(['Tareas pendientes']);

  // const addTask = () => {
  //   //agregar el task al arreglo
  //   setTasks(currentTasks => [...currentTasks, task]);
  //   //limpiar el task
  //   setTask('');
  //   //quitar input
  //   setShowAdd(false);
  // };

  // const deleteTask = index => {
  //   let temp = [...tasks];
  //   temp.splice(index, 1);
  //   setTasks(temp);
  // };

  return (
    <SafeAreaView style={{marginHorizontal: 20, marginTop: 10}}>
      {showAdd && (
        //Contenedor del input
        <View>
          <TextInput
            placeholder="Add new task"
            style={styles.input}
            value={task}
            onChangeText={editTask}
          />
          <View style={{marginVertical: 10, flexDirection: 'row'}}>
            <TouchableOpacity
              style={[styles.button, styles.acceptButton]}
              onPress={addTask}>
              <AntDesing
                name="plus"
                color={'#D2ECFD'}
                size={25}
                style={styles.buttonText}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.cancelarButton]}
              onPress={() => updateAdd(false)}>
              <AntDesing
                name="close"
                color={'#D2ECFD'}
                size={25}
                style={styles.buttonText}
              />
            </TouchableOpacity>
            {showBtn ? <TouchableOpacity style={[styles.button, styles.editButton]}
              onPress={() => {updateTask(actualId); setShowBtn(false)}}>
              <AntDesing
                name="check"
                color={'#D2ECFD'}
                size={25}
                style={styles.buttonText} />

            </TouchableOpacity> : '' }
          </View>
        </View>
      )}

      <View>
        <FlatList
          data={tasks}
          keyExtractor={item => item}
          renderItem={({item, index}) => (
            <TaskItem task={item} onPress={() => deleteTask(index)} onPressEdit={() => {editTask(item, index); setActualId(index); setShowBtn(true)}}/>
          )}
          ListHeaderComponent={() => <ListHeader />}
          ItemSeparatorComponent={() => <View style={{marginVertical: 5}} />}
        />
      </View>

      {/*Botón para agregar tarea*/}

      <View style={styles.addButtonContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => updateAdd(true)}>
          <AntDesing
            name="checksquareo"
            color={'#919596'}
            size={25}
            style={styles.addButtonText}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.weatherButton}
          onPress={() =>
            showWeather ? setShowWeather(false) : setShowWeather(true)
          }>
          <AntDesing
            name={showWeather ? 'close' : 'cloudo'}
            color={'#919596'}
            size={25}
            style={styles.addButtonText}
          />
        </TouchableOpacity>
      </View>
      <View>{showWeather && <Weather />}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 60,
    width: 60,
    backgroundColor: '#12a4ff',
  },
 
  weatherButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 60,
    width: 60,
    backgroundColor: '#63b6eb',
    marginLeft: 10,
  },
  addButtonText: {
    color: 'black',
    fontSize: 32,
    fontWeight: 'bold',
  },
  
  addButtonContainer: {
    position: 'absolute',
    top: screenHeight - 160,
    right: 10,
    flexDirection: 'row',
  },
  input: {
    padding: 10,
    backgroundColor: '#dedede',
    borderRadius: 10,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    //solo toma el tamaño del contenido
    alignSelf: 'flex-start',
  },
  acceptButton: {
    backgroundColor: '#009AFF',
  },
  editButton: {
    backgroundColor: '#50a112',
    left: 8,
  },
  buttonText: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  cancelarButton: {
    backgroundColor: '#d90021',
    marginLeft: 5,
  },

});
export default HomeScreen;
