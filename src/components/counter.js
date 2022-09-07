import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';


function Counter() {
      const [count, setCount] = useState(0);
    
      return (
        <div>
          <p>You clicked {count} times</p>
           <Button variant="info" onClick={() => setCount(count + 1)}>
           Click or DIE
        </Button>
     </div>
      );
  }


  export default Counter;