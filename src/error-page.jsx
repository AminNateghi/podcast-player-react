import React from 'react';
import { useRouteError } from "react-router-dom";
import styles from "./error-page.module.scss";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={ styles.errorPage }>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{ error.statusText || error.message }</i>
      </p>
      <a href="/" >
        Back to main page
      </a>
    </div>
  );
}