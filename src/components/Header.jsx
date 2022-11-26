import React from 'react'
import styles from './Header.module.scss';
import IconMenu from './icons/Menu';
import { InputSearch } from './InputSearch';

export const Header = ({ handleSearch }) => {
  return (
    <div className={ styles.headerContainer }>
      <div className={ styles.content }>
        <h5 hidden className={ styles.title }>All Countries</h5>
        <button className={ styles.deviceMenu }>
          <IconMenu />
        </button>
        <div className="flex space-x-4">
          <InputSearch handleSearch={ handleSearch } />
        </div>
      </div>
    </div>
  )
}
