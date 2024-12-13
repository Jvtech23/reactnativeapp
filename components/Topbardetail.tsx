import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Ensure you have installed react-native-vector-icons
import { useRouter } from "expo-router";
const Topbardetail = () => {
  const router = useRouter();
  const handleBackPress = () => {
    // Replace the current route with a new one
    router.replace("/(tabs)");
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0047BA" />
      <View style={styles.topBar}>
        {/* Back Icon */}
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-undo-circle-outline" size={25} color="#fff" />
          
        </TouchableOpacity>
        {/* Title */}
        <Text style={styles.title}>RDPMS</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: '#0047BA',
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#757575',
  },
  backButton: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  title: {
  
    fontSize: 18,
    fontWeight: 'bold', 
    color: '#fff', 
    textAlign: 'center', 
    marginLeft: 98,
    letterSpacing: 1.2, 
    marginBottom: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.3)', 
    textShadowOffset: { width: 0, height: 2 }, 
    textShadowRadius: 4, maxWidth: '70%', },
});

export default Topbardetail;
