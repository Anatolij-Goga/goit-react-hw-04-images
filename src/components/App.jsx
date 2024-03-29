import React, { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import { nanoid } from 'nanoid';

const API_KEY = '32927329-1fd723227fa2a945434ab30d0';
const URL = 'https://pixabay.com/api/';

export default function App() {
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const [query, setQuery] = useState('');
  const [totalHits, setTotalHits] = useState(null);
  const [error, setError] = useState(null);
  const [reqId, setReqId] = useState(null);

  useEffect(() => {
    if (query === '') {
      return;
    }
    setStatus('pending');
    const fetchImg = () => {
      return fetch(
        `${URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error('Failed to find any images'));
        })
        .then(pictures => {
          if (!pictures.total) {
            toast.error('Did find anything, mate');
          }
          return pictures;
        })
        .catch(error => setError(error) && setStatus('rejected'));
    };
    fetchImg().then(pictures => {
      const selectedProperties = pictures.hits.map(
        ({ id, largeImageURL, webformatURL }) => {
          return { id, largeImageURL, webformatURL };
        }
      );
      setPictures(prevState => [...prevState, ...selectedProperties]);
      setStatus('resolved');
      setTotalHits(pictures.total);
    });
  }, [page, query, reqId]);

  const processSubmit = query => {
    setReqId(nanoid());
    setQuery(query);
    setPage(1);
    setPictures([]);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      <Searchbar onSubmit={processSubmit} />
      {pictures.length && <ImageGallery images={pictures} />}
      {totalHits > pictures.length && <Button onClick={handleLoadMore} />}
      {status === 'pending' && <Loader />}
      {status === 'rejected' && { error }}
      <ToastContainer autoClose={2000} />
    </>
  );
}
