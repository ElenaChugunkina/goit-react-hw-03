import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useId } from 'react';
import * as Yup from "yup";


const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
 number: Yup.string().min(5,"Must be a valid number!").required("Required"),
   
  });


const ContactForm = ({addContact}) => {
    
    const initialValues = {
        name: "",
        number: "",
        
      };
      const nameFieldId = useId();
      const numberFieldId = useId();

      const handleSubmit = (values, actions) => {
        const newContact = {
          id: nanoid(),
          name: values.name,
          number: values.number,
        };
        addContact(newContact);
        actions.resetForm();
      };

      
      

      return (
        <Formik 
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}>
            <Form className={css.container}>
                <div className={css.style}> 
                    <label htmlFor={nameFieldId}>Name</label>
                <Field className={css.field} type="text" name="name" id={nameFieldId} />
                <ErrorMessage name="name" component="div" style={{ color: 'red', fontSize: '12px', marginTop: '5px' }} />
                </div>
                <div className={css.style}>
                    <label htmlFor={numberFieldId}>Number</label>
                <Field className={css.field} type="tel" name="number" id={numberFieldId} />
            <ErrorMessage name="number" component="div" style={{ color: 'red', fontSize: '12px', marginTop: '5px' }} />
            </div>
                
                
                <button className={css.btn} type="submit">Add contact</button>
            </Form>
            
        </Formik>
      )
}


export default ContactForm;