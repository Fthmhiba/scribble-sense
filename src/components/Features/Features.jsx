import SpotlightCard from '../SpotlightCard';
import './Features.css';

const Features = () => {
  const features = [
    {
      title: 'Empowerment',
      description: 'We empower families and children with the tools, resources, and knowledge needed to confidently navigate the complexities of dysgraphia. Our support helps build a strong foundation for success through understanding and effective strategies.',
      spotlightColor: 'rgba(225, 35, 136, 0.2)'
    },
    {
      title: 'Our Focus',
      description: 'We address handwriting challenges and difficulties related to dysgraphia through tailored exercises. Our program helps children improve letter formation, spacing, and legibility, while also supporting the development of fine motor skills, visual processing, and coordination.',
      spotlightColor: 'rgba(225, 35, 136, 0.2)'
    },
    {
      title: 'Innovative Solutions',
      description: 'ScribbleSense leads the way in innovative approaches to dysgraphia, offering personalized strategies to meet each child\'s unique needs. Our methods foster growth, build confidence, and help children conquer obstacles with ease.',
      spotlightColor: 'rgba(225, 35, 136, 0.2)'
    },
    {
      title: 'Comprehensive Support',
      description: 'From assessments to interventions and educational resources, we provide a full spectrum of dysgraphia support. Parents and educators receive tailored guidance, ensuring each child\'s path to success is clear and well-supported.',
      spotlightColor: 'rgba(225, 35, 136, 0.2)'
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">Why Choose ScribbleSense</h2>
          <p className="features-subtitle">
            Comprehensive support for children with dysgraphia, empowering them to overcome challenges and thrive
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <SpotlightCard
              key={index}
              className="feature-card"
              spotlightColor={feature.spotlightColor}
            >
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

