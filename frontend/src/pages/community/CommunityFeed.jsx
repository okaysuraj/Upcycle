import React, { useState, useEffect } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { useAuth } from '../../context/AuthContext';

export default function CommunityFeed() {
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

  const handleLike = async (postId) => {
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
    <div className="grid grid-cols-12 gap-gutter">
      {/* Left Column: User Profile & Trends */}
      <aside className="col-span-12 lg:col-span-3 space-y-gutter">
        <Card className="p-6 text-center shadow-sm">
          <div className="w-20 h-20 mx-auto rounded-full bg-secondary-container mb-4 overflow-hidden border-2 border-primary-fixed flex items-center justify-center">
            <span className="material-symbols-outlined text-[40px] text-primary">account_circle</span>
          </div>
          <h2 className="font-display text-headline-md text-on-surface font-bold">{user?.name || 'Loading...'}</h2>
          <p className="font-label-md text-on-surface-variant mb-4">{user?.role || 'User'}</p>
          <div className="flex justify-around w-full py-4 border-y border-outline-variant/20">
            <div>
              <p className="font-label-sm text-outline uppercase tracking-wider font-bold">Points</p>
              <p className="font-display text-headline-md text-primary font-bold">{user?.activeTasks || 0}</p>
            </div>
          </div>
          <Button className="w-full mt-6" icon="edit_note">View My Progress</Button>
        </Card>

        <Card className="p-6 shadow-sm">
          <h3 className="font-display text-headline-md text-on-surface mb-4 font-bold">Trending Now</h3>
          <div className="space-y-4">
            <div className="group cursor-pointer">
              <p className="font-label-md text-primary font-bold">#NoPlasticWeek</p>
              <p className="font-label-sm text-on-surface-variant">452 contributors</p>
            </div>
            <div className="group cursor-pointer">
              <p className="font-label-md text-on-surface-variant group-hover:text-primary transition-colors font-bold">#SolarDormsProject</p>
              <p className="font-label-sm text-on-surface-variant">128 posts</p>
            </div>
          </div>
          <button className="text-primary font-label-md mt-6 hover:underline font-bold">Show more</button>
        </Card>
      </aside>

      {/* Center Column: Community Feed */}
      <section className="col-span-12 lg:col-span-6 space-y-gutter">
        {/* Create Post */}
        <Card className="p-6 flex gap-4 shadow-sm flex-col">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center flex-shrink-0 text-white">
              <span className="material-symbols-outlined">person</span>
            </div>
            <div className="flex-grow">
              <textarea 
                className="w-full bg-surface-container rounded-xl px-4 py-3 text-on-surface-variant font-body-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Share a sustainable win or update..."
                rows="2"
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-2 pl-16">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-primary">image</span>
                <span className="font-label-md font-bold">Media</span>
              </button>
            </div>
            <Button onClick={handleCreatePost} disabled={!newPostContent.trim()}>Post</Button>
          </div>
        </Card>

        {/* Feed Posts */}
        {loading ? (
           <div className="text-center py-8">Loading posts...</div>
        ) : (
          posts.map(post => (
            <Card key={post.id} className="p-0 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant">
                      <span className="material-symbols-outlined">person</span>
                    </div>
                    <div>
                      <h4 className="font-label-md text-on-surface font-bold">{post.author?.name || 'Anonymous'}</h4>
                      <p className="font-label-sm text-on-surface-variant">{new Date(post.createdAt).toLocaleString()} • <span className="text-primary font-bold">{post.author?.role}</span></p>
                    </div>
                  </div>
                </div>
                <p className="font-body-md text-on-surface mb-4">{post.content}</p>
                
                {post.imageUrl && (
                  <div className="w-full h-[320px] bg-surface-container-highest flex items-center justify-center overflow-hidden mb-4 rounded-lg">
                    <img src={post.imageUrl} alt="Post media" className="object-cover w-full h-full" />
                  </div>
                )}
                
              </div>
              <div className="px-6 py-4 border-t border-outline-variant/10 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <button onClick={() => handleLike(post.id)} className="flex items-center gap-2 group transition-all">
                    <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">volunteer_activism</span>
                    <span className="font-label-md text-on-surface-variant group-hover:text-primary font-bold">Applaud ({post.likes || 0})</span>
                  </button>
                  <button className="flex items-center gap-2 group transition-all">
                    <span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors">mode_comment</span>
                    <span className="font-label-md text-on-surface-variant group-hover:text-secondary font-bold">Comment ({post._count?.comments || 0})</span>
                  </button>
                </div>
              </div>
            </Card>
          ))
        )}
        {posts.length === 0 && !loading && (
          <Card className="p-8 text-center text-on-surface-variant">
            No posts yet. Be the first to share!
          </Card>
        )}
      </section>

      {/* Right Column: Warriors & Suggestions */}
      <aside className="col-span-12 lg:col-span-3 space-y-gutter">
        <Card className="p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-display text-headline-md text-on-surface font-bold">Top Warriors</h3>
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>trophy</span>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-container text-white flex items-center justify-center font-bold">SC</div>
                <div>
                  <p className="font-label-md text-on-surface font-bold">Sarah Chen</p>
                  <p className="font-label-sm text-on-surface-variant">2,450 pts</p>
                </div>
              </div>
              <button className="text-primary font-label-sm border border-primary px-3 py-1 rounded-full hover:bg-primary hover:text-white transition-all font-bold">Follow</button>
            </div>
          </div>
        </Card>
      </aside>
    </div>
  );
}
