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
            <p><strong>Publisher:</strong> {data.data.volumeInfo.publisher}</p>
            <p><strong>Published Date:</strong> {data.data.volumeInfo.publishedDate}</p>
            <p><strong>Authors:</strong> {data.data.volumeInfo.authors?.join(", ")}</p>
            <p><strong>Description:</strong> {data.data.volumeInfo.description}</p>
            <p><strong>Published Date:</strong> {data.data.volumeInfo.publishedDate}</p>
            <p><strong>Page Count:</strong> {data.data.volumeInfo.pageCount}</p>
            <p><strong>Categories:</strong> {data.data.volumeInfo.categories?.join(", ")}</p>
            <p><strong>Average Rating:</strong> {data.data.volumeInfo.averageRating}</p>
            <p><strong>Ratings Count:</strong> {data.data.volumeInfo.ratingsCount}</p>
            <p><strong>Language:</strong> {data.data.volumeInfo.language}</p>
            <p><strong>Preview Link:</strong> <a href={data.data.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">Preview Book</a></p>
            <p><strong>Info Link:</strong> <a href={data.data.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">More Info</a></p>
            <p><strong>Buy Link:</strong> {data.data.saleInfo?.buyLink ? <a href={data.data.saleInfo.buyLink} target="_blank" rel="noopener noreferrer">Buy Book</a> : "Not for Sale"}</p>
            <p><strong>Web Reader Link:</strong> {data.data.accessInfo?.webReaderLink ? <a href={data.data.accessInfo.webReaderLink} target="_blank" rel="noopener noreferrer">Read Online</a> : "Not Available"}</p>
            <p><strong>Download Link:</strong> {data.data.accessInfo?.downloadLink ? <a href={data.data.accessInfo.downloadLink} target="_blank" rel="noopener noreferrer">Download Book</a> : "Not Available"}</p>
            <p><strong>Print Type:</strong> {data.data.volumeInfo.printType}</p>
            <p><strong>Print Link:</strong> {data.data.accessInfo?.printLink ? <a href={data.data.accessInfo.printLink} target="_blank" rel="noopener noreferrer">Print Book</a> : "Not Available"}</p>
            <p><strong>Image:</strong></p>
            {data.data.volumeInfo.imageLinks?.thumbnail ? (
              <img src={data.data.volumeInfo.imageLinks.thumbnail} alt={data.data.volumeInfo.title} />
            ) : (
              <p>No image available</p>
            )}
            <p><strong>Preview Text Snippet:</strong> {data.data.searchInfo?.textSnippet ? <span dangerouslySetInnerHTML={{ __html: data.data.searchInfo.textSnippet }} /> : "No snippet available"}</p>
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