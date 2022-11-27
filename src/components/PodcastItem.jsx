import React from 'react';
import styles from './PodcastItem.module.scss';
import IconDefaultCover from '../assets/images/radio-svgrepo-com.svg';

export const PodcastItem = ({ data, handleClick }) => {
  return (
    <div className={ styles.podcastItemContainer } key={ data?.id }
      onClick={ event => handleClick(event, data) }>
      <div className={ styles.content }>
        {
          data.thumbnail ? (
            <img className={ styles.podcastImage } src={ data.thumbnail } alt="" />
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
