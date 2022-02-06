import React from 'react';
import MovieRankListEntry from './MovieRankListEntry';
export default function MovieRankList({ handleCardClick, movies }) {
  return (
    <div className="right-movie-list">
      {
        movies.length > 0 ? movies.map((el) =>
          (
            <MovieRankListEntry
              handleCardClick={handleCardClick}
              movie={el}
              key={el.id}
            />
          )
        ) : `영화 목록이 비었습니다`}
    </div>
  );
}