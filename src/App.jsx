import React, { useEffect, useState } from 'react'
import styles from './App.module.scss';
import { RadioItem } from "./components/RadioItem";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Client } from 'podcast-api';

export const App = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [searchResult, setSearchResult] = useState();
  const [currentRadio, setCurrentRadio] = useState({});
  const bestPodcastID = 'bestPodcast';
  const searchResultID = 'searchResult';
  const client = Client({ apiKey: null }); // free plan of ListenNotes.com api


  useEffect(() => {
    console.clear();
    setLoading(true);

    // if data exist not request again
    const localStorageData = localStorage.getItem(bestPodcastID);
    if (localStorageData) {
      try {
        setData(JSON.parse(localStorageData));
        setLoading(false);
        return;
      } catch (error) {
        localStorage.removeItem(bestPodcastID)
      }
    }

    client.fetchBestPodcasts({
      page: 1,
      region: 'us',
      sort: 'listen_score',
      safe_mode: 0,
    }).then((response) => {
      console.log(response.data);
      setData(response.data?.podcasts);
      localStorage.setItem(bestPodcastID, JSON.stringify(response.data?.podcasts));
      setLoading(false);
    }).catch((error) => {
      console.log(error)
    });

  }, []);

  const handleSelectItem = (event, data) => {
    event.preventDefault();
    setCurrentRadio(data);
  }

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      const searchValue = event.target?.value;
      if (searchValue) {
        setLoading(true);
        client.search({
          q: searchValue,
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
          console.log(response.data);
          setSearchResult(response.data);
          localStorage.setItem(searchResultID, JSON.stringify(response.data?.podcasts));
          setLoading(false);
        }).catch((error) => {
          console.log(error)
          setSearchResult([]);
        });
      } else {
        setSearchResult([]);
      }
    }
  }

  return (
    <>
      <Sidebar currentRadio={ currentRadio } />
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <Header handleSearch={ handleSearch } />

        <div className={ styles.appContainer }>
          <div className={ styles.contentGrid }>
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
          </div>
        </div>
      </div>
    </>
  )
}

