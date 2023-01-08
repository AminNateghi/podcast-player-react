import React from 'react';
import styles from './podcast-details.module.scss';
import { EpisodeItem } from '../components/EpisodeItem';
import { usePodcastDetail } from '../services/podcast.query';
import { useLocation } from 'react-router-dom';

export const PodcastDetails = () => {
  const urlParams = useLocation();
  const { data: podcast, isFetching } = usePodcastDetail(urlParams?.state?.id); 

  if (isFetching) return <div>Loading...</div>;

  return (
    <>
      <div className={styles.podcastDetailsContainer}>
        <div className={styles.podcast}>
          <div className={styles.cover}>
            <img alt='' src={podcast?.images?.cover} />
          </div>
          <div className={styles.details}>
            <div className={styles.title}>{podcast?.title}</div>
            <div className={styles.desc}>{podcast?.description}</div>
          </div>
          <div className={styles.extra}>
            <p>{podcast?.country?.name}</p>
            <p>{podcast?.language?.name}</p>
          </div>
        </div>
        <div className={styles.episodes}>
          {podcast?.episodes?.map(item => {
            return <EpisodeItem key={item.id} data={item} />;
          })}
        </div>
      </div>
    </>
  );
};
