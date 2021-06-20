import {GetServerSideProps} from 'next';
import React from 'react'
import Link from 'next/link'

// import S from '../styles/global.scss';
import styles from './styles.module.scss';

export default function Home(props) {

  const consultores = props.temploe2e;
  
  //Filter por ID
  const isName = filterName => filterName.id === '1';
  const isNames = consultores.filter(isName);
  
  const NomeConsultores = isNames.map((c,i)=>( 
    <p> {c.consultor}</p> 
    ));
  
  const TotalVR = isNames.map((c,i)=>( 
      c.VR 
      ));

  const MetaTotalVR = isNames.map((c,i)=>( 
     c.VRobjetivo
  ));
  
  console.log(MetaTotalVR)


  const NovoConsultores = isNames.map((c,i)=>(
    
<>
    <div className={styles.container}> 
     
      {
       TotalVR < MetaTotalVR
      ? 
      <div className={styles.cardnegativo}> 
          <p> Vistoria Aprovada:</p>
          <h1>{c.VR}</h1>
          <small>Meta: {c.VRobjetivo}</small><br />
      </div>
      :
      <div className={styles.card}> 
          <p> Vistoria Aprovada:</p>
          <h1>{c.VR}</h1>
          <small>Meta: {c.VRobjetivo}</small><br />
      </div>
      }
  
    </div>

   <div className={styles.container}>
    <div className = {styles.carterizadas}>
        <p> Carterizadas:</p>
        <h1>{c.carteirizadas}</h1>
        <small>Meta: Rodada livre</small><br />
    </div>
   </div>

   <div className={styles.container}>
    <div className = {styles.card}>
        <p> Pasta Completa:</p>
        <h1>{c.PC}</h1>
        <small>Meta: {c.PCobjetivo}</small><br />
    </div>
   </div>
</>

  ));


  return (
    <div>
        <nav>
            <Link href="/">
              <a>Home</a>
            </Link>{' '}
            |{' '}
            <Link href="/card/listaCard">
            <a>Lita de Jogos</a>
            </Link>{' '}
            |{' '}
            <Link href="/Cards/cards">
              <a>Reletório Geral</a>
            </Link>
          </nav>
          {NomeConsultores}
        <div className = {styles.content}>
          {NovoConsultores}
        </div>
    </div>
  )  
}

export async function getServerSideProps(){
  
    const { temploe2e,title } = await fetch('http://localhost:3000/api/dbApi/db')
      
    .then(res => {
        if(res.ok) return res.json()
      })
      .then(resObjPromise => resObjPromise)
      
    return {
      props:{
        temploe2e,
        title
      }
    }
  }