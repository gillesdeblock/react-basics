import { useState } from 'react';
import ListItem from './ListItem';
import ListSearch from './ListSearch';

export function List({ items = [] }) {
    const [search, setSearch] = useState('');
    const filteredItems = items.filter((item) => item.toLowerCase().trim().includes(search.toLowerCase().trim()))

    return (
        <div className="flex flex-col border self-start bg-white">
            <ListSearch value={search} onInput={setSearch}></ListSearch>
            {
                filteredItems.length
                    ? filteredItems.map((item) => <ListItem key={item} label={item}></ListItem>)
                    : <ListItem label="No items found"></ListItem>
            }
        </div>
    )
}

export default List;