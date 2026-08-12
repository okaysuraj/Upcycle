import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function CommunityFeedHome() {
  const { user, authFetch } = useAuth();
  const [posts, setPosts] = useState([]);
  const [groups, setGroups] = useState([]);
  const [newPostContent, setNewPostContent] = useState('');

  useEffect(() => {
    fetchPosts();
    fetchGroups();
  }, [authFetch]);

  const fetchPosts = async () => {
    try {
      const res = await authFetch('/community/posts');
      if (res.ok) setPosts(await res.json());
    } catch (err) {
      console.error(err);
    }
  };

  const fetchGroups = async () => {
    try {
      const res = await authFetch('/community/groups');
      if (res.ok) setGroups(await res.json());
    } catch (err) {
      console.error(err);
    }
  };

  const handleCreatePost = async () => {
    if (!newPostContent.trim()) return;
    try {
      const res = await authFetch('/community/posts', {
        method: 'POST',
        body: JSON.stringify({ content: newPostContent })
      });
      if (res.ok) {
        setNewPostContent('');
        fetchPosts(); // Refresh feed
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleLike = async (postId) => {
    try {
      const res = await authFetch(`/community/posts/${postId}/like`, { method: 'POST' });
      if (res.ok) {
        fetchPosts(); // Refresh just to keep it simple, or update state optimistically
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="grid grid-cols-12 gap-gutter">
      {/* Left Column: User Profile & Trends */}
      <aside className="col-span-12 lg:col-span-3 space-y-gutter">
        {/* Mini Profile Card */}
        <div className="bg-white rounded-[24px] p-6 border border-outline-variant/30 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-secondary-container mb-4 border-2 border-primary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl text-on-secondary-container">person</span>
            </div>
            <h2 className="font-display text-headline-md text-on-surface">{user?.name || 'Loading...'}</h2>
            <p className="font-label-md text-on-surface-variant mb-4 capitalize">{user?.role?.replace('_', ' ').toLowerCase() || 'Eco Warrior'}</p>
            <div className="flex justify-around w-full py-4 border-y border-outline-variant/20">
              <div>
                <p className="font-label-sm text-outline uppercase tracking-wider">Eco-Points</p>
                <p className="font-display text-headline-md text-primary">{user?.points || 0}</p>
              </div>
            </div>
          </div>
          <button className="w-full mt-6 py-3 px-4 bg-primary text-on-primary rounded-full font-label-md hover:opacity-90 transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[18px]">edit_note</span>
            View My Progress
          </button>
        </div>

        {/* Trending Topics */}
        <div className="bg-white rounded-[24px] p-6 border border-outline-variant/30">
          <h3 className="font-display text-headline-md text-on-surface mb-4">Trending Now</h3>
          <div className="space-y-4">
            {[
              { tag: '#NoPlasticWeek', count: '452 contributors', active: true },
              { tag: '#SolarDormsProject', count: '128 posts' },
              { tag: '#ZeroWasteDining', count: '89 interactions' },
            ].map((trend, i) => (
              <div key={i} className="group cursor-pointer">
                <p className={`font-label-md ${trend.active ? 'text-primary font-bold' : 'text-on-surface-variant group-hover:text-primary'} transition-colors`}>{trend.tag}</p>
                <p className="font-label-sm text-on-surface-variant">{trend.count}</p>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Center Column: Community Feed */}
      <section className="col-span-12 lg:col-span-6 space-y-gutter">
        {/* Create Post */}
        <div className="bg-white rounded-[24px] p-6 border border-outline-variant/30 flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-on-secondary-container">person</span>
            </div>
            <div className="flex-grow flex items-center">
              <input 
                type="text"
                placeholder="Share a sustainable win or update..."
                className="w-full bg-surface-container rounded-full px-6 py-3 text-on-surface font-body-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCreatePost()}
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-2 px-2">
            <div className="flex gap-6">
              <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-primary">image</span>
                <span className="font-label-md">Media</span>
              </button>
            </div>
            <button 
              onClick={handleCreatePost}
              disabled={!newPostContent.trim()}
              className="bg-primary text-on-primary px-4 py-1.5 rounded-full font-bold text-sm disabled:opacity-50"
            >
              Post
            </button>
          </div>
        </div>

        {/* Dynamic Feed Posts */}
        {posts.length === 0 ? (
          <div className="text-center py-8 text-on-surface-variant">No posts yet. Be the first to share!</div>
        ) : (
          posts.map(post => (
            <article key={post.id} className="bg-white rounded-[24px] border border-outline-variant/30 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-primary-container">person</span>
                    </div>
                    <div>
                      <h4 className="font-label-md text-on-surface font-bold">{post.author?.name || 'Anonymous'}</h4>
                      <p className="font-label-sm text-on-surface-variant">
                        {new Date(post.createdAt).toLocaleDateString()} • <span className="text-primary font-bold capitalize">{post.author?.role?.replace('_', ' ').toLowerCase() || 'Member'}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <p className="font-body-md text-on-surface mb-4">{post.content}</p>
                
                {post.imageUrl && (
                  <div className="w-full h-[280px] bg-surface-container rounded-xl overflow-hidden flex items-center justify-center mb-4">
                    <img src={post.imageUrl} alt="Post attachment" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
              
              <div className="px-6 py-4 border-t border-outline-variant/10 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <button onClick={() => handleLike(post.id)} className="flex items-center gap-2 group transition-all">
                    <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">volunteer_activism</span>
                    <span className="font-label-md text-on-surface-variant group-hover:text-primary">Applaud ({post.likes || 0})</span>
                  </button>
                  <button className="flex items-center gap-2 group transition-all">
                    <span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors">mode_comment</span>
                    <span className="font-label-md text-on-surface-variant group-hover:text-secondary">Comment ({post._count?.comments || 0})</span>
                  </button>
                </div>
              </div>
            </article>
          ))
        )}
      </section>

      {/* Right Column: Groups & Suggestions */}
      <aside className="col-span-12 lg:col-span-3 space-y-gutter">
        {/* Suggested Groups */}
        <div className="bg-white rounded-[24px] p-6 border border-outline-variant/30">
          <h3 className="font-display text-headline-md text-on-surface mb-4">Eco Groups</h3>
          <div className="space-y-4">
            {groups.length === 0 ? (
              <p className="text-sm text-on-surface-variant">No groups available.</p>
            ) : (
              groups.map(group => (
                <div key={group.id} className="flex items-center gap-3 p-3 rounded-xl bg-surface-ice hover:bg-surface-container transition-colors cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">groups</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-label-md font-bold truncate max-w-[120px]">{group.name}</p>
                    <p className="font-label-sm text-on-surface-variant">{group._count?.members || 0} members</p>
                  </div>
                  <button className="text-primary font-label-sm border border-primary px-3 py-1 rounded-full hover:bg-primary hover:text-on-primary transition-all">Join</button>
                </div>
              ))
            )}
          </div>
        </div>
      </aside>
    </div>
  );
}
