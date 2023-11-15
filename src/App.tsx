import ListGroup from "./components/list-group";
import Message from "./message";

function App() {
  const items = ["Hari", "Harikrishna", "krishna"];
  const handleClick = (item: string, index: number) => {
    console.log(item, index);
  };
  return (
    <>
      <div>
        <Message />
        <ListGroup items={items} heading="Names" onSelectItem={handleClick} />
      </div>
    </>
  );
}

export default App;
