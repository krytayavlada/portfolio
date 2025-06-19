import React from 'react';

function Skills() {
  return (
    <section className="skills">
      <h2 className="skills-title">Skills</h2>
      <ul className="skills-list">
        <li className="skills-item">
          <p className="skills-name">HTML</p>
          <div className="skills-strip">
            <div className="common-strip skills-strip-html" style={{ width: '192px' }}></div>
          </div>
        </li>
        <li className="skills-item">
          <p className="skills-name">JavaScript</p>
          <div className="skills-strip">
            <div className="common-strip skills-strip-js" style={{ width: '206px' }}></div>
          </div>
        </li>
        <li className="skills-item">
          <p className="skills-name">CSS</p>
          <div className="skills-strip">
            <div className="common-strip skills-strip-css" style={{ width: '174px' }}></div>
          </div>
        </li>
        <li className="skills-item">
          <p className="skills-name">React</p>
          <div className="skills-strip">
            <div className="common-strip skills-strip-react" style={{ width: '147px' }}></div>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Skills;