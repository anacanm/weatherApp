

export const getData = async (query) => {
    if (query) {
        const result = await fetch(`http://localhost:9000/data?q=${query}`)
            .then(res => res.json())
            .then(res => res)

        return result
    }
    
}
