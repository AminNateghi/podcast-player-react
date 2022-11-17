import React from 'react';
import IconDefaultCover from '../assets/images/default-cover.svg';
import IconPause from './icons/Pause';
import IconPlay from './icons/Play';
import styles from './RadioPlayer.module.scss';

export const RadioPlayer = (props) => {
  const radioInPlay = false;
  const { currentRadio } = props.currentRadio;

  return (
    <div className={ styles.radioContainer } >
      <div className={ styles.cover }>
        {
          currentRadio?.thumbnail ?
            <img src={ currentRadio.thumbnail } alt="" className={ styles.radioImage } /> :
            <img src={ IconDefaultCover } alt="" width="160" />
        }
        <div className={ styles.radioTitle }>{ currentRadio.title }</div>
        <span className={ styles.radioDesc }>{ currentRadio.desc }</span>
      </div>
      <div className={ styles.player }>
        <div className={ `${ styles.button } ${ radioInPlay ? styles.played : styles.paused }` }>
          { radioInPlay ? (
            <IconPlay />
          ) : (
            <IconPause />
          ) }
        </div>
      </div>
    </div >
  )
}
