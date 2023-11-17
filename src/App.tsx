import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/list-group";
import Message from "./message";

function App() {
  const [alert, setAlert] = useState('Hello Alert')
  const items = ["Hari", "Harikrishna", "krishna"];
  const handleClick = (item: string, index: number) => {
    console.log(item, index);
    setAlert('<p>This is <strong>Alert</strong> content!</p>')
  };
  return (
    <>
      <div>
        <Message />
        <Alert>
          {alert}
        </Alert>
        <ListGroup items={items} heading="Names" onSelectItem={handleClick} />
      </div>
    </>
  );
}

export default App;
