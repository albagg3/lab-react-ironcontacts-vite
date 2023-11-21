import "./App.css";
import contactsData from "./contacts.json"
import { useState } from 'react'

function App() {
  const fiveContacts = [];
  for(let i = 0; i <  5; i++)
  {
    fiveContacts.push(contactsData[i]);
  }
  // console.log(fiveContacts);
  const [contacts, setContacts] = useState(fiveContacts)
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
      {
        contacts.map((contact)=>{
          return (
                <tr>
                  <td><img className="img" src={contact.pictureUrl} alt="" /></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td>{contact.wonOscar ? "🏆" : ""}</td>
                  <td>{contact.wonEmmy && "💥"}</td>
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
