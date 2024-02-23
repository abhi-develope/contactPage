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

      <form action="">
        <div className={styles.form_control}>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' />
        </div>
      </form>
     </div>
    </section>
  )
}

export default ContactForm
