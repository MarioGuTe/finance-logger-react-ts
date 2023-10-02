import { useState } from "react";

const Form = () => {
  let defaultFormInfo = {
    id: self.crypto.randomUUID(),
    // finance_type: "invoice",
    to_from: "",
    details: "",
    // amount: "",
  };

  const [formInfo, setFormInfo] = useState(defaultFormInfo);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormInfo({ ...formInfo, [e.target.name]: value });
    console.log(formInfo);
  };

  return (
    <>
      <form
        className="new-item-form"
        //    onSubmit={handleSubmit}
      >
        <div className="field">
          <label>To / From:</label>
          <input
            type="text"
            id="tofrom"
            name="to_from"
            value={formInfo.to_from}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
          <label>Details:</label>
          <input
            type="text"
            id="details"
            name="details"
            value={formInfo.details}
            onChange={handleChange}
            required
          />
        </div>
        <button>Add</button>
      </form>
    </>
  );
};

export default Form;
