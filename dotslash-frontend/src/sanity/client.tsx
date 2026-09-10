import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "7or5w6ow",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});