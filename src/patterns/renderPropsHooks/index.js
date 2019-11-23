import React from 'react';
import useStorage from './api';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

function TodoList() {
    const { items, add, remove } = useStorage();
    const renderTodoItem = item => {
        return (
            <div className="todo-item" key={item.id}>
                <Chip
                    className="todo-item"
                    label={item.value}
                    color="secondary"
                    deleteIcon={<DoneIcon />}
                    onDelete={remove.bind(null, item.id)}
                />
            </div>
        )
    };
    const onKeyPress = event => {
        if (event.key === 'Enter' && event.target.value) {
            add(event.target.value);
            event.target.value = '';
        }
    };

    return (
        <div className="todo-container">
            <h1 className="todo-header">Todo List (using hooks)</h1>

            {items.map(item => renderTodoItem(item, remove))}

            <FormControl className="todo-task">
                <InputLabel htmlFor="name-simple">Task</InputLabel>
                <Input
                    id="name-simple"
                    onKeyPress={event => onKeyPress(event, add)}
                />
            </FormControl>
        </div>
    );
}

export default TodoList;
