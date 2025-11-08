import InfiniteMenu from '../image-gallery/InfiniteMenu';
import './Gallery.css';
import app from '/appimgs/app.jpg';
import applogo from '/appimgs/applogo.jpg';
import appimg3 from '/appimgs/appimg3.jpg';
import appimg4 from '/appimgs/appimg4.jpg';
import appimg5 from '/appimgs/appimg5.jpg';
import appimg6 from '/appimgs/appimg6.jpg';



const Gallery = () => {
  const items = [
    {
      image: app,
      link: 'https://play.google.com/store/apps/details?id=com.scribblesense.app',
      title: 'Item 1',
      description: 'This is pretty cool, right?'
    },
    {
      image: applogo,
      link: 'https://play.google.com/store/apps/details?id=com.scribblesense.app',
      title: 'Item 2',
      description: 'This is pretty cool, right?'
    },
    {
      image:  appimg3,
      link: 'https://play.google.com/store/apps/details?id=com.scribblesense.app',
      title: 'Item 3',
      description: 'This is pretty cool, right?'
    },
    {
      image: appimg4,
      link: 'https://play.google.com/store/apps/details?id=com.scribblesense.app',
      title: 'Item 4',
      description: 'This is pretty cool, right?'
    },
    {
      image: appimg5,
      link: 'https://play.google.com/store/apps/details?id=com.scribblesense.app',
      title: 'Item 5',
      description: 'This is pretty cool, right?'
    },
    {
      image: appimg6,
      link: 'https://play.google.com/store/apps/details?id=com.scribblesense.app',
      title: 'Item 6',
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

