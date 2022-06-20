import { useQuery } from 'react-query';
import axios, { AxiosResponse } from 'axios';
import { TrackType } from './types/track';
const url = process.env.NEXT_PUBLIC_BACKEND_URL;

async function getAllTracks() {
  const config = {
    url: `${url}/job/track/all`,
    method: 'get',
  };

  return axios.get<TrackType[]>(config.url);
}

function useTrack() {
  const {
    isLoading,
    data: dataAllTracks,
    error,
  } = useQuery('getAllTracks', getAllTracks);

  let allTracks: TrackType[] = [];

  if (dataAllTracks) {
    allTracks = dataAllTracks.data;
  }

  return { allTracks };
}

export default useTrack;
