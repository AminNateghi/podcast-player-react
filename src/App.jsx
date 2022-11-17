import React, { useEffect, useState } from 'react'
import styles from './App.module.scss';
import { RadioItem } from "./components/RadioItem";
import Header from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Client } from 'podcast-api';

export const App = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [currentRadio, setCurrentRadio] = useState({});
  const channelItemName = 'channels';


  useEffect(() => {
    console.clear();

    // if data exist not request again
    const localStorageData = localStorage.getItem(channelItemName);
    if (localStorageData) {
      try {
        setLoading(true);
        setData(JSON.parse(localStorageData));
        return;
      } catch (error) {
        localStorage.removeItem(channelItemName)
      }
    }

    const client = Client({
      apiKey: null,
    });

    client.fetchRecommendationsForPodcast({ id: '25212ac3c53240a880dd5032e547047b' })
      .then((response) => {
        setData(response.data);
        localStorage.setItem(channelItemName, JSON.stringify(data));
        setLoading(true);
      }).catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSelectItem = (event, data) => {
    event.preventDefault();
    setCurrentRadio(data);
  }

  return (
    <>
      <Sidebar currentRadio={ currentRadio } />
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <Header />

        <div className={ styles.appContainer }>
          <div className={ styles.contentGrid }>
            {
              !isLoading ? (
                <div>Loading...</div>
              ) : (
                <>
                  {
                    data.recommendations.map((item) => {
                      return <RadioItem key={item.id} data={ item } handleClick={ handleSelectItem } />
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

