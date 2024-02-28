import React from 'react'
import styles from './Contact.module.css'
import Button from '../Button/Button'
import { MdOutlineMessage,MdAddCall, MdOutlineMail } from "react-icons/md";


const ContactForm = () => {
  return (
    <section className={styles.container}>
    <div className={styles.contact_form}>
      <div className={styles.top_btn}>
      <Button text='VIA SUPPORT CHAT' icon={<MdOutlineMessage fontSize='1.8rem' />}/>
      <Button text='VIA CALL' icon={<MdAddCall fontSize='1.8rem' />}/>
      </div>
      <Button isOutline = {true} text='VIA EMAIL' icon={<MdOutlineMail fontSize='1.8rem' />}/>

      <form>
        <div className={styles.form_control}>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' />
        </div>
        <div className={styles.form_control}>
        <label htmlFor="email">Email</label>
        <input type="email" name='email' />
        </div>
        <div className={styles.form_control}>
        <label htmlFor="text">Text</label>
        <textarea  name='text' rows="8" />
        </div>
        <div 
        style={{display: "flex",justifyContent: "end"}}>
        <Button text='SUBMIT BUTTON' />
        </div>
      </form>
     </div>
     <div className={styles.contact_image}><img src="images/contact.png" alt="" /></div>
    </section>
  )
}

export default ContactForm
