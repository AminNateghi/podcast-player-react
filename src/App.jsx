import React, { useState } from 'react'
import styles from './App.module.scss';
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Outlet } from 'react-router-dom';

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
        </div>
      </div>
    </>
  )
}

