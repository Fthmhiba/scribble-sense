import Folder from './Folder';
import './FolderSection.css';

const FolderSection = () => {
  return (
    <section className="folder-section">
      <div className="folder-section-container">
        <div className="folder-section-header">
          <h2 className="folder-section-title">Interactive Folder</h2>
          <p className="folder-section-subtitle">
            Click to open the folder and explore the papers inside
          </p>
        </div>

        <div className="folder-section-content">
          <Folder size={2} color="#e12388" className="custom-folder" />
        </div>
      </div>
    </section>
  );
};

export default FolderSection;

