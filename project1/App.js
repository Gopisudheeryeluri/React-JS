{/* <div id="root">
    <h1>hi this is h1 tag</h1>
</div> */}
// const heading = React.createElement('h1', {}, "hello world React");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);



{/* <div id="root">
    <div id="parent">
        <div id="child">
            <h1>hi this is h1 tag</h1>
        </div>
    </div>
</div> */}
// const parent = React.createElement('div',{id:'parent'}, 
//     React.createElement('div',{id:'child'},
//         React.createElement('h1',{},'hi this is h1 tag')
//     )
// );
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);



{/* <div id="root">
    <div id="parent">
        <div id="child">
            <h1>hi this is h1 tag</h1>
            <h2>hi this is h2 tag</h2>
        </div>
    </div>
</div> */}
// const heading = React.createElement('div', {id:'parent'}, 
//     React.createElement('div',{id:'child'},[
//         React.createElement('h1', {}, 'hi this is h1 tag'),
//         React.createElement('h2', {}, 'hi this is h2 tag')
//         ]  
//     )
// );
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);



{/* <div id="root">
    <div id="parent">
        <div id="child1">
            <h1>hi this is child1 h1 tag</h1>
            <h2>hi this is child1 h2 tag</h2>
        </div>
        <div id="child2">
            <h1>hi this is child2 h1 tag</h1>
            <h2>hi this is child2 h2 tag</h2>
        </div>
    </div>
</div> */}

const heading = React.createElement('div', {id:'parent'}, [
    React.createElement('div',{id:'child1'},[
        React.createElement('h1', {}, 'hi this is child1 h1 tag'),
        React.createElement('h2', {}, 'hi this is child1 h2 tag')
        ]  
    ),
    React.createElement('div',{id:'child2'},[
        React.createElement('h1', {}, 'hi this is child2 h1 tag'),
        React.createElement('h2', {}, 'hi this is child2 h2 tag')
        ]  
    )
    ]  
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);