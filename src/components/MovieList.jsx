import React from 'react';
import {Movie} from './Movie';

export function MovieList({movies = []}) {
  return (
      <div className="movies">
        {movies.length ? movies.map(el => (
            <Movie key={el.imdbID} {...el}/>
        )) : <h4>Nothing found</h4>}
      </div>
  );
}