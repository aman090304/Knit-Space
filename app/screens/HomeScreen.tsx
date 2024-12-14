import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Knit-Space</Text>
      <Button title="Go to Schedule" onPress={() => navigation.navigate('Schedule')} />
      <Button title="Go to Leaderboard" onPress={() => navigation.navigate('Leaderboard')} />
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
    fontFamily: 'SFProText-Bold',
    fontSize: 24,
    color: '#333',
    marginBottom: 20,
  },
});

export default HomeScreen;
