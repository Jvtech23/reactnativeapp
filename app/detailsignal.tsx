import React, { useRef, useEffect, useState } from 'react';
import { useRouter } from "expo-router";
import Topbardetail from '@/components/Topbardetail';
import AssetButtonsRow from '@/components/AssetButtonsRow';  

const assetData = [
    { id: 'PRYG-PT-101', position: 'Normal', current: '12 Amp', voltage: '12 Amp' },
    { id: 'PRYG-PT-102', position: 'Normal', current: '12 Amp', voltage: '12 Amp' }
  ];
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Animated,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';


const details = () => {

  const router = useRouter();
  const { top: safeTop } = useSafeAreaInsets();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [dropdownVisibility, setDropdownVisibility] = useState({});
  const [dropdownVisible, setDropdownVisible] = useState({
    zone: false,
    division: false,
    station: false,
  });

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);


  const toggleDropdown = (cardId) => {
    setDropdownVisibility((prev) => ({
      ...prev,
      [cardId]: !prev[cardId], // Toggle visibility for the specific card
    }));
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
        <Topbardetail/>
        <View style={styles.container}>
        <AssetButtonsRow />
        
        </View>

        <ScrollView style={styles.scrollableSection}>  
        <View style={styles.card}> 
  {/* Header Section */}
  <View style={styles.header}>
    <Image source={require('@/assets/images/forward.png')} style={styles.iconImage} />
    <Text style={styles.title}>Signal Lamp - 101</Text>

    {/* Buttons Section */}
    <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.circleButton1} onPress={() => router.replace("/settings")}>
        <Image source={require('@/assets/images/Alert.png')} style={styles.buttonImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.circleButton2} onPress={() => router.replace("/settings")}>
        <Image source={require('@/assets/images/lens.png')} style={styles.buttonImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.circleButton3}>
        <Image source={require('@/assets/images/setting1.png')} style={styles.buttonImage} />
      </TouchableOpacity>
    </View>
  </View>

  <View style={styles.line} />

  {/* Details Section */}
  <View style={styles.details}>
    <Text style={styles.detailText1}>Status: Normal</Text>
    <View style={styles.verticalLine} />
    <Text style={styles.detailText2}>Current: 2amp</Text>
    <View style={styles.verticalLine} />
    <Text style={styles.detailText3}>Voltage: 1v</Text>
  </View>
</View>
<View style={styles.card}> 
  {/* Header Section */}
  <View style={styles.header}>
    <Image source={require('@/assets/images/reverse1.png')} style={styles.iconImage} />
    <Text style={styles.title}>Signal Lamp - 102</Text>

    {/* Buttons Section */}
    <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.circleButton1} onPress={() => router.replace("/settings")}>
        <Image source={require('@/assets/images/Alert.png')} style={styles.buttonImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.circleButton2} onPress={() => router.replace("/settings")}>
        <Image source={require('@/assets/images/lens.png')} style={styles.buttonImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.circleButton3}>
        <Image source={require('@/assets/images/setting1.png')} style={styles.buttonImage} />
      </TouchableOpacity>
    </View>
  </View>

  <View style={styles.line} />

  {/* Details Section */}
  <View style={styles.details}>
    <Text style={styles.detailText1}>Status: Reverse</Text>
    <View style={styles.verticalLine} />
    <Text style={styles.detailText2}>Current: 2amp</Text>
    <View style={styles.verticalLine} />
    <Text style={styles.detailText3}>Voltage: 1v</Text>
  </View>
</View>
<View style={styles.card}> 
  {/* Header Section */}
  <View style={styles.header}>
    <Image source={require('@/assets/images/reverse1.png')} style={styles.iconImage} />
    <Text style={styles.title}>Signal Lamp - 103</Text>

    {/* Buttons Section */}
    <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.circleButton1} onPress={() => router.replace("/settings")}>
        <Image source={require('@/assets/images/Alert.png')} style={styles.buttonImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.circleButton2} onPress={() => router.replace("/settings")}>
        <Image source={require('@/assets/images/lens.png')} style={styles.buttonImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.circleButton3}>
        <Image source={require('@/assets/images/setting1.png')} style={styles.buttonImage} />
      </TouchableOpacity>
    </View>
  </View>

  <View style={styles.line} />

  {/* Details Section */}
  <View style={styles.details}>
    <Text style={styles.detailText1}>Status: Normal</Text>
    <View style={styles.verticalLine} />
    <Text style={styles.detailText2}>Current: 2amp</Text>
    <View style={styles.verticalLine} />
    <Text style={styles.detailText3}>Voltage: 1v</Text>
  </View>
</View>
<View style={styles.card}> 
  {/* Header Section */}
  <View style={styles.header}>
    <Image source={require('@/assets/images/reverse1.png')} style={styles.iconImage} />
    <Text style={styles.title}>Signal Lamp - 104</Text>

    {/* Buttons Section */}
    <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.circleButton1} onPress={() => router.replace("/settings")}>
        <Image source={require('@/assets/images/Alert.png')} style={styles.buttonImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.circleButton2} onPress={() => router.replace("/settings")}>
        <Image source={require('@/assets/images/lens.png')} style={styles.buttonImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.circleButton3}>
        <Image source={require('@/assets/images/setting1.png')} style={styles.buttonImage} />
      </TouchableOpacity>
    </View>
  </View>

  <View style={styles.line} />

  {/* Details Section */}
  <View style={styles.details}>
    <Text style={styles.detailText1}>Status: Normal</Text>
    <View style={styles.verticalLine} />
    <Text style={styles.detailText2}>Current: 2amp</Text>
    <View style={styles.verticalLine} />
    <Text style={styles.detailText3}>Voltage: 1v</Text>
  </View>
</View>
<View style={styles.card}> 
  {/* Header Section */}
  <View style={styles.header}>
    <Image source={require('@/assets/images/reverse1.png')} style={styles.iconImage} />
    <Text style={styles.title}>Signal Lamp - 104</Text>

    {/* Buttons Section */}
    <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.circleButton1} onPress={() => router.replace("/settings")}>
        <Image source={require('@/assets/images/Alert.png')} style={styles.buttonImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.circleButton2} onPress={() => router.replace("/settings")}>
        <Image source={require('@/assets/images/lens.png')} style={styles.buttonImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.circleButton3}>
        <Image source={require('@/assets/images/setting1.png')} style={styles.buttonImage} />
      </TouchableOpacity>
    </View>
  </View>

  <View style={styles.line} />

  {/* Details Section */}
  <View style={styles.details}>
    <Text style={styles.detailText1}>Status: Normal</Text>
    <View style={styles.verticalLine} />
    <Text style={styles.detailText2}>Current: 2amp</Text>
    <View style={styles.verticalLine} />
    <Text style={styles.detailText3}>Voltage: 1v</Text>
  </View>
</View>
<View style={styles.card}> 
  {/* Header Section */}
  <View style={styles.header}>
    <Image source={require('@/assets/images/reverse1.png')} style={styles.iconImage} />
    <Text style={styles.title}>Signal Lamp - 104</Text>

    {/* Buttons Section */}
    <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.circleButton1} onPress={() => router.replace("/settings")}>
        <Image source={require('@/assets/images/Alert.png')} style={styles.buttonImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.circleButton2} onPress={() => router.replace("/settings")}>
        <Image source={require('@/assets/images/lens.png')} style={styles.buttonImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.circleButton3}>
        <Image source={require('@/assets/images/setting1.png')} style={styles.buttonImage} />
      </TouchableOpacity>
    </View>
  </View>

  <View style={styles.line} />

  {/* Details Section */}
  <View style={styles.details}>
    <Text style={styles.detailText1}>Status: Normal</Text>
    <View style={styles.verticalLine} />
    <Text style={styles.detailText2}>Current: 2amp</Text>
    <View style={styles.verticalLine} />
    <Text style={styles.detailText3}>Voltage: 1v</Text>
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
  scrollableSection: {
    flex: 1,
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 5,
  },

  buttonsContainer: {
    position: 'absolute', // Position it absolutely within the card
    top: -25, // Move slightly upward
    left: 210, // Move slightly to the left
    flexDirection: 'row',
    gap: 5,
  },
  circleButton1: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#D0D0D0',
  },
  circleButton2: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#D0D0D0',
  },
  circleButton3: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2, 
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#D0D0D0',
  },
  buttonImage: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  tabButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#D0D0D0',
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
    fontSize: 10,
    color: '#333',
    fontWeight: '500',
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
    marginTop: 40,
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
    marginTop: 20,
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
    textShadowColor: '#0047BA', // Glowing color
    textShadowOffset: { width: 0.5, height: 0.5 }, // No offset for the shadow
    textShadowRadius: 0.2, // Radius to create the glow effect
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
    color: 'black',
    
    textShadowOffset: { width: 0.2, height: 0.2 }, // No offset for the shadow
    textShadowRadius: 0.5, // Radius to create the glow effect
  },
  detailText2: {
    fontSize: 12,
    color: 'black',
   
   
    textShadowOffset: { width: 0.2, height: 0.2 }, // No offset for the shadow
    textShadowRadius: 0.5, // Radius to create the glow effect
  },
  detailText3: {
    fontSize: 12 ,
    color: 'black',
   
    
    textShadowOffset: { width: 0.2, height: 0.2 }, // No offset for the shadow
    textShadowRadius: 0.5, // Radius to create the glow effect
  },
  verticalLine: {
    width: 1,
    backgroundColor: '#ccc',
    height: '100%',
    marginHorizontal: 10,
  },
});

export default details;
