// stateless functional component.
//simple and stupid components can be converted into stateless functional components.
//can take props
//faster and less complex, thus try to use when possible.

//convert class component -> stateless functional componnet: 
//1. Creat a function using the same name (first letter cap).
//2. Copy the render function body to the new function body.
//3. Remove all the 'this' keyword from the body, as 'this' keyword does not support under stateless functional components.

const user ={
    name: 'meenu',
    age: 22,
}


const getMood = (e)=>{
    e.preventDefault;
    const moodIn = e.target.elements.input.value;
    user.mood = moodIn;
    e.target.elements.input.value = ''
    render()
}
//stateless functional component
const render = ()=>{
    const User = (props) => {
        return (
            <div>
                <p>Name: {user.name}</p>
                <p>Age: {user.age}</p>
                <p>Mood: {props.mood}</p>
                <form onSubmit={getMood}>
                <input type='text' id='input'></input>
                <button type="submit">enter</button>
                </form>
            </div>
        );
    };
    //defaultProps = obj.
    User.defaultProps = {
    mood : 'No mood been trackered'
    }
    //props can be passed using the same method but no 'this'
    ReactDOM.render(<User mood={user.mood}/>,document.getElementById('app'))
    
}
render()
