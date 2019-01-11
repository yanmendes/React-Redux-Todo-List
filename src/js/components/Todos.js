import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions/todosAction'
import TodoItem from './TodoItem'
import { List, notification } from "antd";

class Todos extends Component {

    componentDidUpdate(prevProps, prevState) {
        if (Object.keys(this.props.response).length !== 0 && this.props.todos === prevProps.todos) {
            const { type, title, description } = this.props.response;
            this.openNotificationWithIcon(type, title, description);
        }
    }

    openNotificationWithIcon = (type, title, description) => {
        notification[type]({
            message: title,
            description: description,
        });
    };

    componentWillMount() {
        this.props.fetchTodos()
    }

    getResponse() {
        return this.props.response
    }

    render() {
        const todos = this.props.todos.map(todo => (
            <TodoItem
                key={todo.id}
                item={todo}
                response={this.getResponse()}
            />
        ));
        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>Todos</h1>
                <List className='list-group'>
                    {todos}
                </List>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos.todos,
    response: state.todos.response
});

export default connect(mapStateToProps, { fetchTodos })(Todos)
