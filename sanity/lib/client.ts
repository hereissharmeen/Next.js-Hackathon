import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId } from '../env'

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
// })


export const client = createClient({
  projectId: "gckufxqm", // Replace with your actual project ID
  dataset: "production",        // Replace with your dataset name
  apiVersion: "2023-01-01",     // Replace with the correct API version
  useCdn: true,                 // Set to false for ISR or tag-based revalidation
});
