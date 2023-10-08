import { useState } from "react";
import List from "../atoms/List/List";
import Form from "../atoms/Form/Form";
import { INewLog } from "../interfaces/INewLog";

function App() {
  const [newLog, setNewLog] = useState<INewLog[]>([]);

  function updateLogInfo(formData: INewLog) {
    return setNewLog((currentData) => {
      return [...currentData, formData];
    });
  }

  function deleteLog(id: string) {
    setNewLog((currentData) => {
      return currentData.filter((newLog) => newLog.id !== id);
    });
  }

  return (
    <>
      <div className="wrapper">
        <h1>Finance Logger</h1>
        <List logInfo={newLog} onItemClick={deleteLog} />
      </div>
      <footer>
        <Form formData={updateLogInfo} />
      </footer>
    </>
  );
}

export default App;
