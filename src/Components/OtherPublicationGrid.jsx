import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import '../Styles/OtherPublicationGrid.css';


const publications = [
  {
    title:
      'A benchmark JWST near-infrared spectrum for the exoplanet WASP-39 b',
    authors:
      'Carter, A.L., May, E.M., Espinoza, N., Welbanks, L. .... Zhang. X. (2024)',
    type: 'Nature Astronomy',
    link: 'https://www.nature.com/articles/s41550-024-02292-x',
  },
 {
    title: 'Nightside clouds and disequilibrium chemistry on the hot Jupiter WASP-43b',
    authors: 'Bell, T.J., Crouzet, N., Cubillos, P., Kreidberg, L., Piette, A. A. A.... Zieba, S. (2024)',
    type: 'Nature Astronomy',
    link: 'https://www.nature.com/articles/s41550-024-02230-x',
  },
  {
    title: 'Sulphur dioxide in the mid-infrared transmission spectrum of WASP-39b',
    authors: 'Powell, D., Feinstein, A., Lee, E., Zhang, M., Tsai, S., Taylor, J., ... Yurchenko, S. (2024)',
    type: 'Nature',
    link: 'https://www.nature.com/articles/s41586-024-07040-9',
  },
  {
    title: 'Improving Multi-Dimensional Data Formats, Access, and Assimilation Tools for the Twenty-First Century',
    authors: 'Seaton, D., Caspi, A., Casini, R., Downs, C., Gibson, S., Gilbert, H., ... White, S. (2023)',
    type: 'Bulletin of the AAS',
    link: 'https://baas.aas.org/pub/2023n3i361/release/1',
  },
  {
    title: 'COMPLETE: a flagship mission for complete understanding of 3D coronal magnetic energy release',
    authors: 'Caspi, A., Seaton, D., Casini, R., Downs, C., Gibson, S., Gilbert, H., ... Zimovets, I. V. (2023)',
    type: 'Bulletin of the AAS',
    link: 'https://baas.aas.org/pub/2023n3i048/release/1',
  },
  {
    title: 'Magnetic Energy Powers the Corona: How We Can Understand its 3D Storage & Release',
    authors: 'Caspi, A., Seaton, D., Casini, R., Downs, C., Gibson, S., Gilbert, H., ... Zimovets, I. V. (2023)',
    type: 'Bulletin of the AAS',
    link: 'https://baas.aas.org/pub/2023n3i049/release/1',
  },
  {
    title: 'Photochemically produced SO2 in the atmosphere of WASP-39b',
    authors: 'Tsai, S., Lee, E., Powell, D., Gao, P., Zhang, X., Moses, J., ... Yurchenko, S. (2023)',
    type: 'Nature',
    link: 'https://www.nature.com/articles/s41586-023-05902-2',
  },
  {
    title: 'Detection of Carbon Monoxide’s 4.6 Micron Fundamental Band Structure in WASP-39b’s Atmosphere with JWST NIRSpec G395H',
    authors: 'Grant, D., Lothringer, J. D., Wakeford, H. R., et al. (2023)',
    type: 'Astrophysical Journal Letters',
    link: 'https://iopscience.iop.org/article/10.3847/2041-8213/acd544',
  },
  {
    title: 'A broadband thermal emission spectrum of the ultra-hot Jupiter WASP-18b',
    authors: 'Coulombe, L.-P., Benneke, B., Challener, R., Piette, A., Wiser, L., Mansfield, M., ... Yurchenko, S. (2023)',
    type: 'Nature',
    link: 'https://www.nature.com/articles/s41586-023-06230-1',
  },
  {
    title: 'Identification of carbon dioxide in an exoplanet atmosphere',
    authors: 'Ahrer, E., Alderson, L., Batalha, N., Bean, J., Beatty, T., Bell, T., ... Zhang, X. (2023)',
    type: 'Nature',
    link: 'https://www.nature.com/articles/s41586-022-05269-w',
  },
  {
    title: 'Early Release Science of the exoplanet WASP-39b with JWST NIRSpec PRISM',
    authors: 'Rustamkulov, Z., Sing, D., Mukherjee, S., May, E., Kirk, J., Schlawin, E., ... Zhang, X. (2023)',
    type: 'Nature',
    link: 'https://www.nature.com/articles/s41586-022-05677-y',
  },
  {
    title: 'Early Release Science of the exoplanet WASP-39b with JWST NIRSpec G395H',
    authors: 'Alderson, L., Wakeford, H., Alam, M., Batalha, N., Lothringer, J., Redai, J., ... Zhang, X. (2023)',
    type: 'Nature',
    link: 'https://www.nature.com/articles/s41586-022-05591-3',
  },
];

const OtherPublicationGrid = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShow = () => setShowAll((prev) => !prev);

  const visiblePublications = showAll ? publications : publications.slice(0, 3); // 2 rows * 3 cols

  return (
    <div className="publications-container">
      <h2 className="opub">Other Publications</h2>
      <div className="publications-grid">
        {visiblePublications.map((pub, index) => (
          <div key={index} className="pub-card">
            <h3 className="pub-title">{pub.title}</h3>
            <p><strong>Authors:</strong> {pub.authors}</p>
            <p><strong>Type:</strong> {pub.type}</p>
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="pub-link"
            >
              View Publication
            </a>
          </div>
        ))}
      </div>
      <div className="show-more-container">
        {showAll ? (
          <button className="show-more-button" onClick={toggleShow}>
            Show Less
          </button>
        ) : (
          <Link to="/publications/other-publications" className="show-more-button">
            Show More
          </Link>
        )}
      </div>
    </div>
  );
};

export default OtherPublicationGrid;