import React from 'react';
import Link from 'next/link'
import {GetStaticProps} from 'next'

type ListaGames ={  
    id: string,
    name: string,
    image: string,
    data: string,
}

type GamesProps = {
    games: ListaGames[];
}

//{ games, title}

export default function ListaNomes(props: GamesProps ){

    return(
    <div>
        {props.games.length > 0 ? (
        <main>
            <h1>🎮 Top Jogos Da Vida - Diogo 🎮 </h1>
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

            <ol>
                {props.games.map((g,i) => {
                    
                    const position = i + 1;
                    const medals = ["🥇","🥈","🥉","🥉","🥉","🥉","🥉","🥉","🥉","🥉"]

                    return (
                        <li key={g.id}>
                            <span>
                                <span className="indice">
                                    {position}
                                </span>

                                <span className="name">
                                    {medals[i]}
                                    {'   '}
                                    {g.name}
                                </span>
                                <span className="data">
                                {' - '}
                                    {g.data}
                                </span>

                            </span>
                        </li>
                    )
                    
                })}
            </ol>
        </main>
     ) : (
    <div>Carregando...</div>
      )}
    </div>
    )
}

// export const getStaticProps: GetStaticProps = async () =>{
  
//     const { games,title } = await fetch('http://localhost:3000/api/dbApi/dbGames?_limit=5')
      
//     .then(res => {
//         if(res.ok) return res.json()
//       })
//     .then(resObjPromise => resObjPromise)
      
//     return {
//       props:{
//         games,
//         title,
//       },

//       revalidate: 10
//     }
//   }
  

export const getStaticProps: GetStaticProps = async () =>{
  
    const { games,title } = await fetch('http://localhost:3000/api/dbApi/dbGames')
      
    .then(res => {
        if(res.ok) return res.json()
      })
    .then(resObjPromise => resObjPromise)
      
    return {
      props:{
        games,
        title,
      },

      revalidate: 10
    }
  }
