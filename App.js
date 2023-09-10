
import React from 'react';
import {
  View,
  TextInput, StyleSheet
} from 'react-native';
import  { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [borderColor, setBorderColor] = useState('gray'); // Initialize with a default color

  const handleTextChange = (inputText) => {
    setText(inputText);

    // Calculate the percentage of border color change
    const percentage = (inputText.length / 12) * 100; // Assuming a max password length of 12 characters

    // Ensure the percentage is within the range [0, 100]
    const clampedPercentage = Math.min(Math.max(percentage, 0), 100);

    // Convert the percentage to a hexadecimal color value (from red to green)
    const color = `#${Math.floor((100 - clampedPercentage) * 255 / 100).toString(16)}FF00`;

    setBorderColor(color);
  };

  const handleTextComplete = () => {
    setBorderColor('green'); // Text input is complete, set to green
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.textInput, { borderColor }]}
        placeholder="Type your password"
        value={text}
        onChangeText={handleTextChange}
        onBlur={handleTextComplete}
        secureTextEntry // To hide the password characters
      />
    </View>
  );
};
 

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  textInput: {
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 80,
    padding: 10,
    fontSize: 16,
    borderBottomColor: 'red'
  },
});

export default App;
