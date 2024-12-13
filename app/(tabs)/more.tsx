import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure you install @expo/vector-icons

const More = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardPress = (cardName) => {
    setExpandedCard(expandedCard === cardName ? null : cardName);
  };

  return (
    <ScrollView style={styles.scrollableSection}>
    <View style={styles.container}>
      {/* Profile */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => handleCardPress('Profile')}
        activeOpacity={0.8}
      >
        <View style={styles.cardContent}>
          <Ionicons name="person-circle-outline" size={24} color="#0047B9" />
          <Text style={styles.cardText}>Profile</Text>
        </View>
        <Ionicons name="chevron-down-outline" size={20} color="#0047B9" />
      </TouchableOpacity>
      {expandedCard === 'Profile' && (
        <View style={styles.expandedCard}>
          <Text style={styles.detailTitle}>User Details</Text>
          <Text style={styles.detailText}>User ID: Abhay</Text>
          <Text style={styles.detailText}>Password: xxxxxx</Text>
        </View>
      )}

      {/* About Device */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => handleCardPress('AboutDevice')}
        activeOpacity={0.8}
      >
        <View style={styles.cardContent}>
          <Ionicons name="hardware-chip-outline" size={24} color="#0047B9" />
          <Text style={styles.cardText}>About Device</Text>
        </View>
        <Ionicons name="chevron-down-outline" size={20} color="#0047B9" />
      </TouchableOpacity>
      {expandedCard === 'AboutDevice' && (
        <View style={styles.expandedCard}>
          <Text style={styles.detailTitle}>About Device</Text>
          
          <Text style={styles.detailText}>
          • Purpose: Real-time monitoring and predictive maintenance of railway assets.{"\n"}
          • Features: Real-time diagnostics, alerts, predictive analytics, and health reporting.{"\n"}
          • Benefits: Minimizes downtime, reduces costs, and enhances safety and efficiency.{"\n"}
          • Applications: Tracks assets like point machines, track circuits, axle counters, and signal lamps.{"\n"}
          • Technology: Utilizes IoT, AI, and big data for integration and real-time insights.
</Text>

          <Text style={styles.detailText}>Version: 1.0</Text>
        </View>
      )}

      {/* About Us */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => handleCardPress('AboutUs')}
        activeOpacity={0.8}
      >
        <View style={styles.cardContent}>
          <Ionicons name="information-circle-outline" size={24} color="#0047B9" />
          <Text style={styles.cardText}>About Us</Text>
        </View>
        <Ionicons name="chevron-down-outline" size={20} color="#0047B9" />
      </TouchableOpacity>
      {expandedCard === 'AboutUs' && (
        <View style={styles.expandedCard}>
          <Text style={styles.detailTitle}>About Us</Text>
          <Text style={styles.detailText}>We provide Railway Solutions</Text>
        </View>
      )}

      {/* Help & Support */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => handleCardPress('HelpSupport')}
        activeOpacity={0.8}
      >
        <View style={styles.cardContent}>
          <Ionicons name="help-circle-outline" size={24} color="#0047B9" />
          <Text style={styles.cardText}>Help & Support</Text>
        </View>
        <Ionicons name="chevron-down-outline" size={20} color="#0047B9" />
      </TouchableOpacity>
      {expandedCard === 'HelpSupport' && (
        <View style={styles.expandedCard}>
          <Text style={styles.detailTitle}>Help & Support</Text>
          <Text style={styles.detailText}>Contact us: apprdpms@gmail.com</Text>
        </View>
      )}
    </View>
    </ScrollView>
  );
};

export default More;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF0F9',
    padding: 16,
  },
  scrollableSection: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4, // Android shadow
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4A4A4A',
    marginLeft: 12,
  },
  expandedCard: {
    backgroundColor: '#FBFBFB',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4C4C4C',
    marginBottom: 8,
   
  },
  detailText: {
    fontSize: 14,
    color: '#4A4A4A',
    marginBottom: 4,
  },
});
