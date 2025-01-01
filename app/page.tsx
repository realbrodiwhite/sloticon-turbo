import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Sloticon</h1>
      <p>This is the main landing page of the Sloticon game.</p>
    </div>
  );
};

export const getStaticProps = async () => {
  // Fetch any necessary data here
  return {
    props: {}, // Pass data to the page via props
  };
};

export default HomePage;
