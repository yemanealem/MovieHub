import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import WatchlistItem from '../components/WatchlistItem';

export default function Watchlist() {
  const [watchlist] = useLocalStorage<any[]>('watchlist', []);

  return (
    <div className="container stack">
      <h1 className="h1">My Watchlist</h1>
      {watchlist.length === 0 && <p className="lead">No movies added yet.</p>}
      <div className="stack">
        {watchlist.map((movie) => (
          <WatchlistItem
            key={movie.imdbID}
            title={movie.Title}
            rating={0}
            note=""
          />
        ))}
      </div>
    </div>
  );
}
