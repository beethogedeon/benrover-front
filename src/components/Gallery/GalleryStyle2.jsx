import React from 'react';
import ModalImage from 'react-modal-image';
const galleryData = [
  {
    src: '/images/Gallery/1.webp',
    srcLg: '/images/Gallery/1.webp',
  },
  {
    src: '/images/Gallery/2.webp',
    srcLg: '/images/Gallery/2.webp',
  },
  {
    src: '/images/Gallery/3.webp',
    srcLg: '/images/Gallery/3.webp',
  },
];

export default function GalleryStyle2() {
  return (
    <div className="cs-grid_gallery_5 cs-lightgallery">
      {galleryData?.map((item, index) => (
        <div className="cs-grid_gallery_item" key={index}>
          <div className="cs-portfolio cs-style1 cs-lightbox_item cs-type2 rounded-0">
            <div className="cs-portfolio_hover" />
            <span className="cs-plus" />
            <div
              className="cs-portfolio_bg cs-bg"
              style={{ backgroundImage: `url("${item.src}")` }}
            >
              <ModalImage small={item.src} large={item.srcLg} alt="Gallery" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
