import { useState, useEffect } from 'react';
import axios from 'axios';

function SavedTracks() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchSavedTracks();
  }, []);

  const fetchSavedTracks = async () => {
    try {
      const response = await axios.get('/api/music/tracks', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setTracks(response.data);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch saved tracks');
      setLoading(false);
      console.log(error)
    }
  };

  const deleteTrack = async (trackId) => {
    try {
      await axios.delete(`/api/music/tracks/${trackId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setTracks(tracks.filter(track => track._id !== trackId));
    } catch (error) {
      setError('Failed to delete track');
      console.log(error)
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="saved-tracks-container">
      <h2>Your Saved Tracks</h2>
      {tracks.length === 0 ? (
        <p>You haven&apos;t saved any tracks yet.</p>
      ) : (
        <ul className="track-list">
          {tracks.map(track => (
            <li key={track._id} className="track-item">
              <img src={track.imageUrl} alt={track.name} className="track-image" />
              <div className="track-info">
                <h3>{track.name}</h3>
                <p>{track.artist}</p>
                <p>{track.album}</p>
              </div>
              <button 
                onClick={() => deleteTrack(track._id)} 
                className="btn-delete"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SavedTracks;