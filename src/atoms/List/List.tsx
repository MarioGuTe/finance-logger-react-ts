import React from "react";
import ListItem from "../ListItem/ListItem";
import { INewLog } from "../../interfaces/INewLog";

interface Props {
  logInfo: INewLog[];
  onItemClick?: (params: string) => void;
}

const List = ({ logInfo, onItemClick }: Props) => {
  return (
    <>
      <ul className="item-list">
        {logInfo.map((singleLog) => (
          <React.Fragment key={singleLog.id}>
            <ListItem singleLog={singleLog} onItemClick={onItemClick} />
          </React.Fragment>
        ))}
      </ul>
    </>
  );
};

export default List;
