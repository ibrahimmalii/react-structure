import React from 'react';
import axios from 'axios';
import MovieDetailsCard from '../../../components/MovieDetailsCard/MovieDetailsCard';
import { useState, useEffect } from 'react';

export default function MoviesList() {

    const [MoviesList, setMoviesList] = useState([])

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c')
            .then(response => {

                // console.log(response.data.results);
                setMoviesList(response.data.results);

            }).catch(console.error);
    }, [])



    return (
        <div className="row">
            {MoviesList.map((movie, index)=> <MovieDetailsCard movie={movie} key={index} />)}
        </div>
    )
}
