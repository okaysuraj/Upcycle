import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import ScreenWrapper from '../../../components/ui/ScreenWrapper';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAuth } from '../../../context/AuthContext';

export default function CommunityFeedHome() {
  const router = useRouter();
  const { authFetch, user } = useAuth();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPostContent, setNewPostContent] = useState('');

  useEffect(() => {
    fetchPosts();
  }, [authFetch]);

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

  const handleCreatePost = async () => {
    if (!newPostContent.trim()) return;
    try {
      const res = await authFetch('/community/posts', {
        method: 'POST',
        body: JSON.stringify({ content: newPostContent }),
      });
      if (res.ok) {
        setNewPostContent('');
        fetchPosts(); // Reload posts
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
    <ScreenWrapper withPadding={false} scroll={true} className="bg-[#f8f9fa]">
      {/* Top App Bar */}
      <View className="px-5 pt-12 pb-4 flex-row justify-between items-center bg-[#f8f9fa] border-b border-[#c1c8c2]">
        <View className="flex-row items-center gap-3">
          <MaterialIcons name="eco" size={28} color="#012d1d" />
          <Text className="text-2xl font-bold text-[#012d1d]">Upcycle</Text>
        </View>
        <View className="flex-row items-center gap-4">
          <TouchableOpacity>
            <MaterialIcons name="search" size={24} color="#414844" />
          </TouchableOpacity>
          <TouchableOpacity className="relative">
            <MaterialIcons name="notifications-none" size={24} color="#414844" />
            <View className="absolute -top-1 -right-1 w-3 h-3 bg-[#ba1a1a] rounded-full border border-[#f8f9fa]"></View>
          </TouchableOpacity>
        </View>
      </View>

      <View className="py-2 pb-24">
        
        {/* Create Post Section */}
        <View className="bg-white p-5 mb-2 shadow-sm">
          <View className="flex-row gap-3">
            <View className="w-10 h-10 rounded-full bg-[#cce6d0] items-center justify-center">
              <Text className="text-[#012d1d] font-bold">{user?.name?.substring(0,2).toUpperCase() || 'ME'}</Text>
            </View>
            <View className="flex-1">
              <TextInput 
                className="w-full bg-[#f3f4f5] rounded-3xl px-4 py-2 font-bold text-[#191c1d]"
                placeholder="Share your latest green win..."
                placeholderTextColor="#717973"
                value={newPostContent}
                onChangeText={setNewPostContent}
              />
              <View className="flex-row items-center justify-between mt-4">
                <View className="flex-row gap-4">
                  <TouchableOpacity className="flex-row items-center gap-1">
                    <MaterialIcons name="image" size={20} color="#012d1d" />
                    <Text className="text-xs font-bold text-[#414844]">Photo</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="flex-row items-center gap-1">
                    <MaterialIcons name="local-activity" size={20} color="#012d1d" />
                    <Text className="text-xs font-bold text-[#414844]">Impact</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity 
                  className={`bg-[#012d1d] px-4 py-1.5 rounded-full ${!newPostContent.trim() ? 'opacity-50' : ''}`}
                  onPress={handleCreatePost}
                  disabled={!newPostContent.trim()}
                >
                  <Text className="text-white text-xs font-bold">Post</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {loading ? (
          <View className="p-8 items-center justify-center">
            <Text className="text-[#414844] font-bold">Loading feed...</Text>
          </View>
        ) : (
          posts.map((post: any) => (
            <View key={post.id} className="bg-white mb-2 shadow-sm pb-2">
              <View className="p-5 flex-row justify-between items-start">
                <View className="flex-row gap-3 items-center">
                  <View className="w-10 h-10 rounded-full bg-[#e7f6ff] items-center justify-center">
                    <Text className="text-[#0d1e25] font-bold">{post.author?.name?.substring(0,2).toUpperCase() || 'AN'}</Text>
                  </View>
                  <View>
                    <View className="flex-row items-center gap-2">
                      <Text className="font-bold text-[#191c1d]">{post.author?.name || 'Anonymous'}</Text>
                      {post.author?.role === 'STAFF' && (
                        <MaterialIcons name="verified" size={14} color="#00522d" />
                      )}
                    </View>
                    <Text className="text-xs text-[#717973]">{new Date(post.createdAt).toLocaleDateString()}</Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <MaterialIcons name="more-horiz" size={20} color="#717973" />
                </TouchableOpacity>
              </View>

              <View className="px-5 mb-3">
                <Text className="text-[#191c1d] leading-6">{post.content}</Text>
              </View>

              {post.imageUrl && (
                <View className="w-full h-64 bg-[#f3f4f5] mb-3 items-center justify-center">
                  <Image source={{ uri: post.imageUrl }} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
                </View>
              )}

              <View className="px-5 py-3 flex-row items-center justify-between border-t border-[#f3f4f5]">
                <View className="flex-row items-center gap-6">
                  <TouchableOpacity onPress={() => handleLike(post.id)} className="flex-row items-center gap-1">
                    <MaterialIcons name="eco" size={20} color="#012d1d" />
                    <Text className="text-sm font-bold text-[#414844]">{post.likes || 0}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="flex-row items-center gap-1">
                    <MaterialIcons name="chat-bubble-outline" size={20} color="#414844" />
                    <Text className="text-sm font-bold text-[#414844]">{post._count?.comments || 0}</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity>
                  <MaterialIcons name="share" size={20} color="#414844" />
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
        
        {posts.length === 0 && !loading && (
          <View className="p-8 items-center justify-center">
            <Text className="text-[#414844] font-bold italic">No posts in your community yet.</Text>
          </View>
        )}

      </View>
    </ScreenWrapper>
  );
}
