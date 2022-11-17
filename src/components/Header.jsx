import React, { Component } from 'react'
import styles from './Header.module.scss';
import IconMenu from './icons/Menu';
import InputSearch from './InputSearch';

export default class Header extends Component {
  render() {
    return (
      <div className={ styles.headerContainer }>
        <div className={ styles.content }>
          <h5 hidden className={ styles.title }>All Countries</h5>
          <button className={ styles.deviceMenu }>
            <IconMenu />
          </button>
          <div className="flex space-x-4">
            <InputSearch />
          </div>
        </div>
      </div>
    )
  }
}
