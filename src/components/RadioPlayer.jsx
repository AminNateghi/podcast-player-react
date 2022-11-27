import React from 'react';
import IconDefaultCover from './../assets/images/radio-svgrepo-com.svg';
import IconPause from './../assets/images/pause-svgrepo-com.svg';
import IconPlay from './../assets/images/play-svgrepo-com.svg';
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
            <img src={ IconDefaultCover } alt="" width="100" />
        }
        <div className={ styles.radioTitle }>{ currentRadio.title }</div>
        <span className={ styles.radioDesc }>{ currentRadio.desc }</span>
      </div>
      <div className={ styles.player }>
        <div className={ `${ styles.button } ${ radioInPlay ? styles.played : styles.paused }` }>
          { radioInPlay ? (
            <img alt="" src={IconPlay}  width="32"/>
            ) : (
            <img alt="" src={IconPause} width="32"/>
          ) }
        </div>
      </div>
    </div >
  )
}
