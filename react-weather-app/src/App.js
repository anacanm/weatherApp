import React, { useState } from 'react'

import { TopBarContainer } from './containers/TopBarContainer'
import { DataContainer } from './containers/DataContainer'

export const App = () => {
    const [query, setQuery] = useState('')

    return (
        <div>
            <TopBarContainer query = {query} setQuery = {setQuery}/>
            <DataContainer  query = {query}/>
            
        </div>
    )
}