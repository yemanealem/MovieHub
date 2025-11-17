import React from 'react';

export default function WatchlistItem({
  title,
  note,
  rating,
}: {
  title: string;
  note?: string;
  rating?: number;
}) {
  return (
    <div className="watch-item card">
      <div style={{ flex: 1 }}>
        <div className="h2">{title}</div>
        {note && <div className="muted small">{note}</div>}
      </div>
      {rating && (
        <div className="stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className={`star ${i < rating ? 'active' : ''}`} />
          ))}
        </div>
      )}
    </div>
  );
}
