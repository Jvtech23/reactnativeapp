import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from "expo-router";

const AssetButtonsRow = () => {
    const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => router.replace("/details")}>
          <Text style={styles.buttonText}>Point Machine</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.replace("/detailsaxle")}>
          <Text style={styles.buttonText}>Axle Counter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.replace("/detailstrack")}>
          <Text style={styles.buttonText}>Track Circuit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.replace("/detailsignal")}>
          <Text style={styles.buttonText}>Signal Lamp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8', // Optional for background color
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
   
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 5,
    backgroundColor: '#ffffff',
    borderRadius: 8, // Makes buttons rounded
    borderWidth: 1,
    borderColor: '#D0D0D0', 
    alignItems: 'center',
    marginHorizontal: 5,
    elevation: 2, // Adds subtle shadow on Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    fontSize: 11,
    color: '#4E4E4E',
    fontWeight: '500',
  },
});

export default AssetButtonsRow;
