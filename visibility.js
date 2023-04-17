//an magic message revealing itself at the click of an button.

 class Visibility extends React.Component{
    constructor(props){
        super(props)
        this.handleToggle = this.handleToggle.bind(this)
        this.state = {
            toggleValue: false
        };
    }
    handleToggle(){
        this.setState((e)=>{
            return {
                toggleValue: !e.toggleValue
            }
        })
    }

    render() {
        return (
            <div>
            <h4>Click the button to reveal secret message.</h4>
            <button onClick={this.handleToggle} >click me</button>
            <p hidden={this.state.toggleValue}>YOU ARE GORGEOUS!!!</p>
            </div>
        );
    }
}
ReactDOM.render(<Visibility />,document.getElementById('app'));

/*
const appRoot = document.getElementById('app');

let count=1;
const reveal = ()=>{
    count++;
    render();
}

const render = ()=>{
    const template = (
        <div>
        <h2>Visibility Toggle App</h2>
        <button onClick={reveal}>{count%2==0?'click to hide':'click to show'}</button>
        {count%2==0?<p>Here is the MAGIC!!!!</p>:<p hidden>Here is the MAGIC!!!!</p>}
        </div>
    );
    
    ReactDOM.render(template,appRoot); 
}
render();
*/