import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Example() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/gratis-icon.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  logo: {
    height: 225,
    width: 430,
  }
});
