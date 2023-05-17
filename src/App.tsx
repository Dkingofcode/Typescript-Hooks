import React, { useState } from 'react';
import './App.css';
import Hook from "./2-hooks.tsx";
import Network from "./3-network.tsx";
import Context from "./4-context.tsx";

function Button({
  children, styles, ...rest
}: {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & {styles: React.CSSProperties;} ) {
  return <button style={styles} {...rest}>{children}</button>;
}



interface BoxProps{
  children: React.ReactNode;
}

function Box({ children, ...styles }: BoxProps & React.CSSProperties){
  return <div style={styles}>{children}</div>;
}

interface ChildComponentProps{
  title: string;
  body: string;
  children: React.ReactNode;
}



function ChildComponent({title, body, children }: ChildComponentProps){

  return (  
  <>
      <Box display="flex">this is the box children</Box>
    <h1>{title}</h1>

    <p>{body}</p>

    <div>{children}</div>
  </>
  ); 
}

function App() {

  return (
    <>
    <div className='App'>
    <Button onClick={(e) => console.log(e)} styles={{ backgroundColor: "blue"}}>This is a button</Button>
        <ChildComponent title="This is a title" body="this is a body">
          This is the child component
        </ChildComponent>
    <Hook />
    <Network />    
    <Context />
    </div>
    </>
  )
}

export default App;
