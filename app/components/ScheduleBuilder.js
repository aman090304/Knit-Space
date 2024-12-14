import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const ScheduleBuilder = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Schedule Builder</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a task (e.g., Math Class: 9 AM)"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default ScheduleBuilder;
