import React from 'react';
import { createKeywordGenerator } from '@assets/utils';
import Genre from './genre';
import genres from './genres.json';
import '../../styles/genres.scss';

/**
 * A section of home page which goes after Collage. Contains information
 * about photographer's genres of work.
 * @component
 */
const Genres = () => {
  const generator = createKeywordGenerator();
  return (
    <div className="genres">
      {genres.map(genre => (
        <Genre key={Math.random()} {...genre} alt={generator.next().value} />
      ))}
    </div>
  );
};

export default Genres;
