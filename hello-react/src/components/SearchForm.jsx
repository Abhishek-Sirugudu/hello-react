import { useState } from 'react';

function SearchForm() {
    const [inputvalue,setvalue] = useState("");


    function handleChange(event){
        setvalue(event.target.value);
    }

    return (
        <form>
            <h2>Search Form</h2>
            <input type="text"
            placeholder='Type here...'
            value={inputvalue}
            onChange={handleChange}
            />
            <p>You are typing: {inputvalue}</p>
        </form>
    );
}

export default SearchForm;