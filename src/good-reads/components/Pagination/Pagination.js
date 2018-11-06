import React from "react";
import Select from "../Elements/Select"
import Button from "../Elements/Button"
import "./Pagination.css";

class Pagination extends React.Component {

    onNext = (e) => {
        e.preventDefault();
        const { pages, paginate } = this.props;
        let { page } = this.props;
        if (page + 1 <= pages) {
            paginate(page + 1);
        }
    }

    onPrev = (e) => {
        e.preventDefault();
        let { page } = this.props;
        if (page - 1 >= 1) {
            this.props.paginate(page - 1);
        }
    }

    onSelect = (value) => {
        this.props.paginate(parseInt(value, 10));
        this.props.updatePageSelection(value);
    }

    render() {
        const { total,
            perPage,
            page,
            pages,
            dropdownVal } = this.props;

        let to = perPage * page;
        let from = to - perPage + 1;

        return (<div className={"pagination-container " + (to ? "" : "hide-pagination")
        }>
            { total && total !== '0' && <div className="pagination-text">
                Showing {from} to {to < total ? to : total} of {total} records 
        </div>}
            <div>
                Items per page - <Select
                    name="per_page"
                    list={[10, 20, 30]}
                    value={perPage}
                    change={this.props.updatePerPage}
                />
            </div>
            <div className="pagination">
                <Button label="Prev" click={this.onPrev} />
                <Select
                    list={Array.from(
                        new Array(pages),
                        (val, index) => index + 1
                    )}
                    value={dropdownVal}
                    change={this.onSelect}
                />
                <Button label="Next" click={this.onNext} />
            </div>
        </div>);
    }

}

Pagination.defaultProps = {
    total: 0,
    perPage: 10,
    page: 1,
    pages: 1,
    paginate: () => { },
    updatePageSelection: () => { },
    updatePerPage: () => { },
    dropdownVal: ""
};

export default Pagination;