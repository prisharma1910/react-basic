import React from "react";

const TableHeader = ({ headers = [] }) => {
	return headers.map((item, index) => <th key={index}>{item.label}</th>);
};

export default TableHeader;