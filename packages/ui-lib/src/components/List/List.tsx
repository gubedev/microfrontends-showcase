import React from "react";

/**
 * Props for the List component.
 */
interface ListProps {
  children: React.ReactNode;
}

/**
 * Props for the ListItem component.
 */
interface ListItemProps {
  children: React.ReactNode;
}

/**
 * Props for the ListItemText component.
 */
interface ListItemTextProps {
  children: React.ReactNode;
}

/**
 * Props for the ListItemImage component.
 */
interface ListItemImageProps {
  src: string;
  alt: string;
}

/**
 * A compound component representing a list-based accordion.
 */
interface ListComponent extends React.FC<ListProps> {
  Item: React.FC<ListItemProps> & {
    Text: React.FC<ListItemTextProps>;
    Image: React.FC<ListItemImageProps>;
  };
}

/**
 * The List component.
 *
 * @param {ListProps} props - The component props.
 * @returns {JSX.Element} The rendered List component.
 */
const List: ListComponent = ({ children }: ListProps): JSX.Element => {
  return (
    <ul>
      {React.Children.map(children, (child) => {
        if (React.isValidElement<ListItemProps>(child)) {
          return React.cloneElement(child);
        }
        return child;
      })}
    </ul>
  );
};

/**
 * The ListItem component.
 *
 * @param {ListItemProps} props - The component props.
 * @returns {JSX.Element} The rendered ListItem component.
 */
const ListItem: React.FC<ListItemProps> & {
  Text: React.FC<ListItemTextProps>;
  Image: React.FC<ListItemImageProps>;
} = ({ children }: ListItemProps): JSX.Element => {
  return (
    <li>
      <>{children}</>
    </li>
  );
};

/**
 * The ListItemText component.
 *
 * @param {ListItemTextProps} props - The component props.
 * @returns {JSX.Element} The rendered ListItemText component.
 */
const ListItemText: React.FC<ListItemTextProps> = ({
  children,
}: ListItemTextProps): JSX.Element => {
  return <>{children}</>;
};

/**
 * The ListItemImage component.
 *
 * @param {ListItemImageProps} props - The component props.
 * @returns {JSX.Element} The rendered ListItemImage component.
 */
const ListItemImage: React.FC<ListItemImageProps> = ({
  src,
  alt,
}: ListItemImageProps): JSX.Element => {
  return <img src={src} alt={alt} />;
};

// Attach the ListItem, ListItemText, and ListItemImage components as properties of the List component.
List.Item = ListItem;
List.Item.Text = ListItemText;
List.Item.Image = ListItemImage;

export { List };
