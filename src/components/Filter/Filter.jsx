import s from './Filter.module.css'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Filter extends Component {
  render() {
    const { value, onChange } = this.props
    return (
      <label className={s['label']}>
        <p className={s['text']}>Filter contacts by name</p>
        <input
          className={s['input']}
          type='text'
          value={value}
          onChange={onChange}
        />
      </label>
    )
  }
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}