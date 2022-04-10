import ItemList from "./ItemList"
import "../styles/content.css"

const Content = ({ items, handleChange,checked, handleDelete }) => {
    return (
        <main>
            <ItemList
                items={items}
                handleChange={handleChange}
                handleDelete={handleDelete}
            />
        </main>
    )

}

export default Content