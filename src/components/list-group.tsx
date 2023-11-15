import { MouseEvent, useState } from "react";
function ListGroup() {
  const items = ["Hari", "Harikrishna", "krishna"];
  const msg = !items.length && <p>No items found</p>;
  const [selectedIndex, setIndex] = useState(0);
  /**
   * Events handle click
   * @param event
   * @param item
   * @param index
   */
  const handleClick = (event: MouseEvent, item: unknown, index: number) => {
    console.log(event, item, index);
    setIndex(index);
  };
  return (
    <>
      <h1>List Group</h1>
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
            onClick={(event) => handleClick(event, item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
