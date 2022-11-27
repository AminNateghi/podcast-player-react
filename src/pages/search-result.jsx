import React, { useState, useEffect } from 'react';
import { RadioItem } from '../components/RadioItem';
import { useLocation } from 'react-router-dom';
import { SEARCH_RESULT_ID, PODCAST_API_CLIENT, SEARCH_KEYWORD_ID } from '../constant/app.const';

export const SearchResult = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState();
  const urlParams = useLocation();

  useEffect(() => {
    setLoading(true);

    // if keyword searched before load data from localStorage.
    const userSearchKeyword = urlParams?.state?.query;
    const localSearchKeyword = localStorage.getItem(SEARCH_KEYWORD_ID);
    const localStorageData = localStorage.getItem(SEARCH_RESULT_ID);
    if (localSearchKeyword === userSearchKeyword && localStorageData) {
      // user search again keyword
      setData(JSON.parse(localStorageData));
      setLoading(false);
    } else {
      // user type new keyword
      localStorage.setItem(SEARCH_KEYWORD_ID, userSearchKeyword);
      PODCAST_API_CLIENT.search({
        q: userSearchKeyword,
        sort_by_date: 0,
        type: 'episode',
        offset: 0,
        len_min: 10,
        len_max: 30,
        published_before: 1580172454000,
        published_after: 0,
        only_in: 'title,description',
        language: 'English',
        safe_mode: 0,
        unique_podcasts: 0,
      }).then((response) => {
        const results = response.data.results;
        setData(results);
        localStorage.setItem(SEARCH_RESULT_ID, JSON.stringify(results));
        setLoading(false);
      }).catch((error) => {
        console.log(error)
        setData([]);
        localStorage.removeItem(SEARCH_RESULT_ID);
        localStorage.removeItem(SEARCH_KEYWORD_ID);
        setLoading(false);
      });
    }

  }, []);

  return (
    <>
      {
        isLoading && !data ? (
          <div>Loading...</div>
        ) : (
          <>
            {
              data?.map((item) => {
                return <RadioItem key={ item.id } data={ item } />
              })
            }
          </>
        )
      }
    </>
  )
}
