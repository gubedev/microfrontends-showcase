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
 * A compound component representing a list-based accordion.
 */
interface ListComponent extends React.FC<ListProps> {
  Item: React.FC<ListItemProps>;
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
const ListItem: React.FC<ListItemProps> = ({
  children,
}: ListItemProps): JSX.Element => {
  return (
    <li>
      <>{children}</>
    </li>
  );
};

// Attach the ListItem component as a property of the List component.
List.Item = ListItem;

export { List };
