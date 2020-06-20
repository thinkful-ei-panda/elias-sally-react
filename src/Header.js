import React from 'react';

export default function Header(props) {
  return (
    <header className="title"> 
    <h1>About Sally</h1>
    <img src={props.url}/>
    </header>
  );
}
