import { useParams } from "react-router-dom"

const ItemListContainer = () => {

    const { categoria } = useParams()

    if(categoria) {
        console.log("categoria")
    } else {
        console.log("tienda")
    }

    return(
        <>
            <p>ItemListContainer</p>
        </>
    )
}

export default ItemListContainer