import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';

export default function LogWasteScreen() {
  const router = useRouter();
  const { binId } = useLocalSearchParams();
  
  const [category, setCategory] = useState('PLASTIC');
  const [quantity, setQuantity] = useState('');
  
  const handleLogWaste = () => {
    if (!quantity || isNaN(Number(quantity))) {
      Alert.alert('Error', 'Please enter a valid quantity in kg');
      return;
    }
    
    // In a real app, this would make an API call to POST /api/waste/logs
    console.log(`Logged ${quantity}kg of ${category} for Bin ${binId}`);
    
    Alert.alert('Success', 'Waste logged successfully!', [
      { text: 'OK', onPress: () => router.push('/(staff)/route') }
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log Waste Collection</Text>
      <Text style={styles.subtitle}>Bin ID: {binId || 'Manual Entry'}</Text>
      
      <Text style={styles.label}>Waste Category</Text>
      <View style={styles.buttonGroup}>
        {['PLASTIC', 'ORGANIC', 'PAPER', 'GENERAL'].map((cat) => (
          <TouchableOpacity 
            key={cat} 
            style={[styles.catButton, category === cat && styles.catButtonActive]}
            onPress={() => setCategory(cat)}
          >
            <Text style={[styles.catButtonText, category === cat && styles.catButtonTextActive]}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Quantity (kg)</Text>
      <TextInput
        style={styles.input}
        placeholder="0.0"
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleLogWaste}>
        <Text style={styles.submitButtonText}>Submit Log</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#065f46',
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 32,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    padding: 16,
    borderRadius: 8,
    fontSize: 18,
  },
  buttonGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  catButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    backgroundColor: '#f9fafb',
  },
  catButtonActive: {
    backgroundColor: '#10b981',
    borderColor: '#10b981',
  },
  catButtonText: {
    color: '#4b5563',
    fontWeight: '500',
  },
  catButtonTextActive: {
    color: '#fff',
  },
  submitButton: {
    backgroundColor: '#10b981',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 48,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
