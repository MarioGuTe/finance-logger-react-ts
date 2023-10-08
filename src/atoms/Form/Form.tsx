import { useState } from "react";
import { INewLog } from "../../interfaces/INewLog";

interface Props {
  formData?: (params: INewLog) => void;
}

const Form = ({ formData }: Props) => {
  const defaultFormInfo = {
    id: self.crypto.randomUUID(),
    finance_type: "invoice",
    to_from: "",
    details: "",
    amount: "",
  };

  const [formInfo, setFormInfo] = useState<INewLog>(defaultFormInfo);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    formData && formData(formInfo);
    setFormInfo(defaultFormInfo);
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const value = e.target.value;
    setFormInfo({ ...formInfo, [e.target.name]: value });
  };

  return (
    <>
      <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Type:</label>
          <select
            id="type"
            name="finance_type"
            onChange={handleChange}
            value={formInfo.finance_type}
          >
            <option value="invoice">Invoice</option>
            <option value="payment">Payment</option>
          </select>
        </div>
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
        <div className="field">
          <label>Amount ($):</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formInfo.amount}
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
