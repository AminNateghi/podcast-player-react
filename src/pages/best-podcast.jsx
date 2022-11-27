import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { RadioItem } from '../components/RadioItem';
import { BEST_PODCAST_ID, PODCAST_API_CLIENT } from '../constant/app.const';

export const BestPodcast = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    console.clear();
    setLoading(true);

    // if data exist not request again
    const localStorageData = localStorage.getItem(BEST_PODCAST_ID);
    if (localStorageData) {
      try {
        setData(JSON.parse(localStorageData));
        setLoading(false);
        return;
      } catch (error) {
        localStorage.removeItem(BEST_PODCAST_ID)
      }
    }

    PODCAST_API_CLIENT.fetchBestPodcasts({
      page: 1,
      region: 'us',
      sort: 'listen_score',
      safe_mode: 0,
    }).then((response) => {
      console.log(response.data);
      setData(response.data?.podcasts);
      localStorage.setItem(BEST_PODCAST_ID, JSON.stringify(response.data?.podcasts));
      setLoading(false);
    }).catch((error) => {
      console.log(error)
    });

  }, []);


  const handleSelectItem = (event, data) => {
    event.preventDefault();
    // TODO: navigate to podcast details
  }

  return (
    <>
      <Header title="Best podcasts" showSearch={true} />
      {
        isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            {
              data?.map((item) => {
                return <RadioItem key={ item.id } data={ item } handleClick={ handleSelectItem } />
              })
            }
          </>
        )
      }
    </>
  )
}
