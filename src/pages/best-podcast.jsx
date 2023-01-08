import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { PodcastItem } from '../components/PodcastItem';
import { usePodcasts } from '../services/podcast.query';

export const BestPodcast = () => {
  const navigate = useNavigate();
  const { data, isFetching } = usePodcasts();

  const handleSelectItem = (event, data) => {
    event.preventDefault();
    navigate('/podcast', { state: { id: data.id } });
  };

  if (isFetching) return <div>Loading...</div>;

  return (
    <>
      <Header title='Best podcasts' showSearch={true} />
      {data?.map(item => {
        return (
          <PodcastItem
            key={item.id}
            data={item}
            handleClick={handleSelectItem}
          />
        );
      })}
    </>
  );
};
