import type { NextPage } from 'next';
import User from '@/user/User';
import Track from '@/job/Track';
import Task from '@/job/Task';
import { Title, Stack } from '@mantine/core';
const Home: NextPage = () => {
  return (
    <div>
      <Stack spacing='xl'>
        <User />
        <Stack>
          <Title order={2}>Tracks</Title>
          <Track />
        </Stack>
        <Stack>
          <Title order={2}>Tasks</Title>
          <Task />
        </Stack>
      </Stack>
    </div>
  );
};

export default Home;
