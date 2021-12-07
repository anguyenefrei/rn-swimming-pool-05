import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.ligne}>
        <View style={styles.square}/>
        <View style={styles.square}/>
        <View style={styles.square}/>
      </View>
      <View style={styles.ligne}>
        <View style={styles.rectangle}/>
        <View style={styles.rectangle}/>
        <View style={styles.rectangle}/>
      </View>
      <View style={styles.ligne}>
        <View style={styles.square}/>
        <View style={styles.square}/>
        <View style={styles.square}/>
      </View>
      <View style={styles.ligne}>
        <View style={styles.rectangle}/>
        <View style={styles.rectangle}/>
        <View style={styles.rectangle}/>
      </View>
      <View style={styles.ligne}>
        <View style={styles.square}/>
        <View style={styles.square}/>
        <View style={styles.square}/>
      </View>

      <View style={styles.ligne}>
        <View style={styles.rectangle}/>
        <View style={styles.rectangle}/>
        <View style={styles.rectangle}/>
      </View>
      <View style={styles.ligne}>
        <View style={styles.rectangle}/>
        <View style={styles.rectangle}/>
        <View style={styles.rectangle}/>
      </View>
      <View style={styles.ligne}>
        <View style={styles.square}/>
        <View style={styles.square}/>
        <View style={styles.square}/>
      </View>
      <View style={styles.ligne}>
        <View style={styles.rectangle}/>
        <View style={styles.rectangle}/>
        <View style={styles.rectangle}/>
      </View>
      <View style={styles.ligne}>


      </View>
      <View style={styles.ligne}>
        <View style={styles.square}/>
        <View style={styles.square}/>
        <View style={styles.square}/>
      </View>
      <View style={styles.ligne}>
        <View style={styles.rectangle}/>
        <View style={styles.rectangle}/>
        <View style={styles.rectangle}/>
      </View>
      <View style={styles.ligne}>
        <View style={styles.square}/>
        <View style={styles.square}/>
        <View style={styles.square}/>
      </View>
      <View style={styles.ligne}>
        <View style={styles.rectangle}/>
        <View style={styles.rectangle}/>
        <View style={styles.rectangle}/>
      </View>
      <View style={styles.ligne}>
        <View style={styles.square}/>
        <View style={styles.square}/>
        <View style={styles.square}/>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
  ligne: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  square: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    marginLeft: 10
  },
  rectangle: {
    width: 90,
    height: 50,
    backgroundColor: 'blue',
    margin: 10
  },
});
