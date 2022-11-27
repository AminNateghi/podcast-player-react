import React, { useState } from 'react'
import styles from './App.module.scss';
import { Sidebar } from "./components/Sidebar";
import { Outlet } from 'react-router-dom';
import IconPoweredBy from './assets/images/listennotes.png';

export const App = () => {
  const [currentRadio, setCurrentRadio] = useState({});

  return (
    <>
      <Sidebar currentRadio={ currentRadio } />
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className={ styles.appContainer }>
          <div className={ styles.contentGrid }>
            <Outlet />
          </div>
          <div className={ styles.poweredBy }>
            <a target="_blank" href="https://www.listennotes.com/" rel="noreferrer">
              <img alt="Search powered by ListenNotes" src={ IconPoweredBy } width="110px" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

