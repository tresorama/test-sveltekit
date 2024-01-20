export const createSlug = (name: string) => {
  return name
    .replace(/\s/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .toLowerCase();
};
