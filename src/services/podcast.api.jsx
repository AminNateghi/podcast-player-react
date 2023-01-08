import { api } from "./httpClient";

export const apiPodcasts = () =>
  api.get(`/podcasts`).then((response) => response.data);

export const apiEpisodes = () =>
  api.get(`/episodes`).then((response) => response.data);

  export const apiPodcastById = (id) =>
  api.get(`/podcastById?id=${id}`).then((response) => response.data);
