import PropTypes from 'prop-types'
import React, { Component } from 'react'
import s from './ContactList.module.css'
import { ContactsItem } from './ContactListItem'

export class ContactList extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props
    return (
      <>
        <p>Total contacts: {contacts.length}</p>
        <ul className={s['list']}>
          {contacts.map(({ id, name, number }) => (
            <ContactsItem
              key={id}
              name={name}
              number={number}
              id={id}
              onDeleteContact={onDeleteContact}
            />
          ))}
        </ul>
      </>
    )
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, 
      name: PropTypes.string.isRequired, 
      number: PropTypes.string.isRequired
    })
    
  )
}