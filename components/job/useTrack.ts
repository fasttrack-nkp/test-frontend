import { useQuery } from "react-query";
import axios, { AxiosResponse } from "axios";
import { TrackType } from "./types/track";
import { TaskTypeBasic } from "./types/task";

interface CurrentTaskType {
  trackId: string;
  currentTasks: TaskTypeBasic[];
}

interface TrackTypeExtended extends TrackType {
  currentTasks: TaskTypeBasic[];
}

const url = process.env.NEXT_PUBLIC_BACKEND_URL;

async function getAllTracks() {
  const config = {
    url: `${url}/job/track/all`,
    method: "get",
  };

  return axios.get<TrackType[]>(config.url);
}

async function getTrackCurrentTasks(trackIds: string[]) {
  const PromiseArray: any = [];

  trackIds.forEach((trackId) => {
    const config = {
      url: `${url}/job/track/currentTask/${trackId}`,
      method: "get",
    };

    PromiseArray.push(axios.get(config.url));
  });
  return Promise.all<AxiosResponse<CurrentTaskType>>(PromiseArray);
}

function useTrack() {
  const {
    isLoading,
    data: dataAllTracks,
    error,
  } = useQuery("getAllTracks", getAllTracks);

  let allTracksTemp: TrackType[] = [];

  if (dataAllTracks) {
    allTracksTemp = dataAllTracks.data;
  }

  const allTrackIds = allTracksTemp.map((el) => el.id);
  const enabledQuery = allTrackIds.length !== 0;
  const { data: dataCurrentTasks } = useQuery(
    ["getTrackCurrentTasks", allTrackIds],
    () => getTrackCurrentTasks(allTrackIds),
    { enabled: enabledQuery }
  );

  let currentTasksList: CurrentTaskType[] = [];

  if (dataCurrentTasks) {
    currentTasksList = dataCurrentTasks.map((el) => el.data); // The backend will return array
  }

  const allTracks: TrackTypeExtended[] = allTracksTemp.map((track) => {
    const currentTasks = currentTasksList.find((el) => el.trackId == track.id);
    return { ...track, currentTasks: currentTasks?.currentTasks || [] };
  });

  console.log({ allTracks });
  return { allTracks };
}

export default useTrack;
