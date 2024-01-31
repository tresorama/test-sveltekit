// Function to create a slug from a given name
export const createSlug = (name: string) => {
  return name
    // Replace all spaces in the name with hyphens
    .replace(/\s/g, "-")
    // Remove all characters except alphabets, numbers, and hyphens
    .replace(/[^a-zA-Z0-9-]/g, "")
    // Convert the slug to lowercase
    .toLowerCase();
};