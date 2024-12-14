import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const Dashboard = ({ tasks, points, leaderboard }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text>Points: {points}</Text>

      <Text style={styles.subtitle}>Tasks:</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>- {item}</Text>}
      />

      <Text style={styles.subtitle}>Leaderboard:</Text>
      <FlatList
        data={leaderboard}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Text>
            {index + 1}. {item.name}: {item.points} pts
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Dashboard;
