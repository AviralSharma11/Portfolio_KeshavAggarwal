import React from 'react';
import '../Styles/PublicationBoxes.css';

const publications = [
  {
    title:
      'Insights into Solar Wind Flow Speeds from the Coronal Radio Occultation Experiment: Findings from the Indian Mars Orbiter Mission',
    authors:
      'Aggarwal, K., Choudhary, R. K., Datta, A., Roopa, M. V., Dai, B. K.',
    journal: 'Astrophysical Journal',
    link: 'https://iopscience.iop.org/article/10.3847/1538-4357/adb627',
  },
  {
    title: 'Probing the Solar Wind using the Akatsuki Radio Occultation Experiment',
    authors: 'Aggarwal, K., Choudhary, R. K., Datta, A., Imamura T.',
    journal: 'Submitted to MNRAS',
    link: '/',
  },
];

const PublicationBoxes = () => {
  return (
    <><h2 className='work'>Publications</h2>
    <div className="publication-box-container" id='works'>
      {publications.map((pub, index) => (
        <div key={index} className="publication-box">
          <h3 className="pub-title">{pub.title}</h3>
          <p className="pub-authors"><strong>Authors:</strong> {pub.authors}</p>
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

export default PublicationBoxes;
