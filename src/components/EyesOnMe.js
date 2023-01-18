// Code EyesOnMe Component Here

function EyesOnMe() {
    return (
        <button onFocus={focus => console.log('Good!')} onBlur={blur => console.log('Hey! Eyes on me!')}>Eyes on me</button>
    )
}

export default EyesOnMe;
