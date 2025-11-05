import InfiniteMenu from '../image-gallery/InfiniteMenu';
import './Gallery.css';

const Gallery = () => {
  const items = [
    {
      image: 'https://picsum.photos/300/300?grayscale',
      link: 'https://google.com/',
      title: 'Item 1',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://picsum.photos/400/400?grayscale',
      link: 'https://google.com/',
      title: 'Item 2',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://picsum.photos/500/500?grayscale',
      link: 'https://google.com/',
      title: 'Item 3',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://picsum.photos/600/600?grayscale',
      link: 'https://google.com/',
      title: 'Item 4',
      description: 'This is pretty cool, right?'
    }
  ];

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="gallery-title">Our Gallery</h2>
          <p className="gallery-subtitle">
            Explore our interactive 3D gallery - drag to rotate and discover
          </p>
        </div>

        <div className="gallery-content">
          <InfiniteMenu items={items} />
        </div>
      </div>
    </section>
  );
};

export default Gallery;

