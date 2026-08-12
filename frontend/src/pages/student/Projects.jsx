import React, { useState } from 'react';
import Button from '../../components/ui/Button';

export default function Projects() {
  // Mock data for student projects
  const [projects] = useState([
    { id: 1, title: 'Solar Powered Phone Chargers', author: 'Engineering Club', status: 'Funding', progress: 75, goal: '$500' },
    { id: 2, title: 'Community Compost Expansion', author: 'Green Earth', status: 'Active', progress: 40, goal: '100 Volunteers' },
    { id: 3, title: 'Dorm Energy Challenge', author: 'Student Council', status: 'Completed', progress: 100, goal: '20% Reduction' },
  ]);

  return (
    <div className="space-y-8 pb-12">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-display-sm font-display-sm text-primary font-bold">Campus Projects</h2>
          <p className="text-body-lg text-on-surface-variant mt-2">Support or lead student-driven sustainability initiatives.</p>
        </div>
        <Button icon="add">Pitch Project</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(proj => (
          <div key={proj.id} className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-6 shadow-sm hover:-translate-y-1 transition-transform flex flex-col">
             <div className="flex justify-between items-start mb-4">
               <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                  proj.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' :
                  proj.status === 'Active' ? 'bg-secondary-container text-on-secondary-container' :
                  'bg-primary-container text-on-primary-container'
                }`}>
                  {proj.status}
                </span>
                <button className="text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">bookmark_border</span>
                </button>
             </div>
             
             <h3 className="font-bold text-xl text-on-surface mb-1">{proj.title}</h3>
             <p className="text-sm text-on-surface-variant mb-6">By {proj.author}</p>
             
             <div className="mt-auto space-y-2">
               <div className="flex justify-between text-sm font-bold">
                 <span>{proj.progress}%</span>
                 <span className="text-on-surface-variant font-normal">Goal: {proj.goal}</span>
               </div>
               <div className="w-full bg-surface-container-high rounded-full h-2">
                 <div className={`h-2 rounded-full ${
                    proj.status === 'Completed' ? 'bg-emerald-500' : 'bg-primary'
                 }`} style={{ width: `${proj.progress}%` }}></div>
               </div>
             </div>
             
             <button className="w-full mt-6 py-3 border border-outline-variant/50 rounded-xl font-bold text-on-surface hover:bg-surface-container-low transition-colors">
               View Details
             </button>
          </div>
        ))}
      </div>
    </div>
  );
}
