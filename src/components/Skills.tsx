import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const skills = [
    {
      category: 'WordPress Core',
      items: [
        { name: 'Custom Theme Development', level: 95 },
        { name: 'Plugin Development', level: 90 },
        { name: 'WordPress REST API', level: 85 },
        { name: 'Gutenberg Blocks', level: 88 },
        { name: 'WooCommerce', level: 92 },
        { name: 'WordPress Multisite', level: 80 },
      ]
    },
    {
      category: 'Tools & Optimization',
      items: [
        { name: 'Elementor', level: 90 },
        { name: 'Performance Optimization', level: 88 },
        { name: 'SEO Best Practices', level: 85 },
        { name: 'Security', level: 87 },
        { name: 'Debugging & Testing', level: 90 },
        { name: 'Local Development', level: 92 },
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Expertise in WordPress development and modern web technologies
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{skillGroup.category}</h3>
              <div className="skill-items">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="certifications">
          <h3 className="certifications-title">Certifications & Learning</h3>
          <div className="cert-badges">
            <div className="cert-badge">
              <div className="cert-icon">🎓</div>
              <p>WordPress Certified Developer</p>
            </div>
            <div className="cert-badge">
              <div className="cert-icon">⚡</div>
              <p>Performance Optimization Expert</p>
            </div>
            <div className="cert-badge">
              <div className="cert-icon">🔒</div>
              <p>Security Best Practices</p>
            </div>
            <div className="cert-badge">
              <div className="cert-icon">🎨</div>
              <p>UI/UX Design Principles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

