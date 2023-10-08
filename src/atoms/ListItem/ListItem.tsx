import DeleteButton from "../DeleteButton/DeleteButton";
import { INewLog } from "../../interfaces/INewLog";

interface Props {
  singleLog: INewLog;
  onItemClick?: (params: string) => void;
}

const ListItem = ({ singleLog, onItemClick }: Props) => {
  return (
    <>
      <li>
        <h4>{singleLog.finance_type}</h4>
        <p>
          {singleLog.finance_type === "invoice"
            ? `${singleLog.to_from} is owed $${singleLog.amount} for ${singleLog.details}`
            : `${singleLog.to_from} owes $${singleLog.amount} for ${singleLog.details}`}
        </p>
        <DeleteButton id={singleLog.id} onItemClick={onItemClick} />
      </li>
    </>
  );
};

export default ListItem;
