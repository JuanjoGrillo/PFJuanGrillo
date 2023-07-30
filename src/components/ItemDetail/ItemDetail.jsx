import { useParams } from "react-router-dom"

const ItemDetail = () => {
    
    const { categoria, id } = useParams()

    console.log(categoria, id)

    return(
        <>
            <p>ItemDetail</p>
        </>
    )
}

export default ItemDetail