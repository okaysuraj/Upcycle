import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function WelcomeCarousel() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const slides = [
    {
      title: 'Greenifying Campuses',
      description: 'Transform educational spaces into thriving sustainable ecosystems with intelligent resource tracking.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANTKlxYIsIt7OLsh8D5bJoRiG5FYvQ01hEbg3kzWYRnp2vn7QwYqqqqJTdgGwPH6qpsCYMQQytRcypJYYdXmE0j1UQhQiYumxzO6xk68KxwTSXuqvwf2Hout0wLZHlktdah7v_XDDT-NDcxU0_GOUoh8JLM9CTPhviEBysMbetf2m3hqIll9z9R2y8I3fjTcbpmSobPNQiK8nMftnadxSnp8YcPNT-8K_H6pe3zcejtfurYaTiTes5bgp58dPvYvVzBjSBsdSahCA'
    },
    {
      title: 'Waste Management',
      description: 'Optimize collection cycles and reduce landfill contributions through data-driven logistics and sorting.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlAmqeYb_mMf0lx2NPfDiz7bVYDaXwl50LJlSzSr91Q-8cynFvvRrfQfcIsp5xCu0BHlPbPuXNBO1_7EDtyLQq7ieyFVmwQdOz16Pv9cq3bF-8WUx9JRyA34xAzEFFVepZj_0W31ANd88YrvNrzbf0CGq368u_8kJAnpkdIeRgy3cwj-xclxYXsJiC2ujiFqxB_ppLuzjoyG8HYiIhKnX94DltC7_45ZIl5_wiLobz0cq6_pDqqvbW5_dvvHZfTy0EWvD8be1EADE'
    },
    {
      title: 'Sustainable Developers',
      description: 'Collaborate with a global network of eco-conscious developers building the next generation of green tech.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeDr6pX2aigHuEbqoFlA9CytygXaATXxM_fhlZ-ZsC0tI-3TYXG_-DTACmTt9HhQlAbH74FjqLJfRDEG30xwfXiX0S_4j_irkuJHxHD6tXmQYEyLdjTBejIjTKcb6OSKe0Myvvl-GWId1_SqnFMSEz8KWeRaLIZmerBH1G6r1jQxapOSNzpasEg6cw7-sLBmPzk-n3k-mPeEYf9BpGdxXMRN8EixGqBrE-V1gfPz5kbmPrDe8NLMjHsh-yq3kKzmNPi5Sqfrg6f7U'
    }
  ];

  const handleScroll = (event: any) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = Math.round(event.nativeEvent.contentOffset.x / slideSize);
    setCurrentSlide(index);
  };

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      scrollViewRef.current?.scrollTo({ x: (currentSlide + 1) * width, animated: true });
    } else {
      router.push('/(auth)/choose-role');
    }
  };

  const handleSkip = () => {
    scrollViewRef.current?.scrollTo({ x: (slides.length - 1) * width, animated: true });
  };

  return (
    <SafeAreaView className="flex-1 bg-[#f4faff] relative">
      {/* Background Layer */}
      <View className="absolute inset-0 z-0 opacity-40">
        <View className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#2eb872] rounded-full opacity-50 blur-[120px]" />
        <View className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#7ead81] rounded-full opacity-50 blur-[100px]" />
      </View>

      {/* Header */}
      <View className="flex-row justify-between items-center px-5 h-16 w-full z-50">
        <View className="flex-row items-center h-8">
          <Image 
            source={{ uri: 'https://lh3.googleusercontent.com/aida/AP1WRLuaeWGEBHEzwqBPQAk8QsJgcjKH1dH53_ec81VNIPmrmp8NEDSB5RWseIPhSajfG2n3WOy64AWqjK6D7sWGEN6SewlhMQg_zIDtiR7YpHOMy_VQvNNFFD_rTqXRNqLRoFIFQtTWr7xG1rfQ-Rpkp8VzWiE9lZc7HJhdjkvcCFG2J6_tnSRu8Bue54Ws1t8FqvYXHfw2j7qjNUrGElb2ZNqWynH73bZCfB8Oblg_GX_GbE-QkeIgbSzy3HE' }}
            className="h-full w-8"
            resizeMode="contain"
          />
          <Text className="text-xl font-bold text-[#006d3e] ml-2">Upcycle</Text>
        </View>
        <TouchableOpacity onPress={handleSkip} className={`px-4 py-2 ${currentSlide === slides.length - 1 ? 'opacity-0' : 'opacity-100'}`}>
          <Text className="text-[#3d4a40] font-medium">Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Carousel */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        className="flex-1 z-10"
      >
        {slides.map((slide, index) => (
          <View key={index} style={{ width }} className="flex-1 items-center justify-center px-5">
            <View className="w-full max-w-md bg-white/60 rounded-[24px] p-8 border border-[#2eb872]/20 shadow-sm items-center">
              <View className="aspect-square w-full mb-8 rounded-xl overflow-hidden">
                <Image 
                  source={{ uri: slide.image }}
                  className="w-full h-full"
                  resizeMode="contain"
                />
              </View>
              <Text className="text-2xl font-bold text-[#006d3e] mb-2 text-center">{slide.title}</Text>
              <Text className="text-base text-[#3d4a40] text-center leading-relaxed">{slide.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Controls */}
      <View className="h-32 w-full px-5 flex-col items-center justify-center gap-6 z-20">
        {/* Indicators */}
        <View className="flex-row gap-1">
          {slides.map((_, index) => (
            <View 
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-8 bg-[#006d3e]' : 'w-2 bg-[#bccabd]'
              }`}
            />
          ))}
        </View>
        
        {/* Action Button */}
        <TouchableOpacity 
          onPress={handleNext}
          className="w-full max-w-md h-14 bg-[#006d3e] rounded-full flex-row items-center justify-center gap-2 shadow-sm active:scale-95"
        >
          <Text className="text-white font-bold text-lg">{currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}</Text>
          <MaterialIcons name={currentSlide === slides.length - 1 ? 'check' : 'arrow-forward'} size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
