import { FC } from 'react';
import useUser from '@/user/useUser';
import { Select } from '@mantine/core';

const User: FC = () => {
  const { allUsers, allRoleOptions } = useUser();
  console.log({ allUsers, allRoleOptions });
  return (
    <div>
      <Select data={allRoleOptions} />
    </div>
  );
};

export default User;
