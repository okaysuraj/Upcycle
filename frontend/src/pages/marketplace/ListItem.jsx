import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function ListItem() {
  const { authFetch } = useAuth();
  const navigate = useNavigate();
  
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Furniture');
  const [listingType, setListingType] = useState('Donate');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('0');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const payload = {
        title,
        description,
        price: listingType === 'Sell' ? parseFloat(price) : 0,
        category,
        isService: false
      };

      const res = await authFetch('/marketplace', {
        method: 'POST',
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        navigate('/marketplace');
      } else {
        const data = await res.json();
        setError(data.message || 'Failed to create listing');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col pb-12 max-w-[1000px] mx-auto w-full space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4 gap-4">
        <div>
          <h1 className="font-display text-display-sm text-primary leading-tight font-bold">List a Resource</h1>
          <p className="font-body-lg text-on-surface-variant mt-2">Give your campus items a second life. Choose between selling or donating.</p>
        </div>
        <div className="hidden md:flex items-center gap-2 bg-surface-container-high p-3 rounded-xl shadow-sm">
          <span className="material-symbols-outlined text-tertiary">eco</span>
          <span className="font-label-sm text-tertiary uppercase tracking-widest font-bold">Sustainable Action</span>
        </div>
      </div>

      {error && (
        <div className="bg-error-container text-on-error-container p-4 rounded-xl font-bold">
          {error}
        </div>
      )}

      {/* Form Bento Grid */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Section 1: Visuals & Item Basics (Column 8) */}
        <div className="lg:col-span-8 flex flex-col gap-gutter">
          {/* Photo Upload */}
          <div className="bg-white rounded-[24px] p-6 md:p-8 border border-outline-variant/30 shadow-sm">
            <label className="font-label-md font-bold text-primary mb-3 block">Upload Item Photos</label>
            <div className="border-2 border-dashed border-outline-variant/60 rounded-xl p-10 flex flex-col items-center justify-center bg-surface-container-lowest hover:bg-surface-container-low transition-colors cursor-pointer group shadow-inner">
              <span className="material-symbols-outlined text-[48px] text-primary mb-4 group-hover:scale-110 transition-transform">add_a_photo</span>
              <p className="font-body-md text-on-surface-variant text-center">Drag and drop images here, or <span className="text-primary font-bold hover:underline">browse files</span></p>
              <p className="font-label-sm text-outline mt-2">PNG, JPG up to 10MB each</p>
            </div>
          </div>
          
          {/* Item Description Bento Card */}
          <div className="bg-white rounded-[24px] p-6 md:p-8 border border-outline-variant/30 shadow-sm flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2 space-y-2">
                <label className="font-label-md font-bold text-primary block" htmlFor="item_name">Item Name</label>
                <input 
                  className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-full px-5 py-3 focus:ring-2 focus:ring-primary focus:border-primary font-body-md text-on-surface outline-none shadow-inner" 
                  id="item_name" 
                  placeholder="e.g. Ergonomic Desk Chair" 
                  type="text"
                  required
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="font-label-md font-bold text-primary block" htmlFor="category">Category</label>
                <div className="relative">
                  <select 
                    className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-full px-5 py-3 focus:ring-2 focus:ring-primary focus:border-primary font-body-md text-on-surface appearance-none outline-none shadow-inner cursor-pointer" 
                    id="category"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                  >
                    <option>Furniture</option>
                    <option>Electronics</option>
                    <option>Lab Equipment</option>
                    <option>Books</option>
                    <option>Office Supplies</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label-md font-bold text-primary block">Listing Type</label>
                <div className="flex p-1 bg-surface-container-lowest rounded-full border border-outline-variant/50 shadow-inner">
                  <button 
                    type="button"
                    onClick={() => setListingType('Donate')}
                    className={`flex-1 py-2 rounded-full font-label-md font-bold transition-all shadow-sm ${listingType === 'Donate' ? 'bg-primary text-white' : 'text-on-surface-variant hover:bg-surface-variant/30'}`}
                  >Donate</button>
                  <button 
                    type="button"
                    onClick={() => setListingType('Sell')}
                    className={`flex-1 py-2 rounded-full font-label-md font-bold transition-all shadow-sm ${listingType === 'Sell' ? 'bg-primary text-white' : 'text-on-surface-variant hover:bg-surface-variant/30'}`}
                  >Sell</button>
                </div>
              </div>
              
              {listingType === 'Sell' && (
                <div className="space-y-2 md:col-span-2">
                  <label className="font-label-md font-bold text-primary block" htmlFor="price">Price ($)</label>
                  <input 
                    className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-full px-5 py-3 focus:ring-2 focus:ring-primary focus:border-primary font-body-md text-on-surface outline-none shadow-inner" 
                    id="price" 
                    placeholder="0.00" 
                    type="number"
                    min="0"
                    step="0.01"
                    required
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                  />
                </div>
              )}
            </div>
            <div className="space-y-2">
              <label className="font-label-md font-bold text-primary block" htmlFor="description">Description</label>
              <textarea 
                className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary focus:border-primary font-body-md text-on-surface outline-none shadow-inner min-h-[120px]" 
                id="description" 
                placeholder="Describe the item's features, dimensions, and any quirks..." 
                rows="4"
                required
                value={description}
                onChange={e => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>

        {/* Section 2: Condition & Location (Column 4) */}
        <div className="lg:col-span-4 flex flex-col gap-gutter">
          {/* Condition Toggles Card */}
          <div className="bg-white/80 backdrop-blur-md rounded-[24px] p-6 border border-outline-variant/30 shadow-sm">
            <label className="font-label-md font-bold text-primary mb-4 block">Item Condition</label>
            <div className="flex flex-col gap-4">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input className="w-5 h-5 mt-0.5 text-primary border-outline-variant focus:ring-primary rounded-full cursor-pointer" name="condition" type="radio" />
                <div className="flex flex-col">
                  <span className="font-label-md font-bold text-on-surface group-hover:text-primary transition-colors">Like New</span>
                  <span className="font-label-sm text-on-surface-variant">Original packaging, no signs of wear.</span>
                </div>
              </label>
              <label className="flex items-start gap-3 cursor-pointer group">
                <input defaultChecked className="w-5 h-5 mt-0.5 text-primary border-outline-variant focus:ring-primary rounded-full cursor-pointer" name="condition" type="radio" />
                <div className="flex flex-col">
                  <span className="font-label-md font-bold text-on-surface group-hover:text-primary transition-colors">Good</span>
                  <span className="font-label-sm text-on-surface-variant">Minor scratches, perfectly functional.</span>
                </div>
              </label>
              <label className="flex items-start gap-3 cursor-pointer group">
                <input className="w-5 h-5 mt-0.5 text-primary border-outline-variant focus:ring-primary rounded-full cursor-pointer" name="condition" type="radio" />
                <div className="flex flex-col">
                  <span className="font-label-md font-bold text-on-surface group-hover:text-primary transition-colors">Fair</span>
                  <span className="font-label-sm text-on-surface-variant">Visible wear, but works as intended.</span>
                </div>
              </label>
            </div>
          </div>
          
          {/* Map Picker Card */}
          <div className="bg-white rounded-[24px] p-6 border border-outline-variant/30 shadow-sm overflow-hidden flex flex-col gap-4">
            <label className="font-label-md font-bold text-primary block">Pickup Location</label>
            <div className="w-full h-48 rounded-xl bg-surface-container relative group cursor-crosshair overflow-hidden shadow-inner">
              <img className="w-full h-full object-cover" data-location="Stanford University Campus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdfoFrKx-PwnTQOiWOHmFZqKkJBH-hdz0NIMYxbSu1H4zPvPXCRWEmqGBDa0lJmV0zPxF-jy3uhPNevF0LU8WyuebaXxNAOdH94dg-kXlw-GOpp27z-BUul1oqnCUY5J-iGddDc6Rj5eojlpnE-Cj217COSh7SJg3degLIToAickQuBjY8XkDkTWr5JaHr7Kz65LlH4g_ayUfJG3oCTv1hQEWwA9hTEUXqHr52FQKj9Ty3TJCZqpW5qUIm_I80tpzYJqGRcviuhaw" />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white text-primary px-3 py-1.5 rounded-full font-label-sm font-bold shadow-md">Click to pin location</span>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="material-symbols-outlined text-error text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              </div>
            </div>
            <p className="font-label-sm text-on-surface-variant font-medium">Main Engineering Quad, Building 520</p>
          </div>
          
          {/* Submit Actions */}
          <div className="mt-auto pt-4 flex flex-col gap-4">
            <button 
              disabled={loading}
              className="bg-primary text-white rounded-full w-full py-3.5 font-bold shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all active:scale-[0.98] disabled:opacity-50" 
              type="submit"
            >
              {loading ? 'Publishing...' : 'Publish Listing'}
            </button>
            <button className="text-on-surface-variant hover:text-primary font-bold text-center transition-colors py-2" type="button">
              Save as Draft
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
