import React, { useEffect, useState } from 'react'
import Header from "./components/Header"
import NewItemForm from "./components/NewItemForm"
import Content from "./components/Content"
import Footer from "./components/Footer"

function App() {
    const appName = "Grocery Lists"

    const [items, setItems] = useState([])
    const [newItemName, setNewItemName] = useState('')

    useEffect(()=>{
      setItems(JSON.parse(localStorage.getItem('listItems')))
    },[])

    const handleChange = (id) =>{
      const listItems = items.map((item)=> item.id === id ? { ...item, checked: !item.checked} : item)
      setItems(listItems)
      localStorage.setItem('listItems', JSON.stringify(listItems))
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id)
        setItems(listItems)
        localStorage.setItem('listItems', JSON.stringify(listItems))
    }

const handleNewItemFormSubmit =(event) =>{
      event.preventDefault();
      const id = items.length ? items[items.length - 1].id + 1 : 0
      const item = {id: id, name: newItemName, checked: false}
      const listItems = [...items, item]
      setItems(listItems)
      localStorage.setItem('listItems', JSON.stringify(listItems))
    }

  return (
    <React.Fragment>
      <Header appName={appName} />

      <NewItemForm
        handleNewItemFormSubmit={handleNewItemFormSubmit}
        newItemName={newItemName}
        setNewItemName={setNewItemName}
      />

      <Content
        items={items}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />

      <Footer />
    </React.Fragment>
  );
}

export default App;