import React from 'react';

import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

import styles from './styles.module.scss';


export default function Header(props){

   const currentDate = format(new Date(), 'EEEEEE, d MMMM',{
       locale: ptBR
   });

   console.log(props.title)

    return(
      <header className={styles.headerContainer}>
          <img src="/logo.svg" alt="MetaSmart" />
          <span>{props.title}</span>
          <span>{currentDate}</span>
      </header>
    );
}

export async function getServerSideProps(){
  
  const title = await fetch('http://localhost:3000/api/dbApi/db')
    
  .then(res => {
      if(res.ok) return res.json()
    })
    .then(resObjPromise => resObjPromise)
    
  return {
    props:{
      title
    }
  }
}