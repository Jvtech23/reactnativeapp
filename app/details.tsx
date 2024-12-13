import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://earthingsystem.org/myapps/api/machine-data') 
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Machine ID: {item.machine_id}</Text>
            <Text>Type: {item.type}</Text>
            <Text>Operation: {item.operation}</Text>
            <Text>Current: {item.current}</Text>
            <Text>Forward Voltage: {item.forward_voltage}</Text>
            <Text>Reverse Voltage: {item.reverse_voltage}</Text>
            <Text>Normal Operation: {item.normal_operation}</Text>
            <Text>Reverse Operation: {item.reverse_operation}</Text>
            <Text>Addtime: {item.addtime}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { marginBottom: 15, padding: 10, backgroundColor: '#f9f9f9', borderRadius: 5 },
});

export default App;
