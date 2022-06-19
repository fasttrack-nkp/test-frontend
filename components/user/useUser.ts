import { useQuery } from 'react-query';
import axios, { AxiosResponse } from 'axios';

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

  let allUsers = [];
  let allRoles: any[] = [];
  let allRoleOptions: any[] = [];
  if (dataAllUsers) {
    allUsers = dataAllUsers.data;
    allRoles = allUsers.map((el: any) => el.role[0]);
    allRoles = [...allRoles, { id: 'roleId0', name: 'Admin' }];
    allRoleOptions = allRoles.map((el) => ({ label: el.name, value: el.id }));
  }

  return { allUsers, allRoles, allRoleOptions };
}

export default useUser;
