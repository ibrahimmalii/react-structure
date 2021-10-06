import React from 'react';
import Card from 'react-bootstrap/Card';
import {useEffect} from 'react';


export default function MovieShow({movie}) {

    useEffect(() => {
    },[])

    return (
        <Card className="text-center g-3 col-6 offest-3" style={{width : '100rem'}}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} style={{height : '40rem'}} />
            <Card.Body>
                <Card.Title>{movie.original_title}</Card.Title>
                <Card.Text>
                    {movie.overview}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
