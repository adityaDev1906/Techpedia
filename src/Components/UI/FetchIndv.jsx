import React from 'react'
import "./FetchIndv.css"
import { fetchIndvPost } from '../../API/api';
import { useQuery } from '@tanstack/react-query';
import { useParams, NavLink } from 'react-router-dom';

const FetchIndv = () => {
    const { id } = useParams();
    const { data, isLoading, isError, error } = useQuery({
    queryKey: ['post', id],
    queryFn: () => fetchIndvPost(id),
  });

  // console.log(data);
  if(isLoading){
    return <p>Loading...</p>
  }
  if(isError){
    console.log(error.message);
    return <p>Error: {error.message} || "Something went wrong"</p>
  }

      // console.log("Full response:", data);
      // console.log("data.data:", data?.data);
      // console.log("Book object:", data?.data?.data);

  return (
    <>
      <div className="section-accordion">
        <h1>Post ID Number - {data?.data?.id}</h1>
        <li>
          {data?.data ? (
          <>
            <p><strong>ID:</strong> {data.data.id}</p>
            <p><strong>Title:</strong> {data.data.volumeInfo.title}</p>
            <p><strong>Subtitle:</strong> {data.data.volumeInfo.subtitle}</p>
            <p><strong>Authors:</strong> {data.data.volumeInfo.authors?.join(", ")}</p>
            <p><strong>Description:</strong> {data.data.volumeInfo.description}</p>
          </>
        ) : (
          <p>No data found.</p>
        )}
        </li>
        <NavLink to="/rq">
            <button>Back to Posts</button>
        </NavLink>
      </div>
    </>
  )
}

export default FetchIndv