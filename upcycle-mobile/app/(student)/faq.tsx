import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ScreenWrapper from '../../components/ui/ScreenWrapper';

export default function FAQ() {
  const faqs = [
    { q: 'How do I earn points?', a: 'Attend events, log waste, and complete challenges.' },
    { q: 'What is the marketplace?', a: 'A place to trade your items using impact points.' },
    { q: 'Who approves my waste logs?', a: 'Campus staff manually verify high-weight logs.' },
  ];
  return (
    <ScreenWrapper className="bg-gray-50">
      <View className="mb-8 mt-4">
        <Text className="text-3xl font-black text-gray-900 mb-2">FAQ</Text>
      </View>
      {faqs.map((faq, i) => (
        <View key={i} className="bg-white rounded-2xl p-5 mb-4 border border-gray-100">
          <Text className="font-bold text-gray-900 text-base mb-2">{faq.q}</Text>
          <Text className="text-gray-600 text-sm leading-relaxed">{faq.a}</Text>
        </View>
      ))}
    </ScreenWrapper>
  );
}