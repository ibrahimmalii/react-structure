import React from 'react';
import axios from 'axios';
import MovieDetailsCard from '../../../components/MovieDetailsCard/MovieDetailsCard';
import { useState, useEffect } from 'react';
import { axiosInstance } from '../../../components/axios/axiosInstance';

export default function MoviesList() {

    const [MoviesList, setMoviesList] = useState([])

    useEffect(() => {
        axiosInstance
        .get('/movie/popular')
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
