import { Component } from 'react';
import '../styles/styles.css';

class Storage extends Component {
    state = {
        items: []
    };

    componentDidMount() {
        this.synchronize();
    }

    synchronize = () => {
        const items = this.fetchItems();
        if (Array.isArray(items)) {
            this.setState({
                items: this.fetchItems()
            });
        }
    };

    fetchItems = () => {
        return Object.keys(localStorage)
            .map(key => ({
                id: key,
                value: localStorage.getItem(key)
            }))
            .filter(({ value }) => {
                const { type } = JSON.parse(value);
                return type === 'class-components';
            })
            .map(({ id, value }) => ({
                id,
                value: JSON.parse(value).value
            }));
    };

    add = value => {
        const id = Date.now().toString();
        localStorage.setItem(id, JSON.stringify({ value, type: 'class-components' }));
        this.synchronize();
    };

    remove = id => {
        localStorage.removeItem(id);
        this.synchronize();
    };

    getStateAndHelpers = () => ({
        add: this.add,
        remove: this.remove,
        items: this.state.items
    });

    render () {
        return this.props.children(this.getStateAndHelpers());
    }
}

export default Storage;
