import React from 'react'

const categories = [
  { name: 'Campus & Architecture', img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80' },
  { name: 'Cultural Events', img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80' },
  { name: 'Technical Festivals', img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&q=80' },
  { name: 'Sports Day', img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80' },
  { name: 'Convocation', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80' },
  { name: 'Lab & Research', img: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=600&q=80' }
]

const PhotoGalleryPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-primary">Photo Gallery</h2>
        <p className="text-sm text-slate-500 mt-1 font-sans font-medium">Glimpses of SGSITS campus life</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map(cat => (
          <div key={cat.name} className="bg-white rounded overflow-hidden border border-slate-200 shadow-sm hover:border-slate-400 transition-colors duration-200 group cursor-pointer">
            <div className="h-48 bg-slate-50 overflow-hidden relative border-b border-slate-100">
              <img 
                src={cat.img} 
                alt={cat.name} 
                className="w-full h-full object-cover filter saturate-[0.8] opacity-95 group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-all duration-300"></div>
            </div>
            <div className="p-4 bg-white">
              <h3 className="font-sans font-bold text-sm text-slate-800 group-hover:text-primary transition-colors">{cat.name}</h3>
              <p className="text-xs text-slate-450 font-medium font-sans mt-1.5 flex items-center gap-1">
                <span>View album photos</span>
                <span className="group-hover:translate-x-0.5 transition-transform duration-200">&rarr;</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PhotoGalleryPage
