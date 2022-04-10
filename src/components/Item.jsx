import "../styles/item.css"



const Item = ({ id, checked, name, price, handleChange, handleDelete }) => {
    return (
        <section>
            <input
                type="checkbox"
                checked={checked}
                onChange ={()=> handleChange(id)}
            />
            <label>{name}</label>
            <label>{price}</label>
            <button onClick={() => handleDelete(id)}>Delete</button>
        </section>
    )
}

export default Item