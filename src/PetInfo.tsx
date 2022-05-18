import { useState } from "react"

interface Pet {
    name: string,
    breed: string
}

export default function PetInfo(){
    const [pet, setPet] = useState<Pet>({name:"Willy", breed: "Killer Whale"});
    return (
        <div>
            <h2>My pet {pet.breed}'s name is {pet.name}</h2>
        </div>
    );
}