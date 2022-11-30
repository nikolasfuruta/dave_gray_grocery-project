import React from 'react';
import ItemList from './ItemList';

function Content({items, handleCheck, handleDelete}) {

  return (
    <>
    {items.length
      ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete = {handleDelete}
        />
      ) 
      : (
        <p style={{marginTop:"2rem"}}>Your List is empty!</p>
      )}
    </>
  )
}

export default Content

// const handleName = () => {
//   const names = ['Sabrina','Luiz','Suely'];
//   const index = Math.floor(Math.random()*3);
//   setName(names[index])
// }

// const handleClick = (e) => {
//   alert('You Clicked!');
//   handleClick2(e);
// }
// const handleClick2 = (e) => {
//   setCount(count+1)
//   alert(count)
//   handleClick3(e)
// }
// const handleClick3 = (e) => {
//   alert(e.target.innerText)
// }

// return (
//   <main>
//     <p>Hello, {count}!</p>
//     <button onClick={handleClick} type="submit">Click it!</button>
//     <button style={{marginTop:'10px'}} onClick={handleName} type="submit">Change Name</button>
//   </main>
// )