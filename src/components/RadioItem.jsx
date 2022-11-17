import React from 'react';
import styles from './RadioItem.module.scss';
import IconDefaultCover from '../assets/images/default-cover.svg';

export const RadioItem = ({ data, handleClick }) => {
  return (
    <div className={ styles.radioItemContainer } key={ data?.id }
      onClick={ event => handleClick(event, data) }>
      <div className={ styles.content }>
        {
          data.thumbnail ? (
            <img className={ styles.radioImage } src={ data.thumbnail } alt="" />
          ) : (
            <img src={ IconDefaultCover } alt="" width="160" />
          )
        }
        <div>
          <span className={ styles.desc }>{ data?.title }</span>
        </div>
      </div>
    </div>
  )
}


