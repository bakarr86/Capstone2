import { useState } from 'react';
import axios from 'axios';

function MusicSearch() {
  const [query, setQuery] = useState('');
  const [tracks, setTracks] = useState([]);

  const searchTracks = async () => {
    try {
      const response = await axios.get(`/api/music/search?query=${query}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setTracks(response.data);
    } catch (error) {
      console.error('Search error:', error);
    }
  };

  const saveTrack = async (track) => {
    try {
      await axios.post('/api/music/tracks', {
        spotifyId: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        imageUrl: track.album.images[0].url
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      alert('Track saved successfully');
    } catch (error) {
      console.error('Save error:', error);
    }
  };

  return (
    <div>
      <h2>Search Music</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for tracks"
      />
      <button onClick={searchTracks}>Search</button>
      <ul>
        {tracks.map(track => (
          <li key={track.id}>
            {track.name} by {track.artists[0].name}
            <button onClick={() => saveTrack(track)}>Save</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MusicSearch;