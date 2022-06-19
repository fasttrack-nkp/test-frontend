import { FC } from 'react';
import useUser from '@/user/useUser';
import { Select } from '@mantine/core';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setUser } from 'store/workingSlice';

const User: FC = () => {
  const { allUsers, allUserOptions } = useUser();

  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.working);

  function handleChange(id: string | null) {
    const user = allUsers.find((user) => user.id == id);
    console.log({ user });
    if (user) dispatch(setUser(user));
  }
  return (
    <div>
      <Select
        data={allUserOptions}
        onChange={handleChange}
        placeholder='Select User'
        value={user?.id || null}
      />
    </div>
  );
};

export default User;
