import CardNav from './components/CardNav'
import Header from './components/Header/Header'
import Features from './components/Features/Features'
import Gallery from './components/Gallery/Gallery'
import FallingTextSection from './components/FallingText/FallingTextSection'
import FolderSection from './components/Folder/FolderSection'
import SplashCursor from './components/SplashCursor/SplashCursor'
import logo from '/logo.png';
import './App.css'

const App = () => {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company", href: "#company" },
        { label: "Careers", ariaLabel: "About Careers", href: "#careers" }
      ]
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects", href: "#featured" },
        { label: "Case Studies", ariaLabel: "Project Case Studies", href: "#case-studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us", href: "#email" },
        { label: "Twitter", ariaLabel: "Twitter", href: "#twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "#linkedin" }
      ]
    }
  ];

  return (
    <div className="app">
      <SplashCursor />

      <CardNav
        logo={logo}
        logoAlt="ScribbleSense Logo"
        items={items}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
      />

      {/* Main Header with Threads Animation */}
      <Header />

      {/* Features Section */}
      <Features />

      {/* Gallery Section */}
      <Gallery />

      {/* Falling Text Section */}
      <FallingTextSection />

      {/* Folder Section */}
      <FolderSection />

      {/* Additional Sections */}

    </div>
  );
};

export default App;

