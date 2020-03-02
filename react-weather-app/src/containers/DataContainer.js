import React, { useEffect, useState } from 'react';
import { Data } from '../components/Data'
import { getData } from '../services/getData'

export const DataContainer = ({ query }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        if (query !== "") {
            getData(query).then(res => setData(res)).then(console.log(data))
        }
    }, [query])


    return (
        <div>
            {data.map(d => <Data d={d} key={Math.random()}/>)}
        </div>


    )
}