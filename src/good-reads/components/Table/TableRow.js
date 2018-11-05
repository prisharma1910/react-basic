import React from "react"

const TableRow = ({ data = [], headers = [] }) => {
	if(data.length < 1){
		return (<tr><td>No data. </td></tr>);
	}
	return data.map((item, i) => (
		<tr key={i}>
			{headers.map((header, ind) => {
				let data = null;
				switch (header.key) {
					case 'id':
						data = item["id"]["#text"];
						break;
					case 'rating':
						data = item["average_rating"]["#text"];
						break;
					case 'title':
						data = item["best_book"]["title"]["#text"];
						break;
					case 'author':
						data = item["best_book"]["author"]["name"]["#text"];
						break;
					case 'reviews':
						data = item["text_reviews_count"]["#text"];
						break;
					default:
						data = header.key;
				}
				return <td key={ind}>{data || header.key}</td>;
			})}
		</tr>
	));
};

export default TableRow;