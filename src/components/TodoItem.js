import React, {Component} from 'react';
import './TodoItem.css';

class TodoIteam extends Component{
    render() {
        const { item } = this.props;
        let className = "TodoItem";
        if(item.isCompete){
            className += ' TodoItem-done';
        }
        return(
            <div className={className}>
                <h2>{ this.props.item.title }</h2>
            </div>
        );
    }
}

export default TodoIteam;