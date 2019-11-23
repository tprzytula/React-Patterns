import React from 'react';
import Storage from './api';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

class TodoList extends React.Component {
    renderTodoItem = (item, remove) => {
        return (
            <div className="todo-item" key={item.id}>
                <Chip
                    className="todo-item"
                    label={item.value}
                    color="primary"
                    deleteIcon={<DoneIcon />}
                    onDelete={remove.bind(null, item.id)}
                />
            </div>
        )
    };

    onKeyPress = (event, add) => {
        if (event.key === 'Enter' && event.target.value) {
            add(event.target.value);
            event.target.value = '';
        }
    };

    render() {
        return (
            <Storage>
                {({ add, remove, items }) => {
                    return (
                        <div className="todo-container">
                            <h1 className="todo-header">Todo List</h1>

                            {items.map(item => this.renderTodoItem(item, remove))}

                            <FormControl className="todo-task">
                                <InputLabel htmlFor="name-simple">Task</InputLabel>
                                <Input
                                    id="name-simple"
                                    onKeyPress={event => this.onKeyPress(event, add)}
                                />
                            </FormControl>
                        </div>
                    );
                }}
            </Storage>
        );
    }
}

export default TodoList;
