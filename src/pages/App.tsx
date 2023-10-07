import { useState } from "react";
import Form from "../atoms/Form/Form";
import { INewLog } from "../interfaces/INewLog";

function App() {
  const [newLog, setNewLog] = useState<INewLog[]>([]);

  function updateLogInfo(formData: INewLog) {
    return setNewLog((currentData) => {
      return [...currentData, formData];
    });
  }

  console.log(newLog);

  return (
    <>
      <div className="wrapper">
        <h1>Finance Logger</h1>
      </div>
      <footer>
        <Form formData={updateLogInfo} />
      </footer>
    </>
  );
}

export default App;
