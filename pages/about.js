import React from 'react';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import MovieDetails from '@/components/MovieDetails';
import PageHeader from '@/components/PageHeader';

export default function About({ movie }) {
    return (
        <>
            <PageHeader text="About the Developer" />
            <Card className="bg-light">
                <Card.Body>
                    <p>Hi there! My name is Giuseppe Cosentino and I am a SWE based in Toronto, Ont, Canada. I am passionate about programming and I love to spend my free time building websites.</p>
                    <p>One of my favorite movies is {movie.title}. It was released in {movie.year}. If you haven't seen it yet, I highly recommend checking it out!</p>
                </Card.Body>
                <MovieDetails movie={movie} />
            </Card>
        </>
    );
}

export async function getStaticProps() {
    const res = await fetch('https://fair-teal-eel-hose.cyclic.app/api/movies/573a139bf29313caabcf3d23');
    const movie = await res.json();

    return {
        props: {
            movie,
        },
    };
}
