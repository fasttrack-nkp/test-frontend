import { FC } from 'react';
import useTrack from '@/job/useTrack';
import {
  Card,
  Stack,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Title,
} from '@mantine/core';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setTrack } from 'store/workingSlice';
import { TrackType } from '@/job/types/track';

const Track: FC = () => {
  const { allTracks } = useTrack();
  const dispatch = useAppDispatch();
  const currentTrack = useAppSelector((state) => state.working.track);

  function clickHandler(track: TrackType) {
    dispatch(setTrack(track));
  }

  const bgSelect = '#c8cfca';
  const bg = '#F0F8FF';
  const cardList = allTracks.map((track) => {
    const bgColor = track.id === currentTrack?.id ? bgSelect : bg;

    const currentTaskBadges = track.currentTasks.map((currentTask) => (
      <Badge
        color="gray"
        variant="light"
        key={`${track.id} - ${currentTask.id}`}
      >
        {currentTask.name}
      </Badge>
    ));
    return (
      <Card
        shadow="sm"
        p="lg"
        key={track.id}
        style={{
          backgroundColor: bgColor,
        }}
        onClick={() => clickHandler(track)}
      >
        <Group position="apart">
          <Group>
            <Title order={6}>{track.HN}</Title>
            <Text weight={300}>{track.id}</Text>
          </Group>

          <Group>
            <Stack spacing="sm">
              <Badge color="gray" variant="light">
                {track.countAll} Tracks
              </Badge>
              <Badge color="green" variant="light">
                {track.countSuccess} Success
              </Badge>
              <Badge color="pink" variant="light">
                {track.countPending} Pending
              </Badge>
            </Stack>

            <Stack>{currentTaskBadges}</Stack>
          </Group>
        </Group>
      </Card>
    );
  });
  return <div>{cardList}</div>;
};

export default Track;
