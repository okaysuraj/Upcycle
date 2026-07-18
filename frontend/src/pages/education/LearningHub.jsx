import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function LearningHub() {
  const { authFetch } = useAuth();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await authFetch('/education/courses');
        if (res.ok) {
          const data = await res.json();
          setCourses(data);
        }
      } catch (err) {
        console.error("Error fetching courses:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, [authFetch]);

  return (
    <div className="flex flex-col pb-12 max-w-[1440px] mx-auto w-full space-y-12">
      {/* Hero Section (Master Sustainability) */}
      <section className="relative rounded-[32px] overflow-hidden min-h-[400px] flex items-center px-8 md:px-12 group shadow-md">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCgEggsFJD-HRB_Yt8zlmolQtMPsYGOy7IQXfDDztxE186iY212uWvzW8reTdNiktAqd710gfGlLkazkRCvOnJGeV4LGoYHRlTgPEOidnj8TMPk5VJovnnm1SAY4_gavmcLzs_EaeeL2nVu8l7h6C9pmYeQ3hADaaqww3Z8xRK9OOujZ-Felh5wUUkh61b1_vI7_T3A7dL69Ul0VAftCkXkcJvQ4Pr4y7sf7B4Q7cyZ_lo6i3HYsiXMFX6OOu9lt4WMb-0XugVNirw')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-primary/20 md:via-primary/40 md:to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-xl text-white">
          <span className="inline-block bg-white/20 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full font-label-md font-bold mb-6 shadow-sm">Learning Hub v2.4</span>
          <h2 className="font-display text-display-sm md:text-display-md mb-4 font-bold shadow-sm">Master Sustainability</h2>
          <p className="font-body-lg text-primary-container/90 mb-8 text-lg">Empower your campus initiatives with data-driven environmental strategies and certified professional courses.</p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-primary px-8 py-3 rounded-full font-label-md font-bold hover:shadow-xl transition-all hover:scale-105">Explore All Courses</button>
            <button className="bg-black/20 backdrop-blur-md text-white border border-white/30 px-8 py-3 rounded-full font-label-md font-bold hover:bg-black/40 transition-all">Curriculum Overview</button>
          </div>
        </div>
      </section>

      {/* Dashboard Row: Continue Learning & Resource Sidebar */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Continue Learning (Bento Item 8/12) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="font-display text-headline-md font-bold text-on-surface">Continue Learning</h3>
            <a className="text-primary font-bold flex items-center gap-1 hover:underline cursor-pointer group">
              View Schedule <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-[24px] border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="w-full sm:w-48 h-40 sm:h-32 rounded-xl overflow-hidden flex-shrink-0">
                <img className="w-full h-full object-cover" alt="Circular Economy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu1ozRhzV-Wleq6yexxaYHdsBR0VPTeXxJwk3emmNZxEA4o_GX_SAOYGnrYy0127_VKKpTJ440WkQoDlovTIqJ6WjHh40rPOdgmh7I9PrDVNajr717ZAbRrWc_YfTLhSiw0oQ_pN-Advt0ZksJFdlpK6FrfD9Tw3RwXyxCXz2TzMbxyjRxfR3HpJPL5aN05yKy9S0qzNvv1yL97Dton08BlCxloxxPLzoQCb2ArDOzD4BGujXD04LNi-Gnzb3sGS76ImnYyk1AKBw" />
              </div>
              <div className="flex-grow w-full">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <div>
                    <p className="text-on-surface-variant font-label-sm uppercase tracking-wider font-bold">Module 4 of 12</p>
                    <h4 className="font-headline-sm font-bold text-on-surface mt-1">Circular Economy Logistics</h4>
                  </div>
                  <div className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">timer</span> 12 min left
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="flex justify-between font-label-md mb-2">
                    <span className="text-on-surface-variant font-bold">Current Progress</span>
                    <span className="text-primary font-bold">65%</span>
                  </div>
                  <div className="h-3 w-full bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-primary transition-all duration-1000 ease-out rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                
                <div className="mt-6 flex flex-wrap gap-4">
                  <button className="bg-primary text-white px-8 py-2.5 rounded-full font-bold hover:shadow-md transition-all active:scale-95">Resume Lesson</button>
                  <button className="text-on-surface-variant font-bold flex items-center gap-2 hover:text-primary transition-colors hover:bg-primary/5 px-4 rounded-full">
                    Course Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Resource Library Sidebar (Bento Item 4/12) */}
        <aside className="lg:col-span-4 space-y-6">
          <h3 className="font-display text-headline-md font-bold text-on-surface">Resource Library</h3>
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-[24px] h-full flex flex-col border border-outline-variant/30 shadow-sm">
            <p className="font-body-md text-on-surface-variant mb-6">Quick access to essential campus frameworks and compliance tools.</p>
            
            <div className="space-y-4 flex-grow">
              <div className="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/30 flex items-center gap-4 hover:border-primary/50 transition-colors cursor-pointer group hover:shadow-sm">
                <div className="p-3 bg-tertiary/10 text-tertiary rounded-lg group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">description</span>
                </div>
                <div>
                  <p className="font-label-md font-bold text-on-surface">Policy Templates</p>
                  <p className="text-xs text-on-surface-variant">v3.1 Revised Nov 2023</p>
                </div>
              </div>
              
              <div className="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/30 flex items-center gap-4 hover:border-primary/50 transition-colors cursor-pointer group hover:shadow-sm">
                <div className="p-3 bg-secondary/10 text-secondary rounded-lg group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">database</span>
                </div>
                <div>
                  <p className="font-label-md font-bold text-on-surface">Public Datasets</p>
                  <p className="text-xs text-on-surface-variant">Regional Energy Trends</p>
                </div>
              </div>
              
              <div className="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/30 flex items-center gap-4 hover:border-primary/50 transition-colors cursor-pointer group hover:shadow-sm">
                <div className="p-3 bg-primary/10 text-primary rounded-lg group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">assignment_turned_in</span>
                </div>
                <div>
                  <p className="font-label-md font-bold text-on-surface">Audit Checklist</p>
                  <p className="text-xs text-on-surface-variant">Campus Infrastructure</p>
                </div>
              </div>
            </div>
            
            <button className="mt-8 w-full border-2 border-primary text-primary py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all">
              Browse All Resources
            </button>
          </div>
        </aside>
      </section>

      {/* Recommended Courses Grid */}
      <section className="space-y-8 pb-12">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="font-display text-headline-lg font-bold text-on-surface mb-2">Recommended Courses</h3>
            <p className="text-on-surface-variant">Curated for your current environmental focus</p>
          </div>
        </div>
        
        {loading ? (
          <p className="text-secondary text-center">Loading courses...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {courses.map(course => (
              <div key={course.id} className="bg-white border border-outline-variant/30 rounded-[24px] overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
                <div className="h-48 relative overflow-hidden">
                  <div className="w-full h-full bg-surface-container-high flex items-center justify-center text-outline group-hover:scale-105 transition-transform duration-500">
                    <span className="material-symbols-outlined text-6xl">{course.icon}</span>
                  </div>
                  <div className={`absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold ${course.colorClass} shadow-sm`}>
                    {course.level}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="font-headline-sm font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">{course.title}</h4>
                  <p className="text-body-sm text-on-surface-variant mb-4 line-clamp-2">{course.description}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm font-bold text-on-surface">
                      <span className="material-symbols-outlined text-[18px] text-yellow-500">star</span> {course.rating}
                    </div>
                    <span className="text-sm text-on-surface-variant font-medium">{course.modulesCount} Modules</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
