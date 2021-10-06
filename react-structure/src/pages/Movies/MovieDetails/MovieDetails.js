import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import MovieShow from '../../../components/MovieShow/MovieShow';

export default function MovieDetails(props) {

    const [movieDetails, setMovieDetails] = useState({});
    const params = useParams();
    const { id } = params;

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}`,
            { params: { api_key: '7a1c19ea3c361a4d3cc53eb70ef8298c' } }, { headers: {} })
            .then(response => {
                setMovieDetails(response.data);
            }).catch(console.error);
    }, [])

    return (
        <div className="row">
            <MovieShow movie={movieDetails} />
        </div>
    )
}
