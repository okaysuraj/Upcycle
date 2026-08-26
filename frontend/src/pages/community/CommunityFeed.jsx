import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

export default function CommunityFeed() {
  const { authFetch, user } = useAuth();
  const [posts, setPosts] = useState([
    {
      id: '1',
      author: 'Campus Sustainability Team',
      role: 'FACILITY LEAD',
      time: '2 hours ago',
      content: 'Thrilled to announce that 4 new smart bins have been installed at the Engineering Quad! These use AI to sort waste in real-time, helping us reach our 2024 zero-waste target. ♻️',
      likes: 42,
      comments: 12,
      impact: '10kg waste diverted',
      tag: 'Milestone'
    },
    {
      id: '2',
      author: 'Maya Lin',
      role: 'STUDENT VOLUNTEER',
      time: '5 hours ago',
      content: 'Just dropped off 15 textbooks and clean binder packs at the Circular Resource Exchange hub in Library West! Someone grab them for finals week! 📚✨',
      likes: 28,
      comments: 6,
      impact: '15 items upcycled',
      tag: 'Reuse'
    }
  ]);
  const [newPostContent, setNewPostContent] = useState('');
  const [isPosting, setIsPosting] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await authFetch('/community/posts');
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            setPosts(data.map((p, i) => ({
              id: p.id || String(i),
              author: p.author?.name || 'Eco Advocate',
              role: p.author?.role || 'STUDENT',
              time: 'Just now',
              content: p.content,
              likes: p.likesCount || 0,
              comments: p.commentsCount || 0,
              impact: 'Carbon offset verified',
              tag: 'Update'
            })));
          }
        }
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };
    fetchPosts();
  }, [authFetch]);

  const handleCreatePost = async () => {
    if (!newPostContent.trim()) return;
    setIsPosting(true);
    try {
      const res = await authFetch('/community/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: newPostContent }),
      });
      if (res.ok) {
        const newP = await res.json();
        setPosts(prev => [
          {
            id: newP.id || String(Date.now()),
            author: user?.name || 'You',
            role: user?.role || 'STUDENT',
            time: 'Just now',
            content: newPostContent,
            likes: 0,
            comments: 0,
            impact: '5kg waste diverted',
            tag: 'Action'
          },
          ...prev
        ]);
        setNewPostContent('');
      } else {
        // Optimistic UI fallback
        setPosts(prev => [
          {
            id: String(Date.now()),
            author: user?.name || 'You',
            role: user?.role || 'STUDENT',
            time: 'Just now',
            content: newPostContent,
            likes: 0,
            comments: 0,
            impact: '5kg waste diverted',
            tag: 'Action'
          },
          ...prev
        ]);
        setNewPostContent('');
      }
    } catch (err) {
      console.error("Error creating post:", err);
    } finally {
      setIsPosting(false);
    }
  };

  const handleLike = (postId) => {
    setPosts(prev => prev.map(p => p.id === postId ? { ...p, likes: p.likes + 1 } : p));
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto space-y-6 font-['Hanken_Grotesk',sans-serif]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#bec9be]/30">
        <div>
          <span className="text-[11px] font-bold text-[#00522d] uppercase tracking-wider bg-[#dff1fb] px-3 py-1 rounded-full inline-block mb-2">
            Social Climate Collective
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#00522d] tracking-tight">Community Hub & Feed</h1>
          <p className="text-sm text-[#556158] mt-1">Connect, celebrate climate milestones, and organize campus cleanups.</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left Column: User Profile & Trends (3 Cols) */}
        <aside className="col-span-12 lg:col-span-3 space-y-6">
          <div className="bg-white rounded-[28px] p-6 border border-[#bec9be]/30 shadow-sm text-center space-y-4">
            <div className="w-20 h-20 mx-auto rounded-full bg-[#dff1fb] flex items-center justify-center text-[#00522d] shadow-sm">
              <span className="material-symbols-outlined text-4xl">account_circle</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#0d1e25]">{user?.name || 'Alex Rivera'}</h2>
              <p className="text-xs text-[#556158] mt-0.5">{user?.role || 'Campus Green Lead'}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-2 py-3 border-y border-[#bec9be]/20 text-center">
              <div>
                <p className="text-[10px] font-bold text-[#556158] uppercase">Posts</p>
                <p className="text-2xl font-bold text-[#00522d] mt-0.5">{posts.length}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-[#556158] uppercase">Eco-Points</p>
                <p className="text-2xl font-bold text-[#00522d] mt-0.5">1,240</p>
              </div>
            </div>

            <Link 
              to="/leaderboard"
              className="w-full py-2.5 bg-[#00522d] text-white rounded-full text-xs font-bold shadow-md hover:bg-[#003d21] transition-all flex items-center justify-center gap-1.5 cursor-pointer block"
            >
              <span className="material-symbols-outlined text-[16px]">leaderboard</span>
              <span>View Leaderboard Rank</span>
            </Link>
          </div>

          <div className="bg-white rounded-[28px] p-6 border border-[#bec9be]/30 shadow-sm space-y-3">
            <h3 className="text-base font-bold text-[#0d1e25]">Trending Climate Tags</h3>
            <div className="space-y-2 text-xs">
              <div className="p-2 rounded-xl bg-[#f4faff] hover:bg-[#dff1fb] transition-colors cursor-pointer">
                <p className="font-bold text-[#00522d]">#NoPlasticWeek</p>
                <p className="text-[10px] text-[#556158]">452 contributors on campus</p>
              </div>
              <div className="p-2 rounded-xl bg-[#f4faff] hover:bg-[#dff1fb] transition-colors cursor-pointer">
                <p className="font-bold text-[#00522d]">#SolarDormsProject</p>
                <p className="text-[10px] text-[#556158]">128 student posts</p>
              </div>
              <div className="p-2 rounded-xl bg-[#f4faff] hover:bg-[#dff1fb] transition-colors cursor-pointer">
                <p className="font-bold text-[#00522d]">#ZeroWasteDining</p>
                <p className="text-[10px] text-[#556158]">89 interactions</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Center Column: Feed (6 Cols) */}
        <section className="col-span-12 lg:col-span-6 space-y-6">
          {/* Create Post Card */}
          <div className="bg-white rounded-[28px] p-6 border border-[#bec9be]/30 shadow-sm space-y-4">
            <div className="flex gap-3 items-start">
              <div className="w-10 h-10 rounded-full bg-[#dff1fb] text-[#00522d] flex items-center justify-center font-bold shrink-0">
                <span className="material-symbols-outlined text-xl">edit</span>
              </div>
              <textarea
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                placeholder="Share a sustainable win, cleanup event, or upcycle tip..."
                className="w-full bg-[#f4faff] border border-[#bec9be]/40 rounded-2xl p-3.5 text-xs text-[#0d1e25] outline-none focus:ring-2 focus:ring-[#00522d]/20 h-20 resize-none"
              />
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-[#bec9be]/20">
              <div className="flex gap-3 text-[#556158] text-xs">
                <button type="button" className="flex items-center gap-1 hover:text-[#00522d]">
                  <span className="material-symbols-outlined text-base">image</span>
                  <span>Photo</span>
                </button>
                <button type="button" className="flex items-center gap-1 hover:text-[#00522d]">
                  <span className="material-symbols-outlined text-base">eco</span>
                  <span>Impact Tag</span>
                </button>
              </div>
              <button
                type="button"
                onClick={handleCreatePost}
                disabled={isPosting || !newPostContent.trim()}
                className="px-5 py-2 bg-[#00522d] text-white rounded-full text-xs font-bold shadow-md hover:bg-[#003d21] transition-all disabled:opacity-50 cursor-pointer"
              >
                {isPosting ? 'Posting...' : 'Share Update'}
              </button>
            </div>
          </div>

          {/* Feed Posts */}
          <div className="space-y-4">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-[28px] p-6 border border-[#bec9be]/30 shadow-sm space-y-3">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#dff1fb] flex items-center justify-center text-[#00522d] font-bold">
                      <span className="material-symbols-outlined text-xl">person</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#0d1e25]">{post.author}</h4>
                      <p className="text-[10px] text-[#556158]">{post.time} • <span className="text-[#00522d] font-bold">{post.tag}</span></p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[#556158] text-base cursor-pointer">more_horiz</span>
                </div>

                <p className="text-xs text-[#0d1e25] leading-relaxed">{post.content}</p>

                {post.impact && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#9cf6ba]/30 border border-[#9cf6ba] text-[#00522d] rounded-full text-[11px] font-bold">
                    <span className="material-symbols-outlined text-sm">eco</span>
                    <span>{post.impact}</span>
                  </div>
                )}

                <div className="flex items-center gap-6 pt-3 border-t border-[#bec9be]/20 text-xs font-semibold text-[#556158]">
                  <button 
                    type="button" 
                    onClick={() => handleLike(post.id)}
                    className="flex items-center gap-1.5 hover:text-[#00522d] cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-base">thumb_up</span>
                    <span>{post.likes} Likes</span>
                  </button>
                  <button type="button" className="flex items-center gap-1.5 hover:text-[#00522d] cursor-pointer">
                    <span className="material-symbols-outlined text-base">chat_bubble</span>
                    <span>{post.comments} Comments</span>
                  </button>
                  <button type="button" className="flex items-center gap-1.5 hover:text-[#00522d] cursor-pointer ml-auto">
                    <span className="material-symbols-outlined text-base">share</span>
                    <span>Share</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Right Column: Upcoming Action Cleanups & Events (3 Cols) */}
        <aside className="col-span-12 lg:col-span-3 space-y-6">
          <div className="bg-white rounded-[28px] p-6 border border-[#bec9be]/30 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-[#0d1e25]">Upcoming Cleanups</h3>
            
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-[#f4faff] rounded-2xl border border-[#bec9be]/30 space-y-1">
                <div className="flex justify-between font-bold text-[#00522d]">
                  <span>Campus Creek Cleanup</span>
                  <span className="text-[10px] bg-[#dff1fb] px-2 py-0.5 rounded-full">Sat 10 AM</span>
                </div>
                <p className="text-[11px] text-[#556158]">Meet at North Bridge • 32 RSVPs</p>
                <Link to="/events" className="text-[11px] font-bold text-[#00522d] hover:underline block pt-1">
                  Join Event →
                </Link>
              </div>

              <div className="p-3 bg-[#f4faff] rounded-2xl border border-[#bec9be]/30 space-y-1">
                <div className="flex justify-between font-bold text-[#00522d]">
                  <span>E-Waste Drive</span>
                  <span className="text-[10px] bg-[#dff1fb] px-2 py-0.5 rounded-full">Thu 2 PM</span>
                </div>
                <p className="text-[11px] text-[#556158]">Student Center Plaza • 18 RSVPs</p>
                <Link to="/events" className="text-[11px] font-bold text-[#00522d] hover:underline block pt-1">
                  Join Event →
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
