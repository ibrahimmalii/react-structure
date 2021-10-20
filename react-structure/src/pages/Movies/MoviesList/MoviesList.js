import React from 'react';
import MovieDetailsCard from '../../../components/MovieDetailsCard/MovieDetailsCard';
import { useState, useEffect } from 'react';
// import { axiosInstance } from '../../../components/axios/axiosInstance';
import ChangeLanguage from '../../../components/ChangeLanguage/ChangeLanguage';
import axios from 'axios';

export default function MoviesList() {

    const [MoviesList, setMoviesList] = useState([])

    useEffect(() => {
        axios
        .get('/movie/popular')
            .then(response => {

                // console.log(response.data.results);
                setMoviesList(response.data.results);

            }).catch(console.error);
    }, [])



    return (
        <div className="row">
            <ChangeLanguage />
            {MoviesList.map((movie, index)=> <MovieDetailsCard movie={movie} key={index} />)}
        </div>
    )
}
