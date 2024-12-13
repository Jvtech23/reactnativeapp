import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useRouter} from "expo-router";
import {StatusBar } from 'react-native';

const LoginScreen = () => {
  const router = useRouter();
  return (
    
    <View style={styles.container}>
       <StatusBar barStyle="light-content" backgroundColor="#0047BA" />
      
      <View style={styles.header}>
  <Image source={require('@/assets/images/logo1.png')} style={styles.logo1} />
  <Text style={styles.title}>RDPMS</Text>
  
  <Image source={require('@/assets/images/logo2.png')} style={styles.logo} />
</View>

     
      <View style={styles.whiteContainer}>
       
        <View style={styles.imageContainer}>
          <Image
            source={require("@/assets/images/login5.png")}
            style={styles.image}
          />
        </View>

        <Text style={styles.welcomeText}>Welcome to Indian Railway</Text>

       
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="UserId" placeholderTextColor="#aaa" />
          <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#aaa" secureTextEntry />
        </View>

        
        

        <TouchableOpacity 
          onPress={() => router.replace("/(tabs)")} 
          activeOpacity={0.8} 
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>



      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
     flex:1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    position: 'absolute',
    flexDirection: 'row',
    top: 0,
    left: 0,
    right: 0,
    height: '40%', 
    backgroundColor: '#0047BA',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    padding: 10,
  },
  logo1: {
    width: 60, 
    height: 60, 
    marginHorizontal: 65, 
    marginBottom: 100,
  },
  logo: {
    width: 50, 
    height: 50, 
    marginHorizontal: 65, 
    marginBottom: 100,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 105,
  },
  whiteContainer: {
    flex: 1,
    marginTop: '35%', 
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
    paddingVertical: 20,
    zIndex: 2, 
  },
  imageContainer: {
    marginVertical: 20,
  },
  image: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  inputContainer: {
    width: '75%',
  },
  input: {
    backgroundColor: '#e6e6e6',
    padding: 11,
    borderRadius: 8,
    marginBottom: 15,
    color: '#333',
  },
  button: {
    backgroundColor: '#0047BA',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
