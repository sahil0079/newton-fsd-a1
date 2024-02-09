import { useEffect, useState } from 'react'
import PresentationalComponent from './PresentationalComponent';


const ContainerComponent = () => {
    //state management

    const [data, setData] = useState([]);

    //fetching data

    useEffect(() => {
        fetchData();
    }, [])


    function fetchData() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data: ', error))
    }

    return <PresentationalComponent data={data} />

}

export default ContainerComponent;