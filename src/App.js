import React, {useState} from 'react'
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"

function App() {
  const appName = "Grocery Lists"

  const [items, setItems] = useState([
    {
      id: 1,
      name: "Soda Pop",
      price: 50,
      checked: false
    },
    {
      id: 2,
      name: "Crackers",
      price: 10,
      checked: true
    },
    {
      id: 3,
      name: "Pizza",
      price: 25,
      checked: true
    }
  ])

  const handleDelete = (id) => {
    const itemsLeft = items.filter((item) => item.id !==id)
    setItems(itemsLeft)
  }

  return (
    <React.Fragment>
      <Header appName={appName} />
          <Content
          items={items}
            handleDelete={handleDelete}
          />
      <Footer />
    </React.Fragment>
  );
}

export default App;
