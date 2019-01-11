import React, { Component } from 'react'
import { Button, Input } from 'antd';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todosAction'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newTodo: ''
        }
    }

    handleChange = e => {
        this.setState({...this.state, newTodo: e.target.value})
    }

    onClick = e => {
        e.preventDefault();
        this.props.addTodo({
            userId: 1,
            title: this.state.newTodo,
            completed: false
        })
        this.setState({ newTodo: '' })
    }

    render() {
        return (
            <form style={{ width: '50%', margin: '0 auto' }}>
                <Input value={this.state.newTodo} type='text' placeholder='add your todo...' onChange={this.handleChange} onPressEnter={this.onClick} style={inputStyle} />
                <div className='text-center'>
                    <Button type='primary' style={buttonStyle} onClick={this.onClick}>Submit</Button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    newTodo: state.newTodo
})

const inputStyle = {
    padding: '5px',
    margin: '10px'
}

const buttonStyle = {
    borderRadius: '15px',
    backgroundColor: 'cornflowerblue'
}

export default connect(mapStateToProps, { addTodo })(TodoForm)
