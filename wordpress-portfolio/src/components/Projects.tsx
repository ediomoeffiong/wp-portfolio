import React, { useState } from 'react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  images: string[];
  link: string;
  technologies: string[];
  features: string[];
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [currentSlides, setCurrentSlides] = useState<{ [key: number]: number }>({});
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Placeholder images - you'll replace these with your actual uploaded images
  const projects: Project[] = [
    {
      id: 1,
      title: 'AIBI Africa - Innovation Platform',
      category: 'theme',
      description: 'A cutting-edge WordPress theme for AIBI Africa showcasing innovation and technology solutions across the continent.',
      images: [
        './src/assets/projects/aibiafrica.png',
        './src/assets/projects/aibiafrica.png',
        './src/assets/projects/aibiafrica.png'
      ],
      link: 'https://aibiafrica.com',
      technologies: ['WordPress', 'Custom Theme', 'PHP', 'JavaScript'],
      features: ['Responsive Design', 'Custom Animations', 'Performance Optimized', 'SEO Ready']
    },
    {
      id: 2,
      title: 'BluCube Tech Services',
      category: 'theme',
      description: 'Professional corporate WordPress theme for BluCube showcasing technology services and solutions.',
      images: [
        './src/assets/projects/blucube.png',
        './src/assets/projects/blucube.png',
        './src/assets/projects/blucube.png'
      ],
      link: 'https://blucube.com',
      technologies: ['WordPress', 'Gutenberg', 'ACF', 'Custom CSS'],
      features: ['Custom Blocks', 'Service Pages', 'Contact Integration', 'Fast Loading']
    },
    {
      id: 3,
      title: 'Amrusad E-Commerce',
      category: 'woocommerce',
      description: 'Full-featured WooCommerce marketplace with advanced filtering, wishlist, and multi-category support.',
      images: [
        './src/assets/projects/amrusad.png',
        './src/assets/projects/amrusad.png',
        './src/assets/projects/amrusad.png'
      ],
      link: 'https://amrusad.com',
      technologies: ['WooCommerce', 'PHP', 'JavaScript', 'MySQL'],
      features: ['Product Filtering', 'Wishlist', 'Custom Checkout', 'Mobile Optimized']
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  const nextSlide = (projectId: number, totalImages: number) => {
    setCurrentSlides(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages
    }));
  };

  const prevSlide = (projectId: number, totalImages: number) => {
    setCurrentSlides(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const goToSlide = (projectId: number, slideIndex: number) => {
    setCurrentSlides(prev => ({
      ...prev,
      [projectId]: slideIndex
    }));
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Showcasing my best WordPress development work
          </p>
        </div>

        <div className="filter-buttons">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'theme' ? 'active' : ''}`}
            onClick={() => setFilter('theme')}
          >
            Themes
          </button>
          <button 
            className={`filter-btn ${filter === 'plugin' ? 'active' : ''}`}
            onClick={() => setFilter('plugin')}
          >
            Plugins
          </button>
          <button 
            className={`filter-btn ${filter === 'woocommerce' ? 'active' : ''}`}
            onClick={() => setFilter('woocommerce')}
          >
            WooCommerce
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => {
            const currentSlide = currentSlides[project.id] || 0;

            return (
              <div
                key={project.id}
                className="project-card"
                onClick={() => openModal(project)}
                style={{ cursor: 'pointer' }}
              >
                <div className="project-image-slider">
                  {/* Slider Images */}
                  <div className="slider-container">
                    {project.images.map((image, index) => (
                      <div
                        key={index}
                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${image})` }}
                      />
                    ))}
                  </div>

                  {/* Preview Badge */}
                  <div className="preview-badge">
                    Click to view full gallery
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-features">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="feature-item">
                        <span className="feature-icon">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal/Lightbox */}
        {selectedProject && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal} aria-label="Close modal">
                ×
              </button>

              <div className="modal-body">
                {/* Large Slider */}
                <div className="modal-slider">
                  <div className="modal-slider-container">
                    {selectedProject.images.map((image, index) => (
                      <div
                        key={index}
                        className={`modal-slide ${index === (currentSlides[selectedProject.id] || 0) ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${image})` }}
                      />
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        className="modal-slider-arrow prev"
                        onClick={() => prevSlide(selectedProject.id, selectedProject.images.length)}
                        aria-label="Previous image"
                      >
                        ‹
                      </button>
                      <button
                        className="modal-slider-arrow next"
                        onClick={() => nextSlide(selectedProject.id, selectedProject.images.length)}
                        aria-label="Next image"
                      >
                        ›
                      </button>
                    </>
                  )}

                  {/* Dots Indicator */}
                  {selectedProject.images.length > 1 && (
                    <div className="modal-slider-dots">
                      {selectedProject.images.map((_, index) => (
                        <button
                          key={index}
                          className={`modal-dot ${index === (currentSlides[selectedProject.id] || 0) ? 'active' : ''}`}
                          onClick={() => goToSlide(selectedProject.id, index)}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="modal-details">
                  <h2 className="modal-title">{selectedProject.title}</h2>
                  <p className="modal-description">{selectedProject.description}</p>

                  <div className="modal-technologies">
                    <h4>Technologies Used:</h4>
                    <div className="tech-tags-wrapper">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="modal-tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="modal-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={selectedProject.link}
                    className="modal-visit-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Live Site →
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

