interface Props {
    myName: string,
    myColor: string,
    myAge: number
}

export default function Greeting(props:Props){
    return <p>My name is {props.myName} and my favorite color is {props.myColor} and I am {props.myAge} years old</p>
}