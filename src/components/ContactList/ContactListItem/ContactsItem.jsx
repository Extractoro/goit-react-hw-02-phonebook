import PropTypes from 'prop-types'
import React, { Component } from 'react'
import s from './ContactsItem.module.css'

export class ContactsItem extends Component {
  render() {
    const { id, name, number, onDeleteContact } = this.props
    return (
      <li className={s['item']}>
        <button
          onClick={() => onDeleteContact(id)}
          className={s['button']}
          type='Submit'>
          x
        </button>
        <div className={s['wrapper']}>
          <p className={s['text']}>{name}:</p>
          <p className={s['number']}>{number}</p>
        </div>
      </li>
    )
  }
}

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired, 
  name: PropTypes.string.isRequired, 
  number: PropTypes.string.isRequired
}