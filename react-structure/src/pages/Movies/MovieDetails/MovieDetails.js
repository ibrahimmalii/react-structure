import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import MovieShow from '../../../components/MovieShow/MovieShow';
import { axiosInstance } from '../../../components/axios/axiosInstance';

export default function MovieDetails(props) {

    const [movieDetails, setMovieDetails] = useState({});
    const params = useParams();
    const { id } = params;

    useEffect(() => {
        axiosInstance
        .get(`https://api.themoviedb.org/3/movie/${id}`)
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
