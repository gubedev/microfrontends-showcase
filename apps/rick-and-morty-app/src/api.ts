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
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    const data = await response.json();
    const newCharacters: Character[] = data.results;

    return newCharacters;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error; // Propagate the error
  }
}
