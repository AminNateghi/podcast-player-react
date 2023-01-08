import { useQuery } from '@tanstack/react-query';
import { apiEpisodes, apiPodcastById, apiPodcasts } from './podcast.api';

export const usePodcasts = () => useQuery(['podcasts'], () => apiPodcasts());

export const useEpisodes = () => useQuery(['episode'], () => apiEpisodes());

export const usePodcastDetail = podcastId =>
  useQuery(['podcasts', podcastId], () => apiPodcastById(podcastId));
