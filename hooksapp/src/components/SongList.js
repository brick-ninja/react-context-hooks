import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid'

const SongList = () => {
  const [songs, setSongs] = useState([
    {title: 'almost home', id: 1},
    {title: 'memory gospel', id: 2},
    {title: 'this wild darkness', id: 3},
  ])
  const addSong = () => {
    setSongs([...songs, {title: 'new song', id: uuidv4()}])
  }
  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return (
            <li key={song.id}>{song.title}</li>
          )
        })}
      </ul>
      <button onClick={addSong}>Add a song</button>
    </div>
  );
}
 
export default SongList;