
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [pokemon, setPokemon] = useState([]);

  console.log('pokemon', pokemon)
  useEffect(() => {
    async function getPokemon() {
      const resp = await fetch(
        "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
      );
      setPokemon(await resp.json());
    }

    getPokemon();
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon List</title>
      </Head>

      <h2>Pokemon List</h2>
      <div className={styles.grid}>
        {pokemon?.map((pokemon) => (
          <div className={styles.card} key={pokemon.id}>

            <Link href={`/pokemon/${pokemon.id}`}>
              <img
                src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                alt={pokemon.name}
              />
              <h3>{pokemon.name}</h3>
            </Link>

          </div>
        ))}
      </div>

    </div>
  )
}
