import Header from './components/Header';
import Content from './components/content/Content';
import Footer from './components/Footer';
import AddItem from './components/addItem/AddItem';
import SearchItem from './components/search/SearchItem';
import apiReq from './apiRequest';

import React, {useState, useEffect} from 'react'

function App() {
  const api_url =  'http://localhost:3500/items';

  const [items,setItems] = useState([]);
  const [newItem,setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setfetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const fetchItems = async () => {
      try{
        const response = await fetch(api_url);
        if(!response.ok) throw Error('Did not receive expected data');
        const listItems = await response.json();
        setItems(listItems)
        setfetchError(null)
      }
      catch(e){
        setfetchError(e.message)
      }
      finally {
        setIsLoading(false);
      }
    }
    
    setTimeout(async ()=>{
      await fetchItems();
    },2000)
    
  },[]);

  const addItem = async (item) => {
    const id = items.length ? items[items.length-1].id + 1 : 1;
    const add = {id, checked: false, item}
    const newList = [...items, add]
    setItems(newList)

    const postOption = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(add)
    }
    const result = await apiReq(api_url,postOption);
    if(result) fetchError(result)
  };

  const handleCheck = async (id) => {
    const newList = items.map(item => 
      item.id === id ? {...item, checked: !item.checked} : item);
      setItems(newList);

      const myItem = newList.filter(item => item.id === id)
      const updateOptions = {
        method:'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({checked: myItem[0].checked})
      }
      const reqUrl = `${api_url}/${id}`
      const result = await apiReq(reqUrl,updateOptions)
      if(result) fetchError(result)
  };

  const handleDelete = async (id) => {
    const newList = items.filter(item => item.id !== id)
    setItems(newList)

    const deleteOptions = {method: 'DELETE'}
    const reqUrl = `${api_url}/${id}`
    const result = await apiReq(reqUrl, deleteOptions)
    if(result) fetchError(result)
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!newItem) return
    addItem(newItem)
    setNewItem('')
  };

  return (
    <div className='App'>
      <Header title={"Groceries List"}/>

      <AddItem
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />

      <SearchItem 
        search={search} 
        setSearch={setSearch}
      />

      <main>
        {isLoading && <p>Loading items...</p>}
        {fetchError && <p style={{color:'red'}}>{`Error: ${fetchError}`}</p>}
        { !fetchError && !isLoading && <Content
          items={items.filter( item=>
            (item.item).toLowerCase().includes(search.toLowerCase()) )}
          handleCheck={handleCheck}
          handleDelete = {handleDelete}
        />}
      </main>

      <Footer
        length={items.length}
      />
    </div>
  );
}

export default App;
