import React from 'react';
import useSocket from './socket';

const Page: React.FC = () => {
  useSocket(); // Establish socket connection

  return (
    <div>
      <h1>Welcome to Sloticon</h1>
      <p>a Brodi Branded Inc production - Copyright 2025</p>
    </div>
  );
};

export async function getStaticProps() {
  // Fetch any necessary data here
  return {
    props: {}, // Pass data to the page via props
  };
}

export default Page;