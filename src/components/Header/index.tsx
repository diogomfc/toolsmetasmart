import React from 'react';

import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

import styles from './styles.module.scss';


export default function Header(){

   const currentDate = format(new Date(), 'EEEEEE, d MMMM',{
       locale: ptBR
   });

    return(
      <header className={styles.headerContainer}>
          <img src="/logo.svg" alt="MetaSmart" />
          <span>Meta Smart</span>
          <span>{currentDate}</span>
      </header>
    );
}
