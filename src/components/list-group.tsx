import { MouseEvent, useState } from "react";

interface IProps {
  items: any[]; //
  heading: string; //
  onSelectItem: (item: string, index: number) => void;
}

function ListGroup({ items, heading, onSelectItem }: IProps) {
  const msg = !items.length && <p>No items found</p>;
  const [selectedIndex, setIndex] = useState(0);

  const handleClick = (event: MouseEvent, index: number) => {
    console.log(event, index);
    setIndex(index);
  };

  return (
    <>
      <h1>{heading}</h1>
      {msg}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={(event) => {
              handleClick(event, index);
              onSelectItem(item, index);
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
