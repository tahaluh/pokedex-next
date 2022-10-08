import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Card.module.css";

export default function Card({ pokemon }) {
  
  return (
    <Link href={`/pokemon/${pokemon.id}`}>
      <div className={styles.card}>
        <div className={styles.image}>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            width="120"
            height="120"
            alt={pokemon.name}
          />
        </div>
        <div className={styles.desc_container}>
          <p className={styles.id}>#{pokemon.id}</p>
          <h3 className={styles.title}>{pokemon.name}</h3>
        </div>
      </div>
    </Link>
  );
}
