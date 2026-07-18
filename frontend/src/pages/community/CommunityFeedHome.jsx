import React from 'react';

export default function CommunityFeedHome() {
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
            <h2 className="font-display text-headline-md text-on-surface">Alex Rivera</h2>
            <p className="font-label-md text-on-surface-variant mb-4">Campus Green Lead</p>
            <div className="flex justify-around w-full py-4 border-y border-outline-variant/20">
              <div>
                <p className="font-label-sm text-outline uppercase tracking-wider">Posts</p>
                <p className="font-display text-headline-md text-primary">24</p>
              </div>
              <div>
                <p className="font-label-sm text-outline uppercase tracking-wider">Eco-Points</p>
                <p className="font-display text-headline-md text-primary">1.2k</p>
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
              { tag: '#CampusCompost', count: '54 new updates' }
            ].map((trend, i) => (
              <div key={i} className="group cursor-pointer">
                <p className={`font-label-md ${trend.active ? 'text-primary font-bold' : 'text-on-surface-variant group-hover:text-primary'} transition-colors`}>{trend.tag}</p>
                <p className="font-label-sm text-on-surface-variant">{trend.count}</p>
              </div>
            ))}
          </div>
          <button className="text-primary font-label-md mt-6 hover:underline">Show more</button>
        </div>
      </aside>

      {/* Center Column: Community Feed */}
      <section className="col-span-12 lg:col-span-6 space-y-gutter">
        {/* Create Post */}
        <div className="bg-white rounded-[24px] p-6 border border-outline-variant/30 flex gap-4">
          <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0">
            <span className="material-symbols-outlined text-on-secondary-container">person</span>
          </div>
          <div className="flex-grow">
            <button className="w-full text-left bg-surface-container rounded-full px-6 py-3 text-on-surface-variant font-body-md hover:bg-surface-container-high transition-colors">
              Share a sustainable win or update...
            </button>
            <div className="flex items-center gap-6 mt-4 px-2">
              <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-primary">image</span>
                <span className="font-label-md">Media</span>
              </button>
              <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-tertiary">analytics</span>
                <span className="font-label-md">Impact</span>
              </button>
              <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-secondary">event</span>
                <span className="font-label-md">Event</span>
              </button>
            </div>
          </div>
        </div>

        {/* Feed Post 1 */}
        <article className="bg-white rounded-[24px] border border-outline-variant/30 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary-container">engineering</span>
                </div>
                <div>
                  <h4 className="font-label-md text-on-surface font-bold">Campus Facilities Team</h4>
                  <p className="font-label-sm text-on-surface-variant">2 hours ago • <span className="text-primary font-bold">Milestone</span></p>
                </div>
              </div>
              <button className="text-outline hover:text-on-surface transition-colors">
                <span className="material-symbols-outlined">more_horiz</span>
              </button>
            </div>
            <p className="font-body-md text-on-surface mb-4">Thrilled to announce that <span className="font-bold text-primary">4 new smart bins</span> have been installed at the Engineering Quad! These use AI to sort waste in real-time, helping us reach our 2024 zero-waste target. ♻️</p>
            <div className="flex gap-2 mb-4">
              <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full font-label-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">eco</span> 10kg waste diverted
              </span>
              <span className="px-3 py-1 bg-primary-container text-on-primary-container rounded-full font-label-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">add_circle</span> +50 Eco-Points
              </span>
            </div>
          </div>
          <div className="w-full h-[280px] bg-surface-container flex items-center justify-center">
            <span className="material-symbols-outlined text-6xl text-on-surface-variant/30">image</span>
          </div>
          <div className="px-6 py-4 border-t border-outline-variant/10 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 group transition-all">
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">volunteer_activism</span>
                <span className="font-label-md text-on-surface-variant group-hover:text-primary">Applaud (124)</span>
              </button>
              <button className="flex items-center gap-2 group transition-all">
                <span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors">mode_comment</span>
                <span className="font-label-md text-on-surface-variant group-hover:text-secondary">Comment (12)</span>
              </button>
            </div>
            <button className="flex items-center gap-2 group transition-all">
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">share</span>
              <span className="font-label-md text-on-surface-variant group-hover:text-primary">Share</span>
            </button>
          </div>
        </article>

        {/* Feed Post 2 - Glassmorphism Variant */}
        <article className="bg-white/70 backdrop-blur-md rounded-[24px] overflow-hidden shadow-sm border border-outline-variant/30">
          <div className="p-6">
            <div className="flex gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-primary font-bold">EG</div>
              <div>
                <h4 className="font-label-md text-on-surface font-bold">Eco-Garden Club</h4>
                <p className="font-label-sm text-on-surface-variant">5 hours ago</p>
              </div>
            </div>
            <p className="font-body-md text-on-surface mb-4">The first harvest from our vertical farm is here! 🍓 Everything is grown using captured rainwater from Building C. Come grab some fresh produce at the Commons tomorrow!</p>
            <div className="grid grid-cols-2 gap-2 h-48">
              <div className="bg-surface-container rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl text-on-surface-variant/30">image</span>
              </div>
              <div className="bg-surface-container rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl text-on-surface-variant/30">image</span>
              </div>
            </div>
          </div>
          <div className="px-6 py-4 border-t border-outline-variant/10 flex items-center gap-6">
            <button className="flex items-center gap-2 group transition-all">
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">volunteer_activism</span>
              <span className="font-label-md text-on-surface-variant group-hover:text-primary">Applaud (86)</span>
            </button>
            <button className="flex items-center gap-2 group">
              <span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors">mode_comment</span>
              <span className="font-label-md text-on-surface-variant group-hover:text-secondary">Comment (4)</span>
            </button>
          </div>
        </article>
      </section>

      {/* Right Column: Warriors & Suggestions */}
      <aside className="col-span-12 lg:col-span-3 space-y-gutter">
        {/* Top Eco-Warriors */}
        <div className="bg-white rounded-[24px] p-6 border border-outline-variant/30">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-display text-headline-md text-on-surface">Top Warriors</h3>
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>trophy</span>
          </div>
          <div className="space-y-6">
            {[
              { name: 'Sarah Chen', points: '2,450 pts', rank: 1, rankBg: 'bg-primary text-on-primary', following: false },
              { name: 'Marcus Thorne', points: '2,100 pts', rank: 2, rankBg: 'bg-secondary text-on-secondary', following: true },
              { name: 'Anya Patel', points: '1,800 pts', rank: 3, rankBg: 'bg-tertiary text-on-tertiary', following: false }
            ].map((leader, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-surface-variant">person</span>
                    </div>
                    <div className={`absolute -bottom-1 -right-1 ${leader.rankBg} text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold`}>{leader.rank}</div>
                  </div>
                  <div>
                    <p className="font-label-md text-on-surface font-bold">{leader.name}</p>
                    <p className="font-label-sm text-on-surface-variant">{leader.points}</p>
                  </div>
                </div>
                <button className={`font-label-sm px-3 py-1 rounded-full transition-all ${leader.following ? 'bg-primary-container text-on-primary-container' : 'text-primary border border-primary hover:bg-primary hover:text-on-primary'}`}>
                  {leader.following ? 'Following' : 'Follow'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Suggested Groups */}
        <div className="bg-white rounded-[24px] p-6 border border-outline-variant/30">
          <h3 className="font-display text-headline-md text-on-surface mb-4">Suggested Groups</h3>
          <div className="space-y-4">
            {[
              { name: 'Zero Waste Campus', members: '1.4k members', icon: 'recycling' },
              { name: 'Clean Energy Forum', members: '820 members', icon: 'bolt' },
              { name: 'Urban Agriculture', members: '340 members', icon: 'grass' }
            ].map((group, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-surface-ice hover:bg-surface-container transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">{group.icon}</span>
                </div>
                <div className="flex-1">
                  <p className="font-label-md font-bold">{group.name}</p>
                  <p className="font-label-sm text-on-surface-variant">{group.members}</p>
                </div>
                <button className="text-primary font-label-sm border border-primary px-3 py-1 rounded-full hover:bg-primary hover:text-on-primary transition-all">Join</button>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
