import { useDispatch, useSelector } from 'react-redux';
import { createRandomSong } from '../data';
import { addSong, removeSong } from '../store';


const SongPlaylist = () =>{

    const dispatch = useDispatch();


    const songsList = useSelector((state) =>{
        return state.songs;
    });

    const handleSongAdd = (song) =>{
        dispatch(addSong(song));
    }
    const handleSongRemove = (song) =>{
        dispatch(removeSong(song));
    }

    const renderedSongs = songsList.map((song)=>{
        return (
            <li key={song}>
                {song}
                <button onClick={() => handleSongRemove(song)}>
                    X
                </button>
            </li>
        )
    })


    
    return (
        <div className='content'>
            <div className='table-header'>
                <h3>Song Playlist</h3>
            </div>
            <div className='buttons'>
                <button
                    onClick={(e) => handleSongAdd(createRandomSong())}
                    className='button is-link'
                 >
                    + Add Song to List
                </button>
            </div>
            <ul>
                {renderedSongs}
            </ul>
        </div>
    )
};
export default SongPlaylist;