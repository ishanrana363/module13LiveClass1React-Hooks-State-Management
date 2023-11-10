
import { useState } from 'react';

const ReactState = () => {
    const [count ,setCount] = useState(0)
    return (
        <div>
            {count} <br/>
            <button onClick={()=>setCount(count+1)} >
                Click
            </button>
        </div>
    );
};

export default ReactState;