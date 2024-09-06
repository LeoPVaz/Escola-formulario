type Props = {
    name: string;
    avatar?: string;
    roule: string[];
    address?: string;
}

export const Persona = ( {
    name, 
    avatar = "https://images.pexels.com/photos/16002208/pexels-photo-16002208/free-photo-of-moda-tendencia-pessoas-mulher.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    roule}: Props) => {
    
    return (
        <div className="p-3">
        <h1>Nome: {name}</h1>
        <img src={avatar} alt="Anna"  className="w-40 "/>
        <ul>
            <li>{roule[0]}</li>
            <li>{roule[1]}</li>
        </ul>
        </div>
        
    )
}