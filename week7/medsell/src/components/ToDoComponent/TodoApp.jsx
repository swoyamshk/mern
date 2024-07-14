import React, {useEffect, useState} from 'react';
export default function TodoApp() {
    const [inputValue, setInputValue] = useState('');
    const [listAdd, setListAdd] = useState([]);

    const handleInput = (e) => {
        setInputValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setListAdd([...listAdd, { InputValue: inputValue, check: false }]);

    };
    const handleCheckBox = (value) => {
        console.log(value);
        let newLi =  [...listAdd]
        newLi[value].check = true

        setListAdd(newLi)

    };
   
    return (
        <div>
            <h1>TodoApp</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="Add the task" value={inputValue} onChange={handleInput} />
                <button type="submit">Add Task</button>
            </form>

            <ul style={{ listStyle:"none"}}>
                {listAdd.map((item, index) => (
                    item.check ? (
                       <li>  <p> <s> {item.InputValue}  </s>  </p> </li>
                    ) : (
                        <li>
                            <input type="checkbox" name="checkbox" value={item.InputValue} onChange={() => handleCheckBox(index)} />
                            <label>{item.InputValue}</label>
                        </li>
                    )
                ))}
            </ul>
        </div>
    );
}