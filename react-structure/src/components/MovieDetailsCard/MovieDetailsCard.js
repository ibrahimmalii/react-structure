import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export default function MovieDetailsCard({ movie }) {

    const { title, overview, id } = movie;
    return (
        <Card className="text-center g-3 col-4">
            <Link to={`/details/${id}`}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            </Link>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {overview}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
