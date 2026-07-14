import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../../context/AuthContext';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

export default function AddWasteEntry() {
  const router = useRouter();
  const { authFetch } = useAuth();
  const [weight, setWeight] = useState('');
  const [type, setType] = useState('plastic');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await authFetch('/waste/logs', {
        method: 'POST',
        body: JSON.stringify({
          type,
          weight: parseFloat(weight),
          location: 'Mobile Scanner',
          status: 'logged'
        })
      });
      if (res.ok) {
        alert('Waste entry logged successfully!');
        router.back();
      }
    } catch (err) {
      alert('Failed to log waste');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenWrapper>
      <View className="mb-8">
        <Text className="text-3xl font-black text-gray-900 mb-2">Log Waste</Text>
        <Text className="text-gray-500 text-base">Enter the details of the waste collection manually.</Text>
      </View>

      <View className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
        <View className="mb-6">
          <Text className="text-gray-700 font-semibold mb-3 ml-1">Waste Type</Text>
          <View className="flex-row gap-2">
            {['plastic', 'paper', 'electronics'].map((t) => (
              <View 
                key={t}
                className={`flex-1 py-3 items-center rounded-xl border ${type === t ? 'bg-emerald-50 border-emerald-500' : 'bg-white border-gray-200'}`}
                onTouchEnd={() => setType(t)}
              >
                <Text className={`font-medium capitalize ${type === t ? 'text-emerald-700' : 'text-gray-600'}`}>{t}</Text>
              </View>
            ))}
          </View>
        </View>

        <Input 
          label="Weight (kg)" 
          placeholder="0.00"
          value={weight}
          onChangeText={setWeight}
          keyboardType="decimal-pad"
          className="mb-8"
        />

        <Button 
          title="Submit Log" 
          onPress={handleSubmit} 
          loading={loading}
          disabled={!weight}
        />
      </View>
    </ScreenWrapper>
  );
}
