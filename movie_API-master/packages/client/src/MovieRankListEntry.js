import React from 'react';

export default function MovieRankListEntry({ movie, handleCardClick }) {
  const { runtime, rating, title, medium_cover_image, genres } = movie;
  return (
    <div className="card" onClick={() => { handleCardClick(movie) }}>
      <div style={{ flex: 3 }}>
        <img width="100%" height="100%" src={medium_cover_image} alt=''></img>
      </div>
      <div style={{ flex: 7 }}>
        <h3 className="title">{title}</h3>
        <p className="rating">rating : {rating}</p>
        <p className="running-time">running time : {runtime} min</p>
        <p>genres</p>
        <div className="tag-list">
          {genres.map(genre => (
            <div className="tag" key={genre}>{genre}</div>
          ))}
        </div>
      </div>
    </div>
  );
}