import FallingText from './FallingText';
import './FallingTextSection.css';

const FallingTextSection = () => {
  return (
    <section className="falling-text-section">
      <div className="falling-text-section-container">
        <FallingText
          text={`Your ideas are important - let's make writing easier!`}
          highlightWords={["your", "ideas", "important", "let's", "writing", "easier"]}
          highlightClass="highlighted"
          trigger="hover"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.56}
          fontSize="2rem"
          mouseConstraintStiffness={0.9}
        />
      </div>
    </section>
  );
};

export default FallingTextSection;

