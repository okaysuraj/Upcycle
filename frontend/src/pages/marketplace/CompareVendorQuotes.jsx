import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function CompareVendorQuotes() {
  const { authFetch } = useAuth();
  const [rfps, setRfps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('match');

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const res = await authFetch('/marketplace/rfp');
        if (res.ok) {
          const data = await res.json();
          setRfps(data);
        }
      } catch (err) {
        console.error("Error fetching RFPs/Quotes:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchQuotes();
  }, [authFetch]);

  const handleAcceptQuote = async (quote) => {
    try {
      const res = await authFetch('/payments/create-checkout-session', {
        method: 'POST',
        body: JSON.stringify({
          listingId: quote.id,
          amount: parseFloat(quote.price.replace('$', ''))
        })
      });
      if (res.ok) {
        const data = await res.json();
        alert(`Redirecting to checkout: ${data.url}`);
        // window.location.href = data.url;
      }
    } catch (err) {
      console.error("Failed to accept quote:", err);
    }
  };

  // Transform RFPs into quotes for display (mock mapping)
  const quotes = rfps.flatMap(rfp => 
    rfp.quotes.map(q => ({
      vendor: `Vendor ID: ${q.vendorId.substring(0, 6)}`,
      rating: 4.5, // Mock
      price: `$${q.amount}`,
      timeline: '14 days', // Mock
      capacity: '500 tons/month', // Mock
      certifications: ['ISO 14001', 'LEED'], // Mock
      match: 85 + Math.floor(Math.random() * 10), // Mock
      featured: true,
      rfpTitle: rfp.title,
      id: q.id
    }))
  );

  return (
    <div className="flex flex-col gap-md">
      {/* Header */}
      <div className="flex justify-between items-end mb-md">
        <div>
          <h1 className="font-display text-display text-primary">Compare Vendor Quotes</h1>
          <p className="font-body-lg text-body-lg text-secondary">Side-by-side comparison of submitted vendor proposals for your campus waste management needs.</p>
        </div>
        <div className="flex gap-sm">
          <select className="bg-white border border-outline-variant/30 rounded-xl px-4 py-2 font-label-md text-body-md" value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="match">Sort by Match %</option>
            <option value="price">Sort by Price</option>
            <option value="rating">Sort by Rating</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-10 text-on-surface-variant">Loading vendor quotes...</div>
      ) : quotes.length === 0 ? (
        <div className="text-center py-10 text-on-surface-variant">No quotes available at the moment.</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          {quotes.map((q, i) => (
            <div key={i} className={`bg-white rounded-[24px] border ${q.featured ? 'border-primary ring-2 ring-primary/20' : 'border-outline-variant/30'} p-md flex flex-col relative overflow-hidden hover:shadow-md transition-shadow`}>
              {q.featured && (
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-on-primary text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider">Best Match</span>
                </div>
              )}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary-container/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-3xl">business</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">{q.vendor}</h3>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="font-label-md text-primary font-bold">{q.rating}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 flex-1">
                <div className="flex justify-between items-center py-3 border-b border-outline-variant/10">
                  <span className="font-label-md text-on-surface-variant">RFP</span>
                  <span className="font-headline-sm text-on-surface font-bold truncate max-w-[150px]">{q.rfpTitle}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-outline-variant/10">
                  <span className="font-label-md text-on-surface-variant">Quote Price</span>
                  <span className="font-headline-md text-headline-md text-primary font-bold">{q.price}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-outline-variant/10">
                  <span className="font-label-md text-on-surface-variant">Delivery Timeline</span>
                  <span className="font-label-md font-bold">{q.timeline}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-outline-variant/10">
                  <span className="font-label-md text-on-surface-variant">Processing Capacity</span>
                  <span className="font-label-md font-bold">{q.capacity}</span>
                </div>
                <div className="py-3 border-b border-outline-variant/10">
                  <span className="font-label-md text-on-surface-variant block mb-2">Certifications</span>
                  <div className="flex flex-wrap gap-2">
                    {q.certifications.map((cert, ci) => (
                      <span key={ci} className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[11px] font-bold">{cert}</span>
                    ))}
                  </div>
                </div>
                <div className="py-3">
                  <span className="font-label-md text-on-surface-variant block mb-2">Match Score</span>
                  <div className="w-full bg-surface-container rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: `${q.match}%` }}></div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <button 
                  onClick={() => handleAcceptQuote(q)}
                  className="w-full py-3 bg-primary text-white rounded-full font-bold shadow-md hover:bg-primary/90 transition-colors"
                >
                  Accept Quote & Draft Contract
                </button>
                <button className="w-full py-3 bg-white border border-outline-variant/30 text-on-surface rounded-full font-bold hover:bg-surface-container-lowest transition-colors">
                  Negotiate Terms
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
