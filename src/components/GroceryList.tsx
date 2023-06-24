// components/GroceryList.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const GroceryList = (): JSX.Element => {
  const [containerName, setContainerName] = useState<string>('');
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState<string>('');

  const handleAddContainer = (): void => {
    // Logic to create a new container with the entered name
    // You can update the state or perform any other necessary actions
  };

  const handleAddItem = (): void => {
    // Logic to add a new item to the list
    // You can update the state or perform any other necessary actions
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleAddContainer}>
        <Text style={styles.buttonText}>Create Container</Text>
      </TouchableOpacity>

      <View style={styles.containerList}>
        {/* Display the list of containers and items */}
        {/* You can map through the containers and items state and render them */}
      </View>

      <TextInput
        style={styles.input}
        value={newItem}
        onChangeText={setNewItem}
        placeholder="Enter item"
      />

      <TouchableOpacity style={styles.button} onPress={handleAddItem}>
        <Text style={styles.buttonText}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#7851a9',
    fontSize: 16,
    fontWeight: 'bold',
  },
  containerList: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
  },
});

export default GroceryList;
