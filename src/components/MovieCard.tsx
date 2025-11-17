import React from 'react';

type Props = {
  title: string;
  year?: string;
  poster?: string | null;
  onAdd?: () => void;
};

export default function MovieCard({ title, year, poster, onAdd }: Props) {
  return (
    <article className="movie-card card">
      {poster && poster !== 'N/A' ? (
        <img src={poster} alt={title} className="movie-card__poster" />
      ) : (
        <div className="poster-fallback">No Image</div>
      )}
      <div className="movie-card__body">
        <h3 className="movie-card__title">{title}</h3>
        <div className="movie-card__meta">{year}</div>
        {onAdd && (
          <div className="controls" style={{ marginTop: 8 }}>
            <button className="btn" onClick={onAdd}>
              Add to Watchlist
            </button>
          </div>
        )}
      </div>
    </article>
  );
}
