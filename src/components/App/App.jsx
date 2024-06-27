import { useState, useEffect } from 'react'
// import { Formik, Form, Field } from 'formik';
// import css from '../App/App.module.css';
import initialDates from '../dates.json'
 import ContactList from '../../components/ContactList/ContactList';
 import ContactForm from '../ContactForm/ContactForm';
 import SearchBox from '../SearchBox/SearchBox';
 





function App() {
    // const [dates, setDates] = useState(initialDates);
  
  
    const [filter, setFilter] = useState('');

    

    const [dates, setDates] = useState(() => {
      
      const savedDates = window.localStorage.getItem("contacts");
    
      if (savedDates !== null) {
        return JSON.parse(savedDates);
      }
        return initialDates;
      
    });
    

    useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(dates));
    }, [dates]);
  
  
  
  const visibleTask = dates.filter((date)=>date.name.toLowerCase().includes(filter.toLowerCase()));
  
  
  const addContact = (newContact) => {
    setDates([...dates, newContact]);
  };



const deleteTask = (dateId) => {
  setDates((prevDates) => prevDates.filter((date) => date.id !== dateId));
};

  return (
    <div>
  <h1>Phonebook</h1>
  <ContactForm addContact={addContact}/>
  <SearchBox value={filter} onFilter={setFilter}/>
  <ContactList lists={visibleTask} onDelete={deleteTask}/>
</div>


  )
    
}

export default App
