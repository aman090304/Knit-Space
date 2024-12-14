import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SchoolModeToggle = ({ onToggle }) => {
  const [isSchoolMode, setIsSchoolMode] = useState(false);

  const toggleSchoolMode = () => {
    setIsSchoolMode(!isSchoolMode);
    onToggle(!isSchoolMode);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isSchoolMode ? 'School Mode Active' : 'School Mode Inactive'}
      </Text>
      <Button
        title={isSchoolMode ? 'Deactivate School Mode' : 'Activate School Mode'}
        onPress={toggleSchoolMode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default SchoolModeToggle;
