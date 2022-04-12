import "../styles/new-item-form.css"

const NewItemForm = ({ newItemName, setNewItemName, handleNewItemFormSubmit }) => {
    return (
        <section>
            <form onSubmit={handleNewItemFormSubmit}>
                <input
                    id="addItem"
                    autoFocus
                    type="text"
                    value={newItemName}
                    placeholder="Enter item name and press enter"
                    required
                    onChange={(e) => setNewItemName(e.target.value)}
                />
                <button
                    onClick={(e)=> handleNewItemFormSubmit(e)}>
                    Add Item
                </button>
            </form>
        </section>
    )
}

export default NewItemForm