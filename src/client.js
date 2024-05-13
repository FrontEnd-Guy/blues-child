import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID, 
  dataset: process.env.REACT_APP_SANITY_DATASET, 
  useCdn: true,
  apiVersion: '2021-03-25'
});

export default client;
