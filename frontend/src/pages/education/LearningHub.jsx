import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

export default function LearningHub() {
  const { authFetch } = useAuth();
  const [courses, setCourses] = useState([
    {
      id: '1',
      title: 'Circular Economy Logistics',
      module: 'Module 4 of 12',
      progress: 65,
      timeLeft: '12 min left',
      instructor: 'Dr. Sarah Jenkins',
      category: 'Supply Chain'
    },
    {
      id: '2',
      title: 'Microgrid Energy Optimization',
      module: 'Module 2 of 8',
      progress: 25,
      timeLeft: '45 min left',
      instructor: 'Prof. David Chen',
      category: 'Energy'
    },
    {
      id: '3',
      title: 'Smart Waste Telemetry & AI Sorting',
      module: 'Module 1 of 6',
      progress: 10,
      timeLeft: '1h 10m left',
      instructor: 'Elena Rostova',
      category: 'IoT & Telemetry'
    }
  ]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await authFetch('/education/courses');
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            setCourses(data);
          }
        }
      } catch (err) {
        console.error("Error fetching courses:", err);
      }
    };
    fetchCourses();
  }, [authFetch]);

  return (
    <div className="w-full max-w-[1440px] mx-auto space-y-8 font-['Hanken_Grotesk',sans-serif]">
      {/* Hero Section */}
      <section className="relative rounded-[32px] overflow-hidden min-h-[380px] flex items-center p-8 sm:p-12 lg:p-16 group shadow-lg bg-[#00522d]">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCgEggsFJD-HRB_Yt8zlmolQtMPsYGOy7IQXfDDztxE186iY212uWvzW8reTdNiktAqd710gfGlLkazkRCvOnJGeV4LGoYHRlTgPEOidnj8TMPk5VJovnnm1SAY4_gavmcLzs_EaeeL2nVu8l7h6C9pmYeQ3hADaaqww3Z8xRK9OOujZ-Felh5wUUkh61b1_vI7_T3A7dL69Ul0VAftCkXkcJvQ4Pr4y7sf7B4Q7cyZ_lo6i3HYsiXMFX6OOu9lt4WMb-0XugVNirw')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#00522d]/95 via-[#00522d]/75 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-xl text-white space-y-4">
          <span className="inline-block bg-[#9cf6ba] text-[#00210f] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Upcycle Academy v2.4
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Master Sustainability
          </h2>
          <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
            Empower your campus initiatives with data-driven environmental strategies, carbon accounting, and certified micro-credentials.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <button 
              type="button"
              onClick={() => alert('Browsing all 24 certified sustainability modules...')}
              className="bg-white text-[#00522d] px-6 py-3 rounded-full text-xs font-bold hover:bg-[#e7f6ff] transition-all shadow-md cursor-pointer"
            >
              Explore All Courses
            </button>
            <button 
              type="button"
              onClick={() => alert('Downloading official curriculum overview (PDF)...')}
              className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-6 py-3 rounded-full text-xs font-bold hover:bg-white/20 transition-all cursor-pointer"
            >
              Curriculum Overview
            </button>
          </div>
        </div>
      </section>

      {/* Main Course Feed & Library */}
      <div className="grid grid-cols-12 gap-6">
        {/* Continue Learning (8 Cols) */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="flex justify-between items-center pb-2 border-b border-[#bec9be]/30">
            <h3 className="text-xl font-bold text-[#0d1e25]">Active Course Modules</h3>
            <span className="text-xs font-bold text-[#00522d]">{courses.length} Enrolled</span>
          </div>

          <div className="space-y-4">
            {courses.map((course) => (
              <div key={course.id} className="bg-white p-6 rounded-[28px] border border-[#bec9be]/30 shadow-sm hover:shadow-md transition-shadow space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <span className="text-[10px] font-bold text-[#00522d] uppercase tracking-wider bg-[#dff1fb] px-2.5 py-0.5 rounded-full">
                      {course.module} • {course.category}
                    </span>
                    <h4 className="text-lg font-bold text-[#0d1e25] mt-1.5">{course.title}</h4>
                    <p className="text-xs text-[#556158]">Instructor: {course.instructor}</p>
                  </div>
                  <div className="bg-[#9cf6ba]/40 text-[#00522d] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">timer</span>
                    <span>{course.timeLeft}</span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-[#556158]">Course Completion</span>
                    <span className="text-[#00522d]">{course.progress}%</span>
                  </div>
                  <div className="h-2.5 w-full bg-[#d9e6da] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#00522d] rounded-full transition-all duration-700"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button 
                    type="button"
                    onClick={() => alert(`Resuming ${course.title}...`)}
                    className="px-6 py-2.5 bg-[#00522d] hover:bg-[#003d21] text-white rounded-full text-xs font-bold shadow-sm transition-all cursor-pointer"
                  >
                    Resume Lesson
                  </button>
                  <button 
                    type="button"
                    onClick={() => alert(`Course syllabus: ${course.title}`)}
                    className="px-5 py-2.5 border border-[#bec9be]/40 text-[#0d1e25] rounded-full text-xs font-bold hover:bg-[#f4faff] transition-all cursor-pointer"
                  >
                    Syllabus
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resource Library Sidebar (4 Cols) */}
        <aside className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-[#bec9be]/30 shadow-sm space-y-5">
            <h3 className="text-lg font-bold text-[#0d1e25] pb-3 border-b border-[#bec9be]/20">Featured Guides & Toolkits</h3>
            
            <div className="space-y-3 text-xs">
              <div className="p-3.5 bg-[#f4faff] rounded-2xl border border-[#bec9be]/30 space-y-1">
                <div className="flex items-center gap-2 text-[#00522d] font-bold">
                  <span className="material-symbols-outlined text-base">picture_as_pdf</span>
                  <span>Zero-Waste Campus Playbook</span>
                </div>
                <p className="text-[11px] text-[#556158]">Comprehensive 45-page municipal compliance guide.</p>
                <button className="text-[11px] font-bold text-[#00522d] hover:underline pt-1">Download PDF (3.2 MB) →</button>
              </div>

              <div className="p-3.5 bg-[#f4faff] rounded-2xl border border-[#bec9be]/30 space-y-1">
                <div className="flex items-center gap-2 text-[#00522d] font-bold">
                  <span className="material-symbols-outlined text-base">table_chart</span>
                  <span>GHG Scope 1-3 Calculator Spreadsheet</span>
                </div>
                <p className="text-[11px] text-[#556158]">Standard EPA & GHG Protocol emission factors.</p>
                <button className="text-[11px] font-bold text-[#00522d] hover:underline pt-1">Download XLSX (1.1 MB) →</button>
              </div>
            </div>
          </div>

          <div className="bg-[#00522d] text-white rounded-[28px] p-6 shadow-sm space-y-2">
            <span className="material-symbols-outlined text-3xl text-[#9cf6ba]">school</span>
            <h4 className="text-base font-bold tracking-tight">Earn University Credits</h4>
            <p className="text-xs text-white/80 leading-relaxed">
              All courses completed with 80%+ score are eligible for academic credit transfer.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
