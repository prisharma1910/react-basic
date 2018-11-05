import React from 'react';
import { default as ListItem } from './components/listItem';
import './List.css';

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listItems: [
                { name: 'Pay bills', editable: 0, status: 0 },
                { name: 'Go Shopping', editable: 1, status: 0 },
                { name: 'See the Doctor', editable: 0, status: 1 }],
            // status = 0 -> todo, status = 1 => completed
            newItemName: '',
        }
    }

    addItem = () => {
        if (this.state.newItemName) {
            let currentItems = Object.assign([], this.state.listItems);
            currentItems.push({ name: this.state.newItemName, status: 0, editable: 0 });
            this.setState({
                listItems: currentItems,
                newItemName: ''
            })
        }
    }


    onDelete = (id) => {
        let currentItems = this.state.listItems;
        currentItems.splice(id, 1);
        this.setState({
            listItems: currentItems
        })
    }

    updateStatus = (id) => {
        let currentItems = this.state.listItems;
        currentItems[id].status = currentItems[id].status === 0 ? 1 : 0;
        currentItems[id].editable = 0;
        currentItems[id].updatedName = currentItems[id].name;
        this.setState({
            listItems: currentItems
        })
    }

    updateName = (id, newData) => {
        let currentItems = this.state.listItems;
        currentItems[id].updatedName = newData;
        this.setState({
            listItems: currentItems
        })
    }

    onSave = (id) => {
        let currentItems = this.state.listItems;
        currentItems[id].name = currentItems[id].updatedName || currentItems[id].name;
        currentItems[id].editable = 0;
        this.setState({
            listItems: currentItems,
        })
    }

    updateEditable = (id) => {
        let currentItems = this.state.listItems;
        currentItems[id].editable = currentItems[id].editable === 0 ? 1 : 0;
        currentItems[id].updatedName = currentItems[id].name;
        this.setState({
            listItems: currentItems
        })
    }

    updateNewItemName = (e) => {
        this.setState({
            newItemName: e.currentTarget.value
        })
    }

    render() {
        const { listItems, newItemName } = this.state;
        const toDoItems = [];
        const completedItems = [];
        const actionItems = {
            onDelete: this.onDelete,
            updateStatus: this.updateStatus,
            updateName: this.updateName,
            onSave: this.onSave,
            updateEditable: this.updateEditable
        }
        for (let i = 0; i < listItems.length; i++) {
            if (listItems[i].status === 0) {
                toDoItems.push(<ListItem key={i}
                    id={i}
                    item={listItems[i]}
                    {...actionItems} />)
            } else {
                completedItems.push(<ListItem key={i}
                    id={i}
                    item={listItems[i]}
                    {...actionItems} />)
            }
        }
        return (<React.Fragment>
            <h3 className="list-h3">List</h3>
            <h4 className="list-title">
                ADD ITEM
            </h4>
            <div className="add-item-list">
                <input type="text" value={newItemName} onChange={this.updateNewItemName} className="newItem" />
                <button onClick={this.addItem} className="list-button">Add</button>
            </div>
            <h4 className="list-title">
                TODO
            </h4>
                {toDoItems}
            <h4 className="list-title">
                COMPLETED
            </h4>
                {completedItems}
        </React.Fragment>)
    }
}

export default List;