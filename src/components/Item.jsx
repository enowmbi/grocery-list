import "../styles/item.css"



const Item = ({ id, checked, name, handleChange, handleDelete }) => {
    return (
        <section>
            <input
                type="checkbox"
                checked={checked}
                onChange ={()=> handleChange(id)}
            />
            <label>{name}</label>
            <button onClick={() => handleDelete(id)}>Delete</button>
        </section>
    )
}

export default Item