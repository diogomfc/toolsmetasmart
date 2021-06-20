import Link from 'next/link'

const ListaHome = (props) => (
  <div>
    <h1>Titulo Banco de dados</h1>
    <p>
      {props.title}
    </p>
    
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
        </Link>{' '}
        |{' '}
        <Link href="/card/listaNomes">
        <a>Lista Nomes</a>
        </Link>
      </nav>
   
  </div>
)

//conexao com a planilha
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

export default ListaHome







