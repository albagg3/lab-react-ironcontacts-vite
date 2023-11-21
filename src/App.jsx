import "./App.css";
import contactsData from "./contacts.json"
import { useState } from 'react'

function App() {
  const fiveContacts = [];
  for(let i = 0; i <  5; i++)
  {
    fiveContacts.push(contactsData[i]);
  }
  const [contacts, setContacts] = useState(fiveContacts)
  
  const addRandomContact = () =>{
    let randomNumber = Math.floor(Math.random() * contactsData.length)
    const displayedContacts = [...contacts]
    let isRepeated = false;
    while(!isRepeated)
    {
      if(displayedContacts.includes(contactsData[randomNumber]))
        randomNumber = Math.floor(Math.random() * contactsData.length)
      else
      {
        isRepeated = true;
        displayedContacts.push(contactsData[randomNumber]);
      }
    }
    setContacts(displayedContacts);
  }

  const sortByPopularity = () =>{
    const sortedByPopularity = [...contacts]
    sortedByPopularity.sort((a,b)=>{
      return b.popularity - a.popularity;
    })
    setContacts(sortedByPopularity)
  }

  const sortByName = () =>{
    const sortedByName = [...contacts]
    sortedByName.sort((a,b)=>{
      return a.name.localeCompare(b.name)
    })
    setContacts(sortedByName)
  }
  const deleteContact = (contactId) =>{
    const filteredContact = contacts.filter((actor)=>{
      return contactId !== actor.id;
    }) 
    setContacts(filteredContact);
  }
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={()=>addRandomContact()}>Add Random Contact</button>
      <button onClick={()=>sortByName()}>Sort by name</button>
      <button onClick={()=>sortByPopularity()}>Sort by popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
      {
        contacts.map((contact)=>{
          return (
                <tr key={contact.id}>
                  <td><img className="img" src={contact.pictureUrl} alt="" /></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td>{contact.wonOscar ? "🏆" : ""}</td>
                  <td>{contact.wonEmmy && "💥"}</td>
                  <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
                </tr>
          )
        })
      }
        </tbody>
      </table>
    </div>
  );
}

export default App;
