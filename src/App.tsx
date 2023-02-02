import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Paprika_400Regular } from '@expo-google-fonts/paprika';

export default function App() {

  let [fontsLoaded] = useFonts({
    Paprika_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Paprika_400Regular', fontSize: 30 }}>Tickepom</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
