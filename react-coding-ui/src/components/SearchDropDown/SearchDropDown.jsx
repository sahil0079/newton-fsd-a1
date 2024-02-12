import React, { useEffect, useState } from 'react';
import './SearchDropDown.css';

function SearchDropDown() {
    const [text, setText] = useState('');

    const [response, setResponse] = useState([]);

    const [showDropDown, setShowDropDown] = useState(false);


    const [filteredItems, setFilteredItems] = useState([]);


    useEffect(() => {
        getProducts();

        text === '' && setShowDropDown(false);

        const final = response.filter(item => {
            const searchItem = text.toLowerCase();
            const prodName = item.title.toLowerCase();

            return prodName.startsWith(searchItem);
        });

        setFilteredItems(final);
    }, [text])

    async function getProducts() {

        const data = await fetch('https://dummyjson.com/products');
        const resp = await data.json();
        setResponse(resp.products)
    }

    function handleChange(e) {
        setText(e.target.value)
        setShowDropDown(true);
    }
    return (
        <div className='searchDropDownContainer'>

            <div className='searchBoxInput'>
                Search
                <input type='text' value={text}
                    onChange={(e) => handleChange(e)}
                    placeholder='Search Products'
                    autoFocus />
            </div>

            <div className='searchDropDown'>
                {
                    showDropDown ? <div className='searchDropDown'>
                        <ul className='searchDropDownItems'>
                            {
                                filteredItems.length !== 0 ?
                                    filteredItems.map((item, index) => (
                                        <li key={index}>{item.title}</li>
                                    )) : <div className='notFound'>
                                        Not Found
                                    </div>
                            }

                        </ul>
                    </div> : null
                }

            </div>
        </div>
    )
}

export default SearchDropDown