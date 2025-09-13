import React,{useState} from 'react';
import './FetchRQ.css';
import { NavLink } from 'react-router-dom';
import { keepPreviousData, useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePost, fetchPosts , updatePost } from '../API/api';

const FetchRQ = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['posts', pageNumber],
    queryFn: () => fetchPosts(pageNumber),
    placeholderData: keepPreviousData,
    // gcTime: 10000,
    // staleTime: 5000, 
  });
  // console.log(data);
  // console.log(data?.data?.data[0].volumeInfo.title);

  // Mutation function to delete a post
  const deleteMutation= useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: (data, id) => {
      console.log("Post deleted with id: ", id);
      // console.log("Deleted data: ", data);
      queryClient.setQueryData(['posts', pageNumber], (curElem) => {
        return {
          ...curElem,
          data: {
            ...curElem.data,
            data: curElem.data.data.filter((post) => post.id !== id)
          }
        };
      });
    },
  });

  // Mutation function to update a post
  const updateMutation = useMutation({
    mutationFn: (id) => updatePost(id),
    onSuccess: (apiData, PostId) => {
      console.log("Post updated with id: ", PostId);

      queryClient.setQueryData(['posts', pageNumber], (postsData) => {
        console.log("Current posts data: ", postsData);
        return {
          ...postsData,
          data: {
            ...postsData.data,
            data: postsData.data.data.map((post) => 
              post.id === PostId ? { ...post, volumeInfo: { ...post.volumeInfo, title: "Updated Title" } } : post
            )
          }
        };
      });
    },
  });

  if(isLoading){
    return <p>Loading...</p>
  }
  if(isError){
    console.log(error.message);
    return <p>Error: {error.message} || "Something went wrong"</p>
  }
  return (
    <>
      <div>
      <ul className="section-accordion">
        {/* fetching DATA from data object using React Query */}
          {Array.isArray(data?.data?.data) && data.data.data.map((curElem) => {
                  const { id, volumeInfo } = curElem;
                  const { title, subtitle, authors, description } = volumeInfo;
                  // console.log(data);
                  // console.log(curElem);
                  // console.log(volumeInfo);
          return (
                <li key={id}>
                      <NavLink to={`/rq/${id}`}>
                          <p className="accordion-item"><strong>ID :</strong> {id}</p>
                          <p className="accordion-item"><strong>Title :</strong> {title}</p> 
                          <p className="accordion-item"><strong>Subtitle :</strong> {subtitle}</p>
                          <p className="accordion-item"><strong>Authors :</strong> {authors?.join(", ")}</p>
                          {/* <p>{description}</p> */}
                      </NavLink>
                    <button onClick={() => deleteMutation.mutate(id)}>Delete</button>
                    <button onClick={() => updateMutation.mutate(id)}>Update</button>
                </li> 
          );
        })}
      </ul>
      <div className="pagination-section">
        <button disabled={pageNumber === 0} onClick={() => setPageNumber((prev) => Math.max(prev - 10, 0))}>Prev</button>
        <p>{(pageNumber / 10) + 1}</p>
        <button disabled={data?.data?.nextPage === false} onClick={() => setPageNumber((prev) => prev + 10)}>Next</button>
      </div>
      </div>
    </>
  )
}

export default FetchRQ