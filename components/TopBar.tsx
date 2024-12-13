import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const TopBar = () => {
  return (
    <>
      
      <StatusBar barStyle="light-content" backgroundColor="#0047BA" />
      <View style={styles.topBar}>
        <Text style={styles.title}>RDPMS</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: '#0047BA',
    height: 30, 
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'black',
    
  },
  title: { 
    fontSize: 18,
    fontWeight: 'bold', 
    color: '#fff', 
    textAlign: 'center', 
    letterSpacing: 1.2, 
    marginBottom: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.3)', 
    textShadowOffset: { width: 0, height: 2 }, 
    textShadowRadius: 4, maxWidth: '70%', },
    
});
 
export default TopBar;
