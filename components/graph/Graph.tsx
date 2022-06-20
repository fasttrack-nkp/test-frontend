import { FC } from 'react';
import { GraphCanvas } from 'reagraph';

const Graph: FC = () => {
  const nodes = [
    {
      id: 'n-1',
      label: '1',
    },
    {
      id: 'n-2',
      label: '2',
    },
    {
      id: 'n-3',
      label: '3',
    },
  ];
  const edges = [
    {
      id: '1->2',
      source: 'n-1',
      target: 'n-2',
      label: 'Edge 1-2',
    },
    {
      id: '2->3',
      source: 'n-2',
      target: 'n-3',
      label: 'Edge 2-3',
    },
  ];

  const contextMenuItems = [
    {
      label: 'Add Node',
      onClick: (e: any) => {
        console.log(e);
        alert('Add a node');
      },
    },
    {
      label: 'Remove Node',
      onClick: () => alert('Remove the node'),
    },
  ];

  return (
    <GraphCanvas
      layoutType="hierarchicalTd"
      nodes={nodes}
      edges={edges}
      //   contextMenuItems={contextMenuItems}
    />
  );
};

export default Graph;
