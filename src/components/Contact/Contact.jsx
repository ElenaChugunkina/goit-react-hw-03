import { MdPerson } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import css from '../../components/Contact/Contact.module.css';


const Contact = ({list, onDelete}) => {

    return (
        <div className={css.container}>
            <div > 
            <p><MdPerson />  {list.name}</p>
        <p><FaPhoneAlt />  {list.number}</p>
            </div>
            
        
        <button className={css.btn} onClick={() => onDelete(list.id)}>Delete</button>
        </div>
        

    )
}

export default Contact;