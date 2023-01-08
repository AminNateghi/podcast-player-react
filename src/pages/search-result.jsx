import React, {  } from 'react';
import { EpisodeItem } from '../components/EpisodeItem';
import { Header } from '../components/Header';
import { usePodcasts } from '../services/podcast.query';

export const SearchResult = () => {
  const { data, isFetching } = usePodcasts();

  return (
    <>
      <Header title='Search result' showSearch={false} />
      {isFetching ? (
        <div>Loading...</div>
      ) : (
        <>
          {data?.map(item => {
            return <EpisodeItem key={item.id} data={item} />;
          })}
        </>
      )}
    </>
  );
};
