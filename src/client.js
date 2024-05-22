import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID, 
  dataset: process.env.REACT_APP_SANITY_DATASET,
  token: process.env.REACT_APP_SANITY_TOKEN, 
  useCdn: true,
  apiVersion: '2023-05-21'
});

export default client;
