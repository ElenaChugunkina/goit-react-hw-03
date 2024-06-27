import Contact from "../Contact/Contact"
import css from './ContactList.module.css'

const ContactList = ({lists, onDelete}) => {
    return (
        <ul className={css.container}>
        {lists.map((list) => (
            <li className={css.list} key={list.id}>
                <Contact list={list}  onDelete={onDelete}/>
            </li>

        ))}
    </ul>
    );
};

export default ContactList;