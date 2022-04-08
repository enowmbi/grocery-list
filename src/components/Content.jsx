import ItemList from "./ItemList"
import "../styles/content.css"

const Content = ({items, handleDelete}) => {
return(
    <main>
                <ItemList
                items={items}
                 handleDelete={handleDelete} />
    </main>
)

}

export default Content