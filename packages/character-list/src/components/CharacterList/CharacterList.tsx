import React from "react";

import {
  List,
  ListItem,
  ListItemContent,
  ListItemContentInfo,
  ListItemContentInfoTitle,
  ListItemContentInfoName,
  ListItemContentPicture,
} from "ui-lib";

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
    console.log(
      " scroll ",
      window.innerHeight + document.documentElement.scrollTop,
      document.documentElement.offsetHeight
    );

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
      <List>
        {characters.map((character) => (
          <ListItem key={character.id}>
            <ListItemContent>
              <ListItemContentPicture
                src={character.image}
                alt={`Image ${character.name}`}
              />
              <ListItemContentInfo>
                <ListItemContentInfoTitle>{nameText}</ListItemContentInfoTitle>
                <ListItemContentInfoName>
                  {character.name}
                </ListItemContentInfoName>
              </ListItemContentInfo>
            </ListItemContent>
          </ListItem>
        ))}
      </List>
      {loading && <p>{loadingMessage}...</p>}
    </div>
  );
}
