import Threads from '../Threads';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-background">
        <Threads
          amplitude={1}
          distance={0}
          color={[1, 0.0784, 0.5765]}
          enableMouseInteraction={true}
        />
      </div>
      <div className="header-content">
        <h1 className="header-title">Welcome to ScribbleSense</h1>
        <p className="header-subtitle">
          At ScribbleSense, we’re dedicated to transforming the lives of children with Learning Differences. Our mission is to offer the support and resources they need to excel both academically and personally. We’re here to empower every child with the tools and confidence to thrive, making their journey smoother and brighter. Let’s unlock their full potential together!
        </p>
        <div className="header-cta">
          <button className="cta-button primary">Get Started</button>
          <button className="cta-button secondary">Learn More</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
