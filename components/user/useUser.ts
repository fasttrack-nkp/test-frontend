import { useQuery } from 'react-query';
import axios, { AxiosResponse } from 'axios';
import { UserType } from './types/user';

async function getAllUsers() {
  const url = process.env.NEXT_PUBLIC_BACKEND_URL;
  const config = {
    url: `${url}/user/all`,
    method: 'get',
  };

  return axios.get<UserType[]>(config.url);
}

function useUser() {
  const {
    isLoading,
    data: dataAllUsers,
    error,
  } = useQuery('getAllUsers', getAllUsers);

  let allUsers: UserType[] = [];
  let allUserOptions: { label: string; value: string }[] = [];

  if (dataAllUsers) {
    allUsers = dataAllUsers.data;
    allUserOptions = allUsers.map((el) => ({
      label: `${el.firstName} ${el.lastName}`,
      value: el.id,
    }));
  }

  return { allUsers, allUserOptions };
}

export default useUser;
