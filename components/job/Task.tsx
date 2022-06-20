import { FC } from 'react';
import useTask from '@/job/useTask';
import { useAppSelector } from 'store/hooks';
import {
  Card,
  Stack,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Title,
  Tooltip,
} from '@mantine/core';

const Task: FC = () => {
  const { user, track } = useAppSelector((state) => state.working);

  const { allTasks } = useTask(track.id, user.role[0]?.id || '');

  const taskList = allTasks.map((task) => {
    const statusColor = task.status == 'PENDING' ? 'pink' : 'green';
    const LogButton = <Button disabled={!task.isActive}>Log Time</Button>;

    const taskPrevPending = task.taskPrev.filter(
      (el) => el.status === 'PENDING'
    );
    const taskPrevNames = taskPrevPending.map((el) => el.name);
    const taskPrevTxt = taskPrevNames.join(', ');

    let LogButtonGroup = <></>;

    if (task.status === 'PENDING') {
      LogButtonGroup = task.isActive ? (
        LogButton
      ) : (
        <Tooltip label={`Waiting for ${taskPrevTxt}`}>{LogButton}</Tooltip>
      );
    }

    return (
      <Card
        shadow="sm"
        p="lg"
        key={task.id}
        style={{
          borderStyle: 'solid',
          borderColor: '#F0F8FF',
          borderWidth: 'thin',
        }}
      >
        <Group position="apart">
          <Group>
            <Title order={6}>{task.name}</Title>
            <Text weight={300}>{task.id}</Text>
          </Group>

          <Group position="apart">
            <Badge color={statusColor} variant="light">
              {task.status}
            </Badge>

            {LogButtonGroup}
          </Group>
        </Group>
      </Card>
    );
  });
  return <div>{taskList}</div>;
};

export default Task;
