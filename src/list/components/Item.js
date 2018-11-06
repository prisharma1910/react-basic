import React from 'react';

class Item extends React.Component {

    updateStatus = () => {
        this.props.updateStatus(this.props.id);
    }

    updateName = (e) => {
        this.props.updateName(this.props.id, e.currentTarget.value);
    }

    onSave = () => {
        this.props.onSave(this.props.id);
    }

    updateEditable = () => {
        this.props.updateEditable(this.props.id);
    }

    onDelete = () => {
        this.props.onDelete(this.props.id);
    }

    render() {
        const { item } = this.props;

        return (
            <div className="list-item">
                <input type="checkbox" value={item.status} checked={item.status} onChange={this.updateStatus}></input>
                {item.editable ?
                    <React.Fragment>
                        <input value={item.updatedName || item.name} onChange={this.updateName} />
                        <button onClick={this.onSave}>Save</button>
                    </React.Fragment> :
                    <React.Fragment>
                        <span className={item.status ? 'strikethrough' : ''}>{item.name}</span>
                        <button onClick={this.updateEditable}>Edit</button>
                    </React.Fragment>}
                <button onClick={this.onDelete}>delete</button>
            </div>
        )
    }
}

export default Item;