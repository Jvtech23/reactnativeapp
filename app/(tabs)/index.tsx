import React, { useRef, useEffect, useState } from 'react';
import { useRouter } from "expo-router";
import DropdownComponent from '@/components/DropdownComponent'; 

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Animated,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const zoneData = [
  { label: 'Zone 1', value: 'zone1' },
  { label: 'Zone 2', value: 'zone2' },
  { label: 'Zone 3', value: 'zone3' },
];

const divisionData = [
  { label: 'Division A', value: 'divisionA' },
  { label: 'Division B', value: 'divisionB' },
  { label: 'Division C', value: 'divisionC' },
];

const stationData = [
  { label: 'Station X', value: 'stationX' },
  { label: 'Station Y', value: 'stationY' },
  { label: 'Station Z', value: 'stationZ' },
];

const Page = () => {
  const router = useRouter();
  const { top: safeTop } = useSafeAreaInsets();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [dropdownVisible, setDropdownVisible] = useState({
    zone: false,
    division: false,
    station: false,
  });

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, 
      duration: 500, 
      useNativeDriver: true, 
    }).start();
  }, []);

  const toggleDropdown = (key) => {
    setDropdownVisible((prev) => {
      const updatedState = { zone: false, division: false, station: false };
      updatedState[key] = !prev[key];
      return updatedState;
    });
  };

  const closeDropdowns = () => {
    setDropdownVisible({ zone: false, division: false, station: false });
  };

  return (
    <TouchableWithoutFeedback onPress={closeDropdowns}>
      <LinearGradient
        colors={['#F5F5FB', '#F5F5FB']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.gradientContainer, { paddingTop: safeTop }]}
      >
 
    <View style={styles.container}>
      <Animated.View style={[styles.selectorContainer, { opacity: fadeAnim }]}>
        <DropdownComponent placeholder="Zone" data={zoneData} />
        <DropdownComponent placeholder="Division" data={divisionData} />
        <DropdownComponent placeholder="Station" data={stationData} />
      </Animated.View>
    </View>

        <TouchableOpacity onPress={() => router.replace("/details")}>

        <View style={styles.card}>
     
      <View style={styles.header}>
      <Image source={require('@/assets/images/pm1.png')} style={styles.iconImage} />
        <Text style={styles.title}>Point Machine</Text>
      </View>
      
     
      <View style={styles.line} />

      
      <View style={styles.details}>
        <Text style={styles.detailText1}>Normal - 12</Text>
        <View style={styles.verticalLine} />
        <Text style={styles.detailText2}>Failure - 2</Text>
        <View style={styles.verticalLine} />
        <Text style={styles.detailText3}>Predicted - 1</Text>
      </View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => router.replace("/detailsaxle")}>
        <View style={styles.card}>
      
      <View style={styles.header}>
      <Image source={require('@/assets/images/ax1.png')} style={styles.iconImage} />
        <Text style={styles.title}>Axle Counter 202</Text>
      </View>
      
     
      <View style={styles.line} />

     
      <View style={styles.details}>
        <Text style={styles.detailText1}>Normal - 12</Text>
        <View style={styles.verticalLine} />
        <Text style={styles.detailText2}>Failure - 2</Text>
        <View style={styles.verticalLine} />
        <Text style={styles.detailText3}>Predicted - 1</Text>
      </View>
    </View>
    </TouchableOpacity>
   

    <TouchableOpacity onPress={() => router.replace("/detailstrack")}>
        <View style={styles.card}>
      
      <View style={styles.header}>
      <Image source={require('@/assets/images/tc1.png')} style={styles.iconImage} />
        <Text style={styles.title}>Track Circuit</Text>
      </View>
      
     
      <View style={styles.line} />

      
      <View style={styles.details}>
        <Text style={styles.detailText1}>Normal - 12</Text>
        <View style={styles.verticalLine} />
        <Text style={styles.detailText2}>Failure - 2</Text>
        <View style={styles.verticalLine} />
        <Text style={styles.detailText3}>Predicted - 1</Text>
      </View>
    </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => router.replace("/detailsignal")}>
        <View style={styles.card}>
     
      <View style={styles.header}>
      <Image source={require('@/assets/images/sig1.png')} style={styles.iconImage} />
        <Text style={styles.title}>Signal Lamp</Text>
      </View>
      
     
      <View style={styles.line} />

      
      <View style={styles.details}>
        <Text style={styles.detailText1}>Normal - 12</Text>
        <View style={styles.verticalLine} />
        <Text style={styles.detailText2}>Failure - 2</Text>
        <View style={styles.verticalLine} />
        <Text style={styles.detailText3}>Predicted - 1</Text>
      </View>
    </View>
    </TouchableOpacity>
       
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  tabButton: {
    flex: 1,
    borderColor: '#C3C3C3',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 6,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
   },
  
  tabButtonActive: {
    backgroundColor: '#E0E8F9',
    borderColor: '#8DA5F0',
  },
  tabButtonText: {
    fontSize: 12,
    color: '#757474', 
    fontWeight: '500',
    textShadowColor: '#0047BA', 
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 0.5, 
  },
  
  tabButtonTextActive: {
    color: '#4A6FDB',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#D0D0D0',
    
  },
  selectorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    marginTop: 15,
    paddingHorizontal: 10,
    zIndex: 1000,
    
  },
  dropdown: {
    position: 'absolute',
    top: 45,
    left: 0,
    right: 0,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    zIndex: 1000, 
    elevation: 10, 
    overflow: 'visible',
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    
  },
  gridContainer: {
    flexDirection: 'column',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  box: {
    width: '48%',
    padding: 35,
    borderWidth: 1,
    borderColor: '#C3C3C3',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginTop: 20,
  },
  header: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
    textAlign: 'center',
    
  },
  normal: {
    color: '#00D756',
    fontSize: 12,
    fontWeight: 'bold',
   
  },
  failed: {
    color: '#D10000',
    fontSize: 12,
    fontWeight: 'bold',
  },
  predicted: {
    color: '#EAD304',
    fontSize: 12,
    fontWeight: 'bold',
  },
  iconImage: {
    width: 50,
    height: 50,
    borderRadius: 2, // Makes the image circular
    borderWidth: 1, // Border width around the image
    borderColor: '#C3C3C3', // Border color matching the blue theme
    shadowColor: '#0047BA', // Adds a glowing shadow around the image
    shadowOffset: { width: 0, height: 4 }, // Slight offset for a lifted look
    shadowOpacity: 0.5, // Make the shadow semi-transparent
    shadowRadius: 6, // Increase the shadow blur for a more attractive glow
    elevation: 5, // Adds shadow on Android devices
    backgroundColor: '#fff', // Background color to create a clean border effect
    padding: 5, // Adds some padding inside the image border
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#0047BA',
    shadowOpacity: 2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
    marginHorizontal: 20,
    marginVertical: 5,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#C3C3C3',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 17,
    
    marginLeft: 58,
    color: '#0047BA',
    textShadowColor: '#0047BA', 
    textShadowOffset: { width: 0.5, height: 0.5 }, 
    textShadowRadius: 0.2, 
  },
  line: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 10,
   
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailText1: {
    fontSize: 12,
    color: 'green',
    fontWeight: 'bold',
    textShadowColor: '#DDDDDD',
    textShadowOffset: { width: 0.5, height: 0.5 }, 
    textShadowRadius: 0.5, 
  },
  detailText2: {
    fontSize: 12,
    color: '#CE310A',
    fontWeight: 'bold',
    textShadowColor: '#DDDDDD', 
    textShadowOffset: { width: 0.5, height: 0.5 }, 
    textShadowRadius: 0.5, 
  },
  detailText3: {
    fontSize: 12 ,
    color: '#EFCB00',
    fontWeight: 'bold',
    
    textShadowOffset: { width: 0.2, height: 0.2 },
    textShadowRadius: 0.5,
  },
  verticalLine: {
    width: 1,
    backgroundColor: '#ccc',
    height: '100%',
    marginHorizontal: 10,
  },
});




export default Page;
