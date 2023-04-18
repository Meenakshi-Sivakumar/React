console.log("my app is running!");

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react
//JSX - JavaScript XML

const appRoot = document.getElementById('app');
const app = {
    title: 'Indecision App',
    subTitle: 'Lemme help you decide.',
    options: []
};

const submit = (e)=>{
    e.preventDefault();

    const inputValue = e.target.elements.option.value;
    console.log(inputValue);

    if(inputValue){
        app.options.push(inputValue);
        e.target.elements.option.value = '';
        render();
    }
}
const remove = ()=>{
    app.options = [];
    render();
}
const makeDecision = ()=>{
    const randomNum = Math.floor(Math.random() * app.options.length);
    alert(app.options[randomNum])
    render();
}

const render = ()=>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{app.options.length>0?'There are some options ':'No-option'}</p>
            <button disabled={app.options.length==0} onClick={makeDecision}>Decide for me!</button>
            <button onClick = {remove}>Remove all</button>
            <ol>
            {
                app.options.map(e=><li key={e}>{e}</li>)
            }
            </ol>
        <form onSubmit={submit}>
            <input type='text' id='option'></input>
            <button>Add Option</button>
        </form>
        </div>
    );
    
    ReactDOM.render(template,appRoot);
}
render();