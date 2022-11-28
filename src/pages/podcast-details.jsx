import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './podcast-details.module.scss';
import { PODCAST_API_CLIENT } from '../constant/app.const';
import { EpisodeItem } from '../components/EpisodeItem';

export const PodcastDetails = () => {
  const [isLoading, setLoading] = useState(false);
  const [podcast, setPodcast] = useState();
  const urlParams = useLocation();

  useEffect(() => {
    setLoading(true);
    const userPodcastSelected = urlParams?.state?.podcast;
    PODCAST_API_CLIENT.fetchPodcastById({
      id: userPodcastSelected.id,
      next_episode_pub_date: 1479154463000,
      sort: 'recent_first',
    }).then((response) => {
      console.log('details:', response.data);
      const result = response.data;
      setPodcast(result);
      setLoading(false);
    }).catch((error) => {
      console.log(error)
      setLoading(false);
    });
  }, []);

  return (
    <>
      {
        isLoading && !podcast ? (
          <div>Loading...</div>
        ) : (
          <div className={ styles.podcastDetailsContainer }>
            <div className={ styles.podcast }>
              <div className={ styles.cover }>
                <img alt="" src={ podcast?.image } />
              </div>
              <div className={ styles.details }>
                <div className={ styles.title }>{ podcast?.title }</div>
                <div className={ styles.desc }>{podcast?.description}</div>
              </div>
              <div className={ styles.extra }>
                <p>{podcast?.country}</p>
                <p>{podcast?.language}</p>
              </div>
            </div>
            <div className={ styles.episodes }>
            {
              podcast?.episodes?.map((item) => {
                return <EpisodeItem key={ item.id } data={ item } />
              })
            }
            </div>
          </div>
        )
      }
    </>
  )
}
