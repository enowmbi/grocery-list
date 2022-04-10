import Item from "./Item"

const ItemList = ({items, handleChange, handleDelete}) =>{
    return(
        items.map((item)=>{
            return(
                <Item
                key={item.id}
                id={item.id}
                checked={item.checked}
                name={item.name}
                price={item.price}
                handleChange={handleChange}
                handleDelete={handleDelete}
                />
            )

        })
    )
}

export default ItemList