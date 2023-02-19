import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import MovieDetails from '@/components/MovieDetails';
import Error from 'next/error';
import PageHeader from '@/components/PageHeader';

export default function Movie() {
  const router = useRouter();
  const { title } = router.query;
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}https://fair-teal-eel-hose.cyclic.app/api/movies?page=1&perPage=10&title=${title}`);

  if (!data) {
    return null;
  }

  if (error) {
    return <Error statusCode={500} title={error.message} />;
  }

  if (data.length === 0) {
    return <Error statusCode={404} />;
  }

  return (
    <div>
      {data.map((movie) => (
        <div key={movie._id}>
          <PageHeader title={movie.title} />
          <MovieDetails movie={movie} />
        </div>
      ))}
    </div>
  );
}
