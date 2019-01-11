import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateTodo, deleteTodo } from '../actions/todosAction'
import { List, Button } from 'antd';

class TodoItem extends Component {

    componentWillMount = (state, props) => {
        this.toggleUpdate()
    }

    toggleUpdate(force = false) {
        this.setState({
            lineStyle: {
                backgroundColor:
                    force ?
                        !this.props.item.completed ? 'aliceblue' : 'white' :
                        this.props.item.completed ? 'aliceblue' : 'white'
            },
            divStyle: { textDecoration: this.props.item.completed ? 'line-through' : 'none' }
        })
    }

    updateTodo = async e => {
        this.toggleUpdate(true);
        await this.props.updateTodo(this.props.item);
        this.toggleUpdate();
    }

    deleteTodo = async e => {
        await this.props.deleteTodo(this.props.item);
    }

    render() {
        return (
            <List.Item className='lineStyle' style={this.state.lineStyle}>
                <div className='divStyle' style={this.state.divStyle} onClick={this.updateTodo}> {this.props.item.title} </div>
                <Button onClick={this.deleteTodo} style={btnStyle}>X</Button>
            </List.Item>
        )
    }
}

const btnStyle = {
    margin: '-5px',
    backgroundColor: 'blueviolet',
    float: 'right',
    borderRadius: '50px',
    padding: '0px 12px',
    color: 'white',
    cursor: 'pointer'
};

export default connect(null, { updateTodo, deleteTodo })(TodoItem)
