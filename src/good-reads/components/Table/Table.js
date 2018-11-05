import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import "./Table.css";

const Table = ({ tableData, tableHeaders }) => {
    return (
        <table className="table table-striped">
          <thead>
            <tr>
                <TableHeader headers={tableHeaders} />
            </tr>
          </thead>
          <tbody>
                <TableRow data={tableData} headers={tableHeaders} />
          </tbody>
        </table>
    );
};

export default Table;