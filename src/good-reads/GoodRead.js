import React from "react";
import Table from "./components/Table/Table";
import { default as Pagination } from "./components/Pagination/Pagination";
import Loader from "./components/Loader/Loader";
import Button from "./components/Elements/Button";
import { HEADERS, configOptions } from "./constants";
import { apiUrl } from "./config";
import "./GoodRead.css";

const xmlToJson = (xml) => {
  // Create the return object
  var obj = {}, i, j, attribute, item, nodeName, old;

  if (xml.nodeType === 1) { // element
    // do attributes
    if (xml.attributes.length > 0) {
      obj["@attributes"] = {};
      for (j = 0; j < xml.attributes.length; j = j + 1) {
        attribute = xml.attributes.item(j);
        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
      }
    }
  } else if (xml.nodeType === 3) { // text
    obj = xml.nodeValue;
  }

  // do children
  if (xml.hasChildNodes()) {
    for (i = 0; i < xml.childNodes.length; i = i + 1) {
      item = xml.childNodes.item(i);
      nodeName = item.nodeName;
      if ((obj[nodeName]) === undefined) {
        obj[nodeName] = xmlToJson(item);
      } else {
        if ((obj[nodeName].push) === undefined) {
          old = obj[nodeName];
          obj[nodeName] = [];
          obj[nodeName].push(old);
        }
        obj[nodeName].push(xmlToJson(item));
      }
    }
  }
  return obj;
};


class GoodRead extends React.Component {
  constructor(props) {
    super(props);
    let { startPage, perPage } = configOptions;

    this.state = {
      searchValue: '',
      tableData: [],
      page: startPage,
      pages: startPage,
      perPage: perPage,
      total: null,
      paginationDropdown: startPage,
      loading: false
    };
  }

  getData = (api = apiUrl) => {
    const { searchValue, page, perPage } = this.state;
    if (!searchValue) {
      return;
    }
    this.setState({
      loading: true
    });
    fetch(`${api}${searchValue}&per_page=${perPage}&page=${page}`)
      .then(response => response.text())
      .then(xmlString => (new window.DOMParser()).parseFromString(xmlString, "text/xml"))
      .then(data => {
        const parsedData = xmlToJson(data).GoodreadsResponse.search;
        this.setState({
          pages: Math.floor(parseInt(parsedData["total-results"]["#text"]) / perPage),
          total: parsedData["total-results"]["#text"],
          tableData: parsedData.results.work,
          loading: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  onSearch = () => {
    let { searchValue } = this.state;
    if (!searchValue) {
      return;
    }
    this.setState({
      page: 1
    }, this.getData);
  };

  onClear = () => {
    let { startPage, perPage } = configOptions;
    this.setState({
      searchValue: '',
      tableData: [],
      page: startPage,
      pages: startPage,
      perPage: perPage,
      total: null,
      paginationDropdown: startPage,
      loading: false
    })
  }

  paginate = (value) => {
    this.setState({
      page: value
    }, this.getData);
  }

  updatePerPage = (value) => {
    this.setState({
      page: 1,
      perPage: value,
      paginationDropdown: 1
    }, this.getData);
  }

  updatePageSelection = (val) => {
    this.setState({
      paginationDropdown: val
    });
  }

  updateSearchValue = (e) => {
    this.setState({
      searchValue: e.currentTarget.value
    });
  }

  render = () => {
    const {
      searchValue,
      tableData,
      page,
      pages,
      perPage,
      total,
      loading
    } = this.state;

    return (
      <div>
        <div className="search-bar">
          <input name="searchBox" value={searchValue} onChange={this.updateSearchValue} />
          <Button click={this.onSearch} label="Apply" name="apply" />
          <Button click={this.onClear} label="Clear" name="clear" />
        </div>
        <div className="table-container">
          <Table tableHeaders={HEADERS} tableData={tableData} />
        </div>
        <Pagination
          total={total}
          perPage={parseInt(perPage, 10)}
          page={page}
          pages={pages}
          paginate={this.paginate}
          dropdownVal={String(page)}
          updatePageSelection={this.updatePageSelection}
          updatePerPage={this.updatePerPage}
        />
        <Loader loading={loading} />
      </div>
    );
  };
}

export default GoodRead;