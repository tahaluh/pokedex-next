import Image from "next/image";
import styles from "../../styles/Pokemon.module.css";

import { useRouter } from "next/router";

export async function getStaticPaths() {
  const maxPokemons = 151;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  // params

  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context.params.pokemonId;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  return {
    props: { pokemon: data },
  };
}

export default function Pokemon({ pokemon }) {

    const router = useRouter()

    if(router.isFallback) {
        return <div>Carregando...</div>
    }

  return (
    <div className={styles.pokemon_container}>
      <h1 className={styles.title}>{pokemon.name}</h1>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        width="300"
        height="300"
        alt={pokemon.name}
      />
      <div>
        <p  className={styles.id}>N°#{pokemon.id}</p>
      </div>
      <div>
        <div className={styles.types_container}>
          {pokemon.types.map((item, index) => {
            return <span key={index} className={`${styles.type} ${styles['type_' + item.type.name]}`}>{item.type.name}</span>;
          })}
        </div>
      </div>
      <div className={styles.data_container}>
        <div className={styles.data_height}>
          <h4>Altura:</h4>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div className={styles.data_weight}>
          <h4>Peso:</h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  );
}