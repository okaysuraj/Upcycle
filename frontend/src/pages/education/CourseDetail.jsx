import React, { useState } from 'react';

export default function CourseDetail() {
  const [activeModule, setActiveModule] = useState('mod1');

  return (
    <div className="flex flex-col gap-md">
      {/* Header */}
      <div className="flex items-center gap-4 mb-md">
        <span className="material-symbols-outlined text-primary cursor-pointer">arrow_back</span>
        <h2 className="font-headline-md text-primary">Advanced Urban Circularity</h2>
      </div>

      {/* Course Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Video & Syllabus */}
        <div className="lg:col-span-8 space-y-8">
          {/* Main Video Player Section */}
          <div className="bg-black rounded-[32px] overflow-hidden aspect-video shadow-2xl relative group">
            <div className="absolute inset-0 bg-surface-variant flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-on-surface-variant/50">play_circle</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-primary/90 text-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
              </div>
            </div>
            {/* Player Controls Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <div className="w-full bg-white/20 h-1.5 rounded-full mb-4 cursor-pointer overflow-hidden">
                <div className="bg-primary-container h-full w-1/3"></div>
              </div>
              <div className="flex items-center justify-between text-white font-label-md">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined cursor-pointer">pause</span>
                  <span className="material-symbols-outlined cursor-pointer">skip_next</span>
                  <span className="material-symbols-outlined cursor-pointer">volume_up</span>
                  <span>12:45 / 45:00</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined cursor-pointer">closed_caption</span>
                  <span className="material-symbols-outlined cursor-pointer">settings</span>
                  <span className="material-symbols-outlined cursor-pointer">fullscreen</span>
                </div>
              </div>
            </div>
          </div>

          {/* Course Description & Syllabus */}
          <div className="bg-white rounded-[32px] p-8 border border-outline-variant/30 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-headline-lg text-primary">Course Syllabus</h3>
              <div className="flex items-center gap-2 text-primary font-bold">
                <span className="material-symbols-outlined">verified</span>
                <span className="font-label-md">8 Modules • 12.5 Hours</span>
              </div>
            </div>
            <div className="space-y-4">
              {/* Module 1: Active */}
              <div className={`border ${activeModule === 'mod1' ? 'border-primary/30' : 'border-outline-variant/30'} rounded-2xl overflow-hidden`}>
                <button className={`w-full flex items-center justify-between p-5 transition-colors ${activeModule === 'mod1' ? 'bg-primary-container/10 hover:bg-primary-container/20' : 'hover:bg-surface-variant/20'}`} onClick={() => setActiveModule('mod1')}>
                  <div className={`flex items-center gap-4 ${activeModule === 'mod1' ? 'text-primary' : 'text-on-surface-variant'}`}>
                    <span className={`${activeModule === 'mod1' ? 'bg-primary text-white' : 'bg-surface-variant text-on-surface-variant'} w-8 h-8 rounded-full flex items-center justify-center font-bold`}>1</span>
                    <span className="font-headline-md">Foundations of Circular Economy</span>
                  </div>
                  <span className={`material-symbols-outlined transition-transform ${activeModule === 'mod1' ? 'rotate-180 text-primary' : 'text-on-surface-variant'}`}>expand_more</span>
                </button>
                {activeModule === 'mod1' && (
                  <div className="p-6 pt-0 bg-white space-y-4">
                    <div className="flex items-center justify-between text-on-surface-variant p-2 hover:bg-surface-variant/20 rounded-lg cursor-pointer transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-success-container">check_circle</span>
                        <span className="font-body-md">1.1 Introduction to the Course</span>
                      </div>
                      <span className="font-label-sm">05:20</span>
                    </div>
                    <div className="flex items-center justify-between text-primary font-bold p-2 bg-primary-container/5 rounded-lg cursor-pointer">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
                        <span className="font-body-md">1.2 Defining Urban Waste Cycles</span>
                      </div>
                      <span className="font-label-sm">15:45</span>
                    </div>
                    <div className="flex items-center justify-between text-on-surface-variant p-2 hover:bg-surface-variant/20 rounded-lg cursor-pointer transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined">radio_button_unchecked</span>
                        <span className="font-body-md">1.3 Case Study: Amsterdam 2025</span>
                      </div>
                      <span className="font-label-sm">24:00</span>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Module 2 */}
              <div className={`border ${activeModule === 'mod2' ? 'border-primary/30' : 'border-outline-variant/30'} rounded-2xl overflow-hidden`}>
                <button className={`w-full flex items-center justify-between p-5 transition-colors ${activeModule === 'mod2' ? 'bg-primary-container/10 hover:bg-primary-container/20' : 'hover:bg-surface-variant/20'}`} onClick={() => setActiveModule('mod2')}>
                  <div className={`flex items-center gap-4 ${activeModule === 'mod2' ? 'text-primary' : 'text-on-surface-variant'}`}>
                    <span className={`${activeModule === 'mod2' ? 'bg-primary text-white' : 'bg-surface-variant text-on-surface-variant'} w-8 h-8 rounded-full flex items-center justify-center font-bold`}>2</span>
                    <span className="font-headline-md">Metric Systems for Sustainability</span>
                  </div>
                  <span className={`material-symbols-outlined transition-transform ${activeModule === 'mod2' ? 'rotate-180 text-primary' : 'text-on-surface-variant'}`}>expand_more</span>
                </button>
                {activeModule === 'mod2' && (
                  <div className="p-6 pt-0 bg-white">
                    <p className="text-on-surface-variant font-body-md">Learn to quantify ecological impact through advanced KPI frameworks and data modeling.</p>
                  </div>
                )}
              </div>

              {/* Module 3 */}
              <div className={`border ${activeModule === 'mod3' ? 'border-primary/30' : 'border-outline-variant/30'} rounded-2xl overflow-hidden`}>
                <button className={`w-full flex items-center justify-between p-5 transition-colors ${activeModule === 'mod3' ? 'bg-primary-container/10 hover:bg-primary-container/20' : 'hover:bg-surface-variant/20'}`} onClick={() => setActiveModule('mod3')}>
                  <div className={`flex items-center gap-4 ${activeModule === 'mod3' ? 'text-primary' : 'text-on-surface-variant'}`}>
                    <span className={`${activeModule === 'mod3' ? 'bg-primary text-white' : 'bg-surface-variant text-on-surface-variant'} w-8 h-8 rounded-full flex items-center justify-center font-bold`}>3</span>
                    <span className="font-headline-md">Integrated Resource Management</span>
                  </div>
                  <span className={`material-symbols-outlined transition-transform ${activeModule === 'mod3' ? 'rotate-180 text-primary' : 'text-on-surface-variant'}`}>expand_more</span>
                </button>
                {activeModule === 'mod3' && (
                  <div className="p-6 pt-0 bg-white">
                    <p className="text-on-surface-variant font-body-md">Detailed modules on waste, water, and energy integration in campus planning.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Instructor & Certification */}
        <div className="lg:col-span-4 space-y-8">
          {/* Instructor Card */}
          <div className="bg-white rounded-[32px] p-8 border border-outline-variant/30 shadow-sm">
            <h3 className="font-label-sm text-primary mb-6 uppercase tracking-wider">Instructor</h3>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full bg-surface-variant ring-4 ring-primary-container/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-on-surface-variant/50">person</span>
              </div>
              <div>
                <h4 className="font-headline-sm text-on-surface font-bold">Dr. Aris Thorne</h4>
                <p className="text-body-sm text-on-surface-variant">Chief Environmental Scientist, ECI</p>
              </div>
            </div>
            <p className="text-body-md text-on-surface-variant mb-6 line-clamp-3">
              Dr. Thorne brings 20 years of experience in urban ecological modeling. Formerly the Director of Sustainability at MIT, he now leads global research initiatives on circular economic frameworks.
            </p>
            <button className="w-full py-2 border border-outline text-primary font-label-md rounded-full hover:bg-surface-variant/50 transition-colors">View Profile</button>
          </div>

          {/* Certification Glass Card */}
          <div className="bg-white/70 backdrop-blur-md rounded-[32px] p-8 border border-outline-variant/30 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/30 rounded-bl-full -z-10"></div>
            <h3 className="font-headline-sm text-primary mb-2">Professional Certification</h3>
            <p className="text-body-md text-on-surface-variant mb-6">Complete all modules and assignments to earn your official <span className="font-bold text-on-surface">Urban Circularity Analyst</span> credential.</p>
            <div className="bg-surface-container-low rounded-xl p-4 flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
              </div>
              <div>
                <span className="block font-bold text-on-surface">UCA Certificate</span>
                <span className="text-xs text-on-surface-variant">Validated by Eco-Institutes</span>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between text-label-sm mb-2 font-bold text-on-surface">
                <span>Course Progress</span>
                <span className="text-primary">12%</span>
              </div>
              <div className="w-full bg-secondary-container h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[12%] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
