import { useQuery } from 'react-query';
import axios, { AxiosResponse } from 'axios';
import { UserType } from '@/user/types/user';

async function getAllUsers() {
  const config = {
    url: 'http://localhost:3000/user/all',
    method: 'get',
  };

  return axios.get(config.url);
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
