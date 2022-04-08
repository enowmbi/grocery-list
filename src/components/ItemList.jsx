import Item from "./Item"

const ItemList = ({items, handleDelete}) =>{
    return(
        items.map((item)=>{
            return(
                <Item
                id={item.id}
                checked={item.checked}
                name={item.name}
                price={item.price}
                handleDelete={handleDelete}
                />
            )

        })
    )
}

export default ItemList