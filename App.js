import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskScreen from './src/Screens/TaskScreen';

export default function App() {
  return (
    <TaskScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
