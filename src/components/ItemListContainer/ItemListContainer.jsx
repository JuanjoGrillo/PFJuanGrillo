import { useParams } from "react-router-dom"

const ItemListContainer = () => {

    const { categoria } = useParams()


    // Aca es donde se decide si desplegar todos los items o 
    // establecer un filtro 
    if(categoria) {
        console.log("categoria")
    } else {
        console.log("tienda")
    }

    return(
        <>
            <p>ItemListContainer</p>
            <button onClick={handleSignOut}>Sign out</button>
        </>
    )
}

export default ItemListContainer