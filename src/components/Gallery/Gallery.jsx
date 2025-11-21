import InfiniteMenu from '../image-gallery/InfiniteMenu';
import './Gallery.css';
import app from '/appimgs/app.jpg';
import applogo from '/appimgs/applogo.jpg';
import appimg3 from '/appimgs/appimg3.jpg';
import appimg4 from '/appimgs/appimg4.jpg';
import appimg5 from '/appimgs/appimg5.jpg';
import appimg6 from '/appimgs/appimg6.jpg';
import app7 from '/appimgs/app7.jpeg';
import app8 from '/appimgs/app8.jpeg';
import app9 from '/appimgs/app9.jpeg';
import app10 from '/appimgs/app10.jpeg';
import app11 from '/appimgs/app11.jpeg';
import app12 from '/appimgs/app12.jpeg';
import app13 from '/appimgs/app13.jpeg';
import app14 from '/appimgs/app14.jpeg';
import app15 from '/appimgs/app15.jpeg';
import app16 from '/appimgs/app16.jpeg';
import app17 from '/appimgs/app17.jpeg';



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
    },
    {
      image: app7,
      link: 'https://play.google.com/store/apps/details?id=com.scribblesense.app',
      title: 'Item 7',
      description: 'This is pretty cool, right?'
    },
    {
      image: app8,
      link: 'https://play.google.com/store/apps/details?id=com.scribblesense.app',
      title: 'Item 8',
      description: 'This is pretty cool, right?'
    },
    {
      image: app9,
      link: 'https://play.google.com/store/apps/details?id=com.scribblesense.app',
      title: 'Item 9',
      description: 'This is pretty cool, right?'
    },
    {
      image: app10,
      link: 'https://play.google.com/store/apps/details?id=com.scribblesense.app',
      title: 'Item 10',
      description: 'This is pretty cool, right?'
    },
    {
      image: app11,
      link: 'https://play.google.com/store/apps/details?id=com.scribblesense.app',
      title: 'Item 11',
      description: 'This is pretty cool, right?'
    },
    {
      image: app12,
      link: 'https://play.google.com/store/apps/details?id=com.scribblesense.app',
      title: 'Item 12',
      description: 'This is pretty cool, right?'
    },
    {
      image: app13,
      link: 'https://play.google.com/store/apps/details?id=com.scribblesense.app',
      title: 'Item 13',
      description: 'This is pretty cool, right?'
    },
    {
      image: app14,
      link: 'https://play.google.com/store/apps/details?id=com.scribblesense.app',
      title: 'Item 14',
      description: 'This is pretty cool, right?'
    },
    {
      image: app15,
      link: 'https://play.google.com/store/apps/details?id=com.scribblesense.app',
      title: 'Item 15',
      description: 'This is pretty cool, right?'
    },
    {
      image: app16,
      link: 'https://play.google.com/store/apps/details?id=com.scribblesense.app',
      title: 'Item 16',
      description: 'This is pretty cool, right?'
    },
    {
      image: app17,
      link: 'https://play.google.com/store/apps/details?id=com.scribblesense.app',
      title: 'Item 17',
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

