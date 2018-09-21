import { Component } from 'react';
import '../styles/styles.css';

class Storage extends Component {
    state = {
        items: []
    };

    componentWillMount() {
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
            }));
    };

    add = value => {
        const id = Date.now().toString();
        localStorage.setItem(id, value);
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