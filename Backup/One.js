import React from 'react'
import Two from './Two'

function One() {
    let name="hari"
    let image="https://tse3.mm.bing.net/th?id=OIP.y6ggnJ6f8YZxXBn1Ua95BwHaE8&pid=Api&P=0&w=259&h=173"
    return (
        <div>
            <Two name={name} image={image}/>
        </div>
    );
}

export default One;
