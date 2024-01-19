
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Details.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Details() {

    const { query: { id } } = useRouter();
    const [pokemon, setPokemon] = useState(null);

    console.log('pokemon', pokemon)
    useEffect(() => {
        async function getPokemon() {
            const resp = await fetch(
                `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${id}.json`
            );
            setPokemon(await resp.json());
        }
        if (id) {
            getPokemon();

        }
    }, [id]);

    if (!pokemon) {
        return null;
    }

    return (
        <div>
            <Head>
                <title>{pokemon.name}</title>
            </Head>
            <h2>{pokemon.name}</h2>

            <Link href='/'>
                Back to Home
            </Link>
        </div>
    )
}