import React from 'react';

// Note: Make sure to include Bootstrap CSS in your project
// You can add this to your index.html:
// <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

const galleryItems = [
  { id: 1, src: '/images/Gallery/1.webp', alt: 'Image 1', title: 'Beautiful Landscape', description: 'A serene view of nature at its finest' },
  { id: 2, src: '/images/Gallery/2.webp', alt: 'Image 2', title: 'Urban Architecture' },
  { id: 3, src: '/images/Gallery/3.webp', alt: 'Image 3', title: 'Cute Animal', description: 'An adorable creature from the wild' },
  { id: 4, src: '/images/Gallery/4.webp', alt: 'Image 4', title: 'Abstract Art' },
  { id: 5, src: '/images/Gallery/5.webp', alt: 'Image 5', title: 'Interesting Object', description: 'A curious item with a story to tell' },
  { id: 6, src: '/images/Gallery/6.webp', alt: 'Image 6', title: 'Night Sky' },
];

const GalleryItem = ({ src, alt, title, description }) => (
  <div className="col-sm-6 col-lg-4 mb-4">
    <div className="card h-100 shadow-sm bg-dark">
      <img src={src} alt={alt} className="card-img-top" style={{height: '200px', objectFit: 'cover'}} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-light">{title}</h5>
        {description && <p className="card-text flex-grow-1 text-light">{description}</p>}
        <button className="btn btn-outline-primary mt-auto">View Details</button>
      </div>
    </div>
  </div>
);

const Gallery = () => {
  return (
    <div className="container py-2">
      <div className="row">
        {galleryItems.map((item) => (
          <GalleryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;