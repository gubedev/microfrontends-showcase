import { Character } from "character-list";

/**
 * Fetch characters from the API based on the specified page.
 * @param {number} page - The page number to fetch.
 * @returns {Promise<Character[]>} - A promise that resolves to an array of characters.
 * @throws {Error} - An error thrown if there is an issue fetching characters.
 */
export async function fetchCharactersApi(page: number): Promise<Character[]> {
  try {
    const response = await fetch(
      `https://api.potterdb.com/v1/characters?page[${page}]`
    );
    const data = await response.json();
    const newCharacters = data.data;

    const result = newCharacters.map((c: any) => {
      return {
        name: c.attributes.name,
      };
    });

    return result;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error; // Propagate the error
  }
}
