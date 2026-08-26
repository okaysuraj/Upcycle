import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

export default function CompareVendorQuotes() {
  const { authFetch } = useAuth();
  const [quotes, setQuotes] = useState([
    {
      id: '1',
      vendor: 'BioLoop Sustainable Solutions',
      tag: 'BEST VALUE',
      price: '$12,450.00',
      timeline: '14 Working Days',
      score: '98/100',
      rating: '4.9',
      certifications: ['ISO 14001', 'LEED Verified', 'Zero Waste Partner'],
      featured: true
    },
    {
      id: '2',
      vendor: 'EcoHaul Logistics Group',
      tag: 'FASTEST DISPATCH',
      price: '$14,200.00',
      timeline: '7 Working Days',
      score: '92/100',
      rating: '4.7',
      certifications: ['ISO 9001', 'EPA SmartWay Certified'],
      featured: false
    },
    {
      id: '3',
      vendor: 'Verde Circular Commodities',
      tag: 'HIGHEST RECOVERY',
      price: '$11,800.00',
      timeline: '21 Working Days',
      score: '95/100',
      rating: '4.8',
      certifications: ['GBCI True Zero Waste', 'B-Corp Certified'],
      featured: false
    }
  ]);
  const [sortBy, setSortBy] = useState('match');

  const handleAcceptQuote = async (quote) => {
    alert(`Accepted quote from ${quote.vendor}! Proceeding to escrow agreement.`);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto space-y-6 font-['Hanken_Grotesk',sans-serif]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#bec9be]/30">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#556158] mb-1">
            <Link to="/marketplace" className="hover:text-[#00522d]">MARKETPLACE</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-[#00522d] font-bold">COMPARE QUOTES</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#00522d] tracking-tight">Compare Vendor Proposals</h1>
          <p className="text-sm text-[#556158] mt-1">Project: Campus Hub Composting & Closed-Loop Retrofit</p>
        </div>
        <div className="flex items-center gap-3">
          <select 
            className="bg-white border border-[#bec9be]/40 rounded-full px-4 py-2 text-xs font-bold text-[#0d1e25] outline-none shadow-sm"
            value={sortBy} 
            onChange={e => setSortBy(e.target.value)}
          >
            <option value="match">Sort by Eco-Score</option>
            <option value="price">Sort by Lowest Price</option>
            <option value="timeline">Sort by Speed</option>
          </select>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quotes.map((q) => (
          <div 
            key={q.id} 
            className={`bg-white rounded-[28px] p-6 sm:p-8 border flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-all ${
              q.featured ? 'border-2 border-[#00522d] ring-4 ring-[#00522d]/10' : 'border-[#bec9be]/30'
            }`}
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                  q.featured ? 'bg-[#00522d] text-white' : 'bg-[#dff1fb] text-[#00522d]'
                }`}>
                  {q.tag}
                </span>
                <div className="flex items-center gap-1 text-xs font-bold text-[#00522d]">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span>{q.rating}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#dff1fb] flex items-center justify-center text-[#00522d] shadow-sm">
                  <span className="material-symbols-outlined text-2xl">eco</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0d1e25] leading-snug">{q.vendor}</h3>
                  <p className="text-[11px] text-[#556158]">Verified Tier-1 Contractor</p>
                </div>
              </div>

              <div className="space-y-3 divide-y divide-[#bec9be]/20 text-xs">
                <div className="flex justify-between items-center pt-2">
                  <span className="text-[#556158]">Total Proposal</span>
                  <span className="text-lg font-bold text-[#00522d]">{q.price}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-[#556158]">Turnaround</span>
                  <span className="font-bold text-[#0d1e25]">{q.timeline}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-[#556158]">Eco-Score</span>
                  <span className="font-bold text-[#00522d]">{q.score}</span>
                </div>
              </div>

              <div className="mt-5 space-y-1.5">
                <p className="text-[10px] font-bold uppercase text-[#556158]">Verified Accreditations</p>
                <div className="flex flex-wrap gap-1.5">
                  {q.certifications.map((cert, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded-md bg-[#f4faff] border border-[#bec9be]/30 text-[10px] font-semibold text-[#0d1e25]">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#bec9be]/20">
              <button
                type="button"
                onClick={() => handleAcceptQuote(q)}
                className="w-full py-3 bg-[#00522d] hover:bg-[#003d21] text-white rounded-full text-xs font-bold shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                <span>Select & Award Proposal</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
