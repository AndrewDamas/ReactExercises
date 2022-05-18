export default function Things(){
    const gadgets = ["computer", "microphone", "interface", "lenses"];

    return (
        <div>
            {gadgets.map((gadget, index) => <h1 key={gadget}> {gadget}</h1>)}
        </div>
    )
}
