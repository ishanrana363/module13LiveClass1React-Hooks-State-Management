import {useState} from 'react';

const ReactState = () => {
    const [value,setValue] = useState({
        Name : "",
        age : "",
        City : ""
    })
    const inputValue = (key,event)=>{
        setValue(prev=>({
            ...prev,
            [key] : event
        }))
    }
    return (
        <div>
            <form action="">
                Name : {value.Name} <br/>
                Password : {value.age} <br/>
                City : {value.City}
                <div>
                    <input type="text" name="" value={value.Name} 
                    onChange={(e)=>{inputValue("Name",e.target.value)}} id="" />
                </div>
                <div>
                    <input type="text" name="" value={value.age} 
                    onChange={(e)=>{inputValue("age",e.target.value)}} id="" />
                </div>
                <div>
                    <input type="text" name="" value={value.City} 
                    onChange={(e)=>{inputValue("City",e.target.value)}} id="" />
                </div>
            </form>
        </div>
    );
};

export default ReactState;