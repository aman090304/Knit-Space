import 'react-native-gesture-handler';
import React, { useCallback } from 'react';
import { View, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import AppNavigator from './app/navigation/AppNavigator';

const fetchFonts = () => {
  return Font.loadAsync({
    'Roboto-Regular': require('./assets/fonts/DotGothic16-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Silkscreen-Regular.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = React.useState(false);

  React.useEffect(() => {
    fetchFonts().then(() => setFontLoaded(true));
  }, []);

  if (!fontLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#333" />
      </View>
    );
  }

  return <AppNavigator />;
}
