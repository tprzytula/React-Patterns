import { useState } from 'react';

const fetchLocalStorage = () => {
    const items = Object.keys(localStorage)
        .map(key => ({
            id: key,
            value: localStorage.getItem(key)
        }))
        .filter((item) => {
            const { type } = JSON.parse(item.value);
            return type === 'hooks';
        })
        .map(({ id, value }) => ({
            id,
            value: JSON.parse(value).value
        }));

    return Array.isArray(items) ? items : [];
};

function useStorage() {
    const [ items, setItems ] = useState(fetchLocalStorage());
    const synchronize = () => {
        const items = fetchLocalStorage();
        setItems(items);
    };
    const add = value => {
        const id = Date.now().toString();
        localStorage.setItem(id, JSON.stringify({ value, type: 'hooks' }));
        synchronize();
    };

    const remove = id => {
        localStorage.removeItem(id);
        synchronize();
    };

    return { items, add, remove };
}

export default useStorage;
