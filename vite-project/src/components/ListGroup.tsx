import { Fragment, useState } from "react";

// use props to pass data into components
interface Props {
  items: string[];
  heading: string;
  // (items: string) => void
  onSelectItem: (item: string) => void;
}
// react components can only return one element so you need to wrap it in a fragmnet
function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook
  // selectedIndex is the varialbe
  // setSelectedIndex is the function that can change the varaible
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index); // when a item is clicked the selectedIndex get updated
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
