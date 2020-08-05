import React from 'react';
import conditions from './conditions.json';

const Conditions = () => (
  <>
    {conditions.map(cond => (
      <div className="conditions container" key={Math.random()}>
        <h3 className="conditions__title">{cond.title}</h3>
        {cond.paragraphs.map(p => (
          <p className="conditions__text" key={Math.random()}>
            {p}
          </p>
        ))}
      </div>
    ))}
  </>
);

export default Conditions;
