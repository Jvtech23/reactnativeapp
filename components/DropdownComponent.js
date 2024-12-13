// DropdownComponent.js
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

const DropdownComponent = ({ placeholder, data }) => {
  const [value, setValue] = useState(null);

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      
      maxHeight={180}
      labelField="label"
      valueField="value"
      placeholder={placeholder}
      
      value={value}
      onChange={item => {
        setValue(item.value);
        // You can handle additional actions here if needed
      }}
      
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    width: 90,
    margin: 8,
    height: 30,
    borderColor: '#C3C3C3',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 12,
    color: '#757474',
    fontWeight: '500',
    textShadowColor: '#0047BA', 
    textShadowOffset: { width: 0, height: 0 }, 
    textShadowRadius: 0.5, 
  
  },
  selectedTextStyle: {
    fontSize: 12,
    color: '#000',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 30,
    fontSize: 12,
  },
});
