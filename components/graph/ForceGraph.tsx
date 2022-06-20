import { FC } from 'react';
// import ForceGraph2D from 'react-force-graph-2d';

// function genRandomTree(N = 25, reverse = false) {
//   return {
//     nodes: [...Array(N).keys()].map((i) => ({ id: i })),
//     links: [...Array(N).keys()]
//       .filter((id) => id)
//       .map((id) => ({
//         [reverse ? 'target' : 'source']: id,
//         [reverse ? 'source' : 'target']: Math.round(Math.random() * (id - 1)),
//       })),
//   };
// }

const ForceGraph: FC = () => {
  // console.log(genRandomTree());
  return <>{/* <ForceGraph2D graphData={genRandomTree()} /> */}</>;
};

export default ForceGraph;
