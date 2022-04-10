import React, { useEffect, useState } from 'react'
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"

function App() {
    const appName = "Grocery Lists"

    const [items, setItems] = useState([])
    useEffect(()=>{
      setItems(JSON.parse(localStorage.getItem('listItems')))
    },[])

    const handleChange = (id) =>{
      const listItems = items.map((item)=> item.id === id ? { ...item, checked: !item.checked} : item)
      setItems(listItems)
      localStorage.setItem('listItems', JSON.stringify(listItems))
    }

    const handleDelete = (id) => {
        const itemsLeft = items.filter((item) => item.id !== id)
        setItems(itemsLeft)
    }

  return (
    <React.Fragment>
      <Header appName={appName} />
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