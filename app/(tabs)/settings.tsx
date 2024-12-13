import React, { useRef, useEffect, useState } from 'react';
import { useRouter } from "expo-router";
import { LineChart } from 'react-native-chart-kit';
import DropdownComponent3 from '@/components/DropdownComponent3';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

const assetData = [
  { sn: '1', id: 'PRYG-PT', position: 'Normal', current: '12 Amp', voltage: '12 Amp', status: 'Live', type: 'Point Machine', num: '1' },
  { sn: '2', id: 'PRYG-PT1', position: 'Normal', current: '12 Amp', voltage: '12 Amp', status: 'Failure', type: 'Axle Counter', num: '2' },
  { sn: '3', id: 'PRYG-PT2', position: 'Normal', current: '12 Amp', voltage: '12 Amp', status: 'Live', type: 'Track Circuit', num: '3' },
  { sn: '4', id: 'PRYG-PT3', position: 'Normal', current: '12 Amp', voltage: '12 Amp', status: 'Failure', type: 'Signal Lamp', num: '1' },
];

const assetStatus = [
  { label: 'Live', value: 'Live' },
  { label: 'Failure', value: 'Failure' },
];

const assetType = [
  { label: 'Point Machine', value: 'Point Machine' },
  { label: 'Axle Counter', value: 'Axle Counter' },
  { label: 'Track Circuit', value: 'Track Circuit' },
  { label: 'Signal Lamp', value: 'Signal Lamp' },
];

const assetNum = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
];

const assetViewOptions = [
  { label: 'Table', value: 'table' },
  { label: 'Graph', value: 'graph' },
];

const Settings = () => {
  const router = useRouter();
  const { top: safeTop } = useSafeAreaInsets();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const [selectedView, setSelectedView] = useState('table');
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedNum, setSelectedNum] = useState(null);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  const filteredData = assetData.filter((asset) => {
    return (
      (!selectedStatus || asset.status === selectedStatus) &&
      (!selectedType || asset.type === selectedType) &&
      (!selectedNum || asset.num === selectedNum)
    );
  });

  const handleViewChange = (value) => setSelectedView(value);

  return (
    <TouchableWithoutFeedback>
      <LinearGradient
        colors={['#F5F5FB', '#F5F5FB']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.gradientContainer, { paddingTop: safeTop }]}
      >
        <View style={styles.container}>
          <Animated.View style={[styles.selectorContainer, { opacity: fadeAnim }]}>
            <DropdownComponent3
              placeholder="Asset Status"
              data={assetStatus}
              onChange={(value) => setSelectedStatus(value)}
            />
            <DropdownComponent3
              placeholder="Asset Type"
              data={assetType}
              onChange={(value) => setSelectedType(value)}
            />
            <DropdownComponent3
              placeholder="Asset Num"
              data={assetNum}
              onChange={(value) => setSelectedNum(value)}
            />
            <DropdownComponent3
              placeholder="View"
              data={assetViewOptions}
              onChange={handleViewChange}
            />
          </Animated.View>
        </View>

        {selectedView === 'table' && (
          <ScrollView style={styles.tableContainer}>
            <View style={styles.tableHeaderRow}>
              <Text style={styles.tableHeaderText}>S.No</Text>
              <Text style={styles.tableHeaderText}>Asset ID</Text>
              <Text style={styles.tableHeaderText}>Position</Text>
              <Text style={styles.tableHeaderText}>Current</Text>
              <Text style={styles.tableHeaderText}>Voltage</Text>
            </View>
            {filteredData.map((asset) => (
              <View key={asset.id} style={styles.tableRow}>
                <Text style={styles.tableCell}>{asset.sn}</Text>
                <Text style={styles.tableCell}>{asset.id}</Text>
                <Text style={styles.tableCell}>{asset.position}</Text>
                <Text style={styles.tableCell}>{asset.current}</Text>
                <Text style={styles.tableCell}>{asset.voltage}</Text>
              </View>
            ))}
          </ScrollView>
        )}

        {selectedView === 'graph' && (
          <View style={styles.graphCard}>
            <Text style={styles.sectionTitle}>Performance Over Time</Text>
            <LineChart
              data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                datasets: [{ data: [20, 45, 28, 80, 99], strokeWidth: 2 }],
              }}
              width={Dimensions.get('window').width - 40}
              height={200}
              chartConfig={chartConfig}
              style={styles.chartStyle}
            />
          </View>
        )}
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

const chartConfig = {
  backgroundGradientFrom: '#BFCAF5',
  backgroundGradientTo: '#BFCAF5',
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: () => 'black',
  strokeWidth: 2,
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
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
  tableContainer: {
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  tableHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFE8B4',
    padding: 8,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#D0D0D0',
  },
  tableHeaderText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D0D0D0',
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    color: '#333',
    fontSize: 11,
    borderBottomWidth: 1,
    borderBottomColor: '#D0D0D0',
  },
  graphCard: {
    backgroundColor: '#BFCAF5',
    borderRadius: 10,
    padding: 6,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  chartStyle: {
    borderRadius: 10,
  },
});

export default Settings;
