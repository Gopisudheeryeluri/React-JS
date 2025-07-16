import ReactDOM from 'react-dom/client';

//React element jsx
// const jsxHeading = <h1>hi, i'm gopi sudheer</h1>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(jsxHeading);

//React component
// const Heading = () => { //this is a java script function and first letter should be capital for component
//     return (    
//         <div> 
//             <h1>This is react component</h1>
//             <Title/>
//         </div>
//     )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Heading/>);


const Title = () =>(   
    <h2>this is title</h2>
)

const Heading = () => { 
    return (    
        <div> 
            <h1>This is a react component</h1>
            <Title></Title>                      {/*   we can call a component like this   */}
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Heading/>);



//if we have a recat element instead of component then we can call in {}
// const title = () => {
//     return (   
//             <h2>this is title</h2>
//     )
// }

// const Heading = () => { 
//     return (    
//         <div> 
//             <h1>This is a react component</h1>
//             {title()}           {/*   we can call a react element like this   */}
//         </div>
//     )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Heading/>);

;