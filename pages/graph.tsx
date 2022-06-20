import type { NextPage } from 'next';
import { Container, Title } from '@mantine/core';
import dynamic from 'next/dynamic';

// const DynamicImportNoSSR1 = dynamic(() => import('../components/graph/Graph'), {
//   ssr: false,
// });

const DynamicImportNoSSR3 = dynamic(() => import('../components/graph/Flow'), {
  ssr: false,
});

const GraphPage: NextPage = () => {
  return (
    <Container>
      {/* <DynamicImportNoSSR1 /> */}
      <Title>Flow Chart</Title>
      <DynamicImportNoSSR3 />
    </Container>
  );
};

export default GraphPage;
