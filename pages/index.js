import { React, useState, useEffect } from 'react';
import useSWR from 'swr'
import { Pagination, Accordion } from 'react-bootstrap';
import MovieDetails from '@/components/MovieDetails';
import PageHeader from '@/components/PageHeader';

export default function Home() {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);

  const { data, error } = useSWR(`https://fair-teal-eel-hose.cyclic.app/api/movies?page=${page}&perPage=10`);

  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  function previous() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function next() {
    setPage(page + 1);
  }

  return (
    <>
      <PageHeader title="Movies">Film Collection : Sorted By Date</PageHeader>
      <Accordion>
        {pageData.map(movie => (
          <Accordion.Item eventKey={movie._id} key={movie._id}>
            <Accordion.Header>
              <strong>{movie.title}</strong> ({movie.year}) - {movie.directors.join(', ')}
            </Accordion.Header>
            <Accordion.Body>
              <MovieDetails movie={movie} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <Pagination>
        <Pagination.Prev onClick={previous} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />
      </Pagination>
    </>
  );
}
