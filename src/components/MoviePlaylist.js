import { createRandomMove } from '../data';
import { useDispatch, useSelector} from "react-redux";
import { addMovie, removeMovie } from '../store/slices/moviesSlice';

const MoviePlaylist = () =>{
    const dispatch = useDispatch();

    const moviePlaylist = useSelector((state) =>{
        return state.movies;
    });

    const handleMoveAdd = (movie) =>{
        dispatch(addMovie(movie));
    }
    const handleMoveRemove = (movie) =>{
        dispatch(removeMovie(movie));
    }


    const renderedMoves = moviePlaylist.map((movie)=>{
        return (
            <li key={movie}>
                {movie}
                <button onClick={() => handleMoveRemove(movie)}>X</button>
            </li>
        )
    })

    return (
        <div className='content'>
            <div className='table-header'>
                <h3>Movie Playlist</h3>
            </div>
            <div className='buttons'>
                <button 
                    onClick={() => handleMoveAdd(createRandomMove())}
                    className='button is-link'>
                        + Add Move to list
                </button>
            </div>
            <ul>
                {renderedMoves}
            </ul>
        </div>
    )
};
export default MoviePlaylist;