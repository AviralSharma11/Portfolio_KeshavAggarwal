import React from 'react';
import '../Styles/PublicationBoxes.css';

const publications = [
  {
    title:
      'RO_SPICE',
    journal: 'Script to derive RO geometries with ease.',
    link: 'https://github.com/jovian-explorer/RO-SPICE',
  },
  {
    title: 'Akatsuki_open',
    journal: 'Script to pre-process multi-level Akatsuki opensource data with ease.',
    link: 'https://github.com/jovian-explorer/Akatsuki_open',
  },
];

const OpenSourceCode = () => {
  return (
    <><h2 className='work'>Open Source Codes</h2>
    <div className="publication-box-container">
      {publications.map((pub, index) => (
        <div key={index} className="publication-box">
          <h3 className="pub-title">{pub.title}</h3>
          <p className="pub-journal"><strong>Journal:</strong> {pub.journal}</p>
          <a href={pub.link} target="_blank" rel="noopener noreferrer" className="pub-link">
            View Publication
          </a>
        </div>
      ))}
    </div>
    </>
  );
};

export default OpenSourceCode;
