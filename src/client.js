import { createClient } from '@sanity/client';

// Client for read operations (public queries)
const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: true,
  perspective: 'published',
  stega: false,
});

// Client for write operations (mutations require token)
export const writeClient = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

export default client;
