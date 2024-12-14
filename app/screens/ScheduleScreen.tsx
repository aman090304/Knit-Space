import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScheduleScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Schedule</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 24,
    color: '#333',
  },
});

export default ScheduleScreen;