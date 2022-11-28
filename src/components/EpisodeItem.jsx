import React from 'react';
import parse from 'html-react-parser';
import DOMPurify from "dompurify";
import styles from './EpisodeItem.module.scss';
import IconDefaultCover from '../assets/images/radio-svgrepo-com.svg';


export const EpisodeItem = ({ data, handleClick }) => {
  
  const descHtml = DOMPurify.sanitize(data?.description || data?.description_original, {
    USE_PROFILES: { html: true },
  });

  return (
    <div className={ styles.episodeItemContainer } key={ data?.id }
      onClick={ event => handleClick(event, data) }>
      <div className={ styles.content }>
        {
          data.thumbnail ? (
            <img className={ styles.episodeImage } src={ data.thumbnail } alt="" />
          ) : (
            <img src={ IconDefaultCover } alt="" width="160" />
          )
        }
        <div className={ styles.descContent }>
          <span className={ styles.title }>{ data?.title || data?.title_original }</span>
          <span className={ styles.desc }>{ parse(descHtml) }</span>
        </div>
      </div>
    </div>
  )
}
