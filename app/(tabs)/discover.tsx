import React, { useRef, useEffect, useState } from 'react';
import { useRouter } from "expo-router";
import DropdownComponent2 from '@/components/DropdownComponent2'; 

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Animated,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const assetData = [
  { label: 'Point', value: 'zone1' },
  { label: 'Axle', value: 'zone2' },
  { label: 'Track', value: 'zone3' },
  { label: 'Signal', value: 'zone3' },
];

const alertData = [
  { label: 'Failure', value: 'divisionA' },
  { label: 'Predictive', value: 'divisionB' },

];

const details = () => {

  const router = useRouter();
  const { top: safeTop } = useSafeAreaInsets();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [dropdownVisible, setDropdownVisible] = useState({
    assetData: false,
    alertData: false,
   
  });

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, // Final opacity
      duration: 500, // Animation duration
      useNativeDriver: true, // Use native driver for performance
    }).start();
  }, []);
  
  const toggleDropdown = (key) => {
    setDropdownVisible((prev) => {
      const updatedState = { assetData: false, alertData: false };
      updatedState[key] = !prev[key];
      return updatedState;
    });
  };

  const closeDropdowns = () => {
    setDropdownVisible({  assetData: false, alertData: false });
  };
 
  return (
    <TouchableWithoutFeedback >
      <LinearGradient
        colors={['#F5F5FB', '#F5F5FB']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.gradientContainer, { paddingTop: safeTop }]}
      >
        <View style={styles.container}>
           
        <Animated.View style={[styles.selectorContainer, { opacity: fadeAnim }]}>
        <DropdownComponent2 placeholder="Asset Type" data={assetData} />
        <DropdownComponent2 placeholder="Alert Type" data={alertData} />
        
      </Animated.View>
        </View>

    <View style={styles.statusOverview}>
        <Text style={styles.statusText}>Normal - 50</Text>
        <Text style={[styles.statusText, styles.predictiveText]}>Predictive - 10</Text>
        <Text style={[styles.statusText, styles.failureText]}>Failure - 5</Text>
      </View>
      <ScrollView style={styles.scrollableSection}>
      <View style={styles.card}>
      
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>PRYG-PT-101</Text>
          <Text style={styles.timestamp}>02-12-2023 19:34</Text>
        </View>
        <TouchableOpacity style={styles.acknowledgeButton}>
          <Text style={styles.acknowledgeText}>Acknowledge</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.statusSection}>
        <Text style={styles.statusText2}>Point Obstruction</Text>
        <Text style={styles.dots}>.........</Text>
      </View>
      <TouchableOpacity style={styles.failureButton}>
        <Text style={styles.failureText}>Failure</Text>
      </TouchableOpacity>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>True</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>False</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Maintenance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Remark</Text>
        </TouchableOpacity>
      </View>
    </View>
 
    <View style={styles.card}>
      {/* Header Section */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>PRYG-PT-101</Text>
          <Text style={styles.timestamp}>02-12-2023 19:34</Text>
        </View>
        <TouchableOpacity style={styles.acknowledgeButton}>
          <Text style={styles.acknowledgeText}>Acknowledge</Text>
        </TouchableOpacity>
      </View>

      {/* Status Section */}
      <View style={styles.statusSection}>
        <Text style={styles.statusText2}>Point Obstruction</Text>
        <Text style={styles.dots}>.........</Text>
      </View>
      <TouchableOpacity style={styles.failureButton}>
        <Text style={styles.failureText}>Failure</Text>
      </TouchableOpacity>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>True</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>False</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Maintenance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Remark</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.card}>
      {/* Header Section */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>PRYG-PT-101</Text>
          <Text style={styles.timestamp}>02-12-2023 19:34</Text>
        </View>
        <TouchableOpacity style={styles.acknowledgeButton}>
          <Text style={styles.acknowledgeText}>Acknowledge</Text>
        </TouchableOpacity>
      </View>

      {/* Status Section */}
      <View style={styles.statusSection}>
        <Text style={styles.statusText2}>Point Obstruction</Text>
        <Text style={styles.dots}>.........</Text>
      </View>
      <TouchableOpacity style={styles.failureButton}>
        <Text style={styles.failureText}>Failure</Text>
      </TouchableOpacity>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>True</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>False</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Maintenance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Remark</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.card}>
      {/* Header Section */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>PRYG-PT-101</Text>
          <Text style={styles.timestamp}>02-12-2023 19:34</Text>
        </View>
        <TouchableOpacity style={styles.acknowledgeButton}>
          <Text style={styles.acknowledgeText}>Acknowledge</Text>
        </TouchableOpacity>
      </View>

      {/* Status Section */}
      <View style={styles.statusSection}>
        <Text style={styles.statusText2}>Point Obstruction</Text>
        <Text style={styles.dots}>.........</Text>
      </View>
      <TouchableOpacity style={styles.failureButton}>
        <Text style={styles.failureText}>Failure</Text>
      </TouchableOpacity>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>True</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>False</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Maintenance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Remark</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>

      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  statusOverview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 3,
    marginTop: 7,
    borderWidth: 1,
    borderColor: '#C3C3C3'
  },

  scrollableSection: {
    flex: 1,
  },

  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
  predictiveText: {
    color: 'green',
  },
  failureText: {
    color: 'red',
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
    color: '#757474', // Text color
    fontWeight: '500',
    textShadowColor: '#0047BA', // Glowing color
    textShadowOffset: { width: 0, height: 0 }, // No offset for the shadow
    textShadowRadius: 0.5, // Radius to create the glow effect
  },
  tabButtonTextActive: {
    color: '#4A6FDB',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#F6F6F6',
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
    zIndex: 1000, // Ensure it appears on top
    elevation: 10, // For Android
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    marginHorizontal: 20,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#C3C3C3'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },
  timestamp: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  acknowledgeButton: {
    backgroundColor: '#FFD966',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFD474'

  },
  acknowledgeText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
  },
  statusSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  statusText2: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  dots: {
    fontSize: 16,
    color: '#A52A2A',
    marginLeft: 5,
  },
  failureButton: {
    alignSelf: 'flex-start',
    borderColor: '#A52A2A',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  failureText: {
    fontSize: 12,
    color: '#A52A2A',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    borderColor: '#9370DB',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  actionButtonText: {
    fontSize: 12,
    color: '#9370DB',
  },
 
});

export default details;
