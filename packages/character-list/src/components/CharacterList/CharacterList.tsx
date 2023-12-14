import React from "react";

/**
 * Represents a character fetched from the API.
 */
export interface Character {
  id: number;
  name: string;
  image?: string;
}

/**
 * Props for the CharacterList component.
 */
export interface CharacterListProps {
  doFetch: (page: number) => Promise<Character[]>;
  nameText: string;
  loadingMessage: string;
}

/**
 * Component for displaying a paginated list of Rick and Morty characters.
 * @param {CharacterListProps} props - The component props.
 * @returns {JSX.Element} - The rendered component.
 */
export function CharacterList({
  doFetch,
  nameText,
  loadingMessage,
}: CharacterListProps): JSX.Element {
  const [characters, setCharacters] = React.useState<Character[]>([]);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);

  /**
   * Fetch characters from the API and update the state.
   * @async
   */
  const fetchCharacters = async (): Promise<void> => {
    try {
      setLoading(true);
      const newCharacters = await doFetch(page);
      setCharacters((prevCharacters) => [...prevCharacters, ...newCharacters]);
    } catch (error) {
      console.error("Error fetching characters:", error);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Handle the scroll event and load more characters when reaching the end of the page.
   */
  const handleScroll = (): void => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  // Add a scroll event listener when the component mounts
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fetch characters when the page changes
  React.useEffect(() => {
    fetchCharacters();
  }, [page, doFetch]);

  return (
    <div>
      <ul>
        {characters.map((character) => (
          <li
            key={character.id}
            style={{
              height: "120px",
              backgroundColor: "yellow",
              border: "1px solid black",
              marginBottom: "8px",
            }}
          >
            <div>
              <div>{nameText}</div>
              <div>{character.name}</div>
            </div>
            <div>
              <div>{character.image}</div>
            </div>
            {/* Add an image tag with alt text if applicable */}
          </li>
        ))}
      </ul>
      {loading && <p>{loadingMessage}...</p>}
    </div>
  );
}
