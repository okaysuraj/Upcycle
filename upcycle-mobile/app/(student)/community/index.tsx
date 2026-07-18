import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';

export default function CommunityFeed() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { authFetch } = useAuth();

  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [newPost, setNewPost] = useState('');

  const fetchPosts = async () => {
    try {
      const res = await authFetch('/community/posts');
      if (res.ok) {
        const data = await res.json();
        setPosts(data);
      }
    } catch (err) {
      console.error("Error fetching posts:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [authFetch]);

  const handleCreatePost = async () => {
    if (!newPost.trim()) return;
    try {
      const res = await authFetch('/community/posts', {
        method: 'POST',
        body: JSON.stringify({ content: newPost }),
      });
      if (res.ok) {
        setNewPost('');
        fetchPosts();
      }
    } catch (err) {
      console.error("Error creating post:", err);
    }
  };

  const handleLike = async (postId: string) => {
    try {
      const res = await authFetch(`/community/posts/${postId}/like`, { method: 'POST' });
      if (res.ok) {
        fetchPosts();
      }
    } catch (err) {
      console.error("Error liking post:", err);
    }
  };

  return (
    <View className="flex-1 bg-[#f4faff]">
      {/* Top App Bar */}
      <View style={{ paddingTop: insets.top }} className="bg-white/70 border-b border-gray-200 px-4 h-16 flex-row justify-between items-center z-50">
        <View className="flex-row items-center gap-3">
          <View className="w-8 h-8 rounded-full bg-[#006d3e]/10 items-center justify-center border border-[#00522d]">
            <Ionicons name="person" size={16} color="#00522d" />
          </View>
          <Text className="text-xl font-bold text-[#00522d]">Upcycle Community</Text>
        </View>
        <TouchableOpacity className="p-2 relative">
          <Ionicons name="notifications-outline" size={24} color="#3f4941" />
          <View className="absolute top-2 right-2 w-2 h-2 bg-[#ba1a1a] rounded-full" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-4 py-6 pb-24">
          
          {/* Create Post */}
          <View className="bg-white/70 border border-gray-200 rounded-[24px] p-4 mb-6 shadow-sm flex-row items-center gap-2">
            <TextInput 
              value={newPost}
              onChangeText={setNewPost}
              placeholder="Share an update..."
              className="flex-1 bg-gray-50 p-3 rounded-xl"
            />
            <TouchableOpacity onPress={handleCreatePost} className="bg-[#00522d] p-3 rounded-xl">
              <Ionicons name="send" size={16} color="white" />
            </TouchableOpacity>
          </View>

          {/* Trending Now */}
          <View className="bg-white/70 border border-gray-200 rounded-[24px] p-6 mb-6 shadow-sm">
            <View className="flex-row items-center justify-between mb-4">
              <View className="flex-row items-center gap-1">
                <Ionicons name="trending-up" size={20} color="#00522d" />
                <Text className="font-bold text-[#00522d] text-lg">Trending Now</Text>
              </View>
              <Text className="text-xs font-bold text-[#00522d]">See all</Text>
            </View>
            
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-6 px-6">
              <View className="bg-white p-3 rounded-xl border border-[#bec9be] mr-3 shadow-sm min-w-[140px]">
                <Text className="text-xs font-bold text-[#24502c]">#NoPlasticWeek</Text>
                <Text className="text-[10px] text-gray-500 mt-1">2.4k joined</Text>
              </View>
              <View className="bg-white p-3 rounded-xl border border-[#bec9be] mr-3 shadow-sm min-w-[140px]">
                <Text className="text-xs font-bold text-[#24502c]">#SolarCampus</Text>
                <Text className="text-[10px] text-gray-500 mt-1">12 proposals</Text>
              </View>
              <View className="bg-white p-3 rounded-xl border border-[#bec9be] shadow-sm min-w-[140px]">
                <Text className="text-xs font-bold text-[#24502c]">#UpcycleFest</Text>
                <Text className="text-[10px] text-gray-500 mt-1">Happening Sat</Text>
              </View>
            </ScrollView>
          </View>

          {/* Feed Posts */}
          <View className="gap-6">
            {loading ? (
              <ActivityIndicator size="large" color="#00522d" />
            ) : posts.length === 0 ? (
              <Text className="text-center text-gray-500">No posts yet.</Text>
            ) : (
              posts.map((post) => (
                <View key={post.id} className="bg-white rounded-[24px] border border-gray-200 overflow-hidden shadow-sm">
                  <View className="p-4 flex-row items-center justify-between">
                    <View className="flex-row items-center gap-3">
                      <View className="w-10 h-10 rounded-full bg-[#dff1fb] items-center justify-center">
                        <Ionicons name="person" size={20} color="#00522d" />
                      </View>
                      <View>
                        <Text className="font-bold text-[#0d1e25] text-sm">{post.author?.name || 'Anonymous'}</Text>
                        <Text className="text-[10px] text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</Text>
                      </View>
                    </View>
                    <Ionicons name="ellipsis-horizontal" size={20} color="#3f4941" />
                  </View>
                  
                  <View className="px-4 pb-3">
                    <Text className="text-[#0d1e25] text-sm leading-relaxed">{post.content}</Text>
                  </View>
                  
                  {post.imageUrl && (
                    <View className="w-full h-48 bg-[#d9e6da] items-center justify-center border-t border-b border-gray-100">
                      {/* Image would render here */}
                      <Ionicons name="image" size={40} color="#a2d2a4" />
                    </View>
                  )}
                  
                  <View className="p-4 bg-[#f4faff] flex-row items-center justify-between">
                    <View className="flex-row gap-4">
                      <TouchableOpacity onPress={() => handleLike(post.id)} className="flex-row items-center gap-1">
                        <Ionicons name="heart-outline" size={20} color="#3f4941" />
                        <Text className="text-xs text-[#3f4941]">{post.likes || 0}</Text>
                      </TouchableOpacity>
                      <View className="flex-row items-center gap-1">
                        <Ionicons name="chatbubble-outline" size={20} color="#3f4941" />
                        <Text className="text-xs text-[#3f4941]">{post._count?.comments || 0}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              ))
            )}
          </View>
        </View>
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity className="absolute bottom-24 right-4 w-14 h-14 bg-[#00522d] rounded-full shadow-lg items-center justify-center">
         <Ionicons name="add" size={28} color="white" />
      </TouchableOpacity>

      {/* Bottom Navigation Placeholder */}
      <View className="absolute bottom-0 w-full flex-row justify-around items-center px-4 py-4 pb-8 bg-[#dff1fb] shadow-lg rounded-t-3xl border-t border-white/50">
        <TouchableOpacity className="items-center" onPress={() => router.push('/(student)')}>
          <Ionicons name="home-outline" size={24} color="#556158" />
          <Text className="text-[10px] font-bold text-[#556158] mt-1">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Ionicons name="people" size={24} color="#00522d" />
          <Text className="text-[10px] font-bold text-[#00522d] mt-1">Community</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Ionicons name="map-outline" size={24} color="#556158" />
          <Text className="text-[10px] font-bold text-[#556158] mt-1">Map</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Ionicons name="person-outline" size={24} color="#556158" />
          <Text className="text-[10px] font-bold text-[#556158] mt-1">Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
