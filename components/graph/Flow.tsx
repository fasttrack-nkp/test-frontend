import { FC } from 'react';
import { Canvas } from 'reaflow';

const Flow: FC = () => {
  const nodes = [
    {
      id: 'n-1',
      text: '1',
    },
    {
      id: 'n-2',
      text: '2',
    },
    {
      id: 'n-3',
      text: '3',
    },
    {
      id: 'n-4',
      text: '4',
    },
  ];
  const edges = [
    {
      id: '1->2',
      from: 'n-1',
      to: 'n-2',
    },
    {
      id: '2->3',
      from: 'n-2',
      to: 'n-3',
    },
    {
      id: '1->4',
      from: 'n-1',
      to: 'n-4',
    },
  ];

  return <Canvas nodes={nodes} edges={edges} maxHeight={500} maxWidth={300} />;
};

export default Flow;
