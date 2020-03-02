import React from 'react';
import { Title } from '../components/Title';
import { SearchBar } from '../components/SearchBar';

export const TopBarContainer = ({ query, setQuery }) => {

    return (
        <div>
            <Title query={query} />
            <SearchBar setQuery={setQuery} />
        </div>
    )
}