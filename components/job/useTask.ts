import { useQuery } from 'react-query';
import axios, { AxiosResponse } from 'axios';
import { TaskType } from './types/task';
const url = process.env.NEXT_PUBLIC_BACKEND_URL;

async function getTaskByRole(trackId: string, roleId: string) {
  const config = {
    url: `${url}/job/task/${trackId}/${roleId}`,
    method: 'get',
  };

  return axios.get<TaskType[]>(config.url);
}

function useTask(trackId: string, roleId: string) {
  const {
    isLoading,
    data: dataAllTasks,
    error,
  } = useQuery(['getTrackByRole', trackId, roleId], () =>
    getTaskByRole(trackId, roleId)
  );

  let allTasks: TaskType[] = [];
  if (dataAllTasks) {
    allTasks = dataAllTasks.data;
  }

  return { allTasks };
}

export default useTask;
