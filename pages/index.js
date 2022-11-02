import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dr. Omar Piñón Solís</title>
        <meta name='description' content='Urólogo con notable carrera que se destaca en el área oncológica y de mínima invasión. Experto en el diagnóstico y el tratamiento del cáncer urológico (Próstata, vejiga , riñón, testículo y pene) además de atender padecimientos urológicos diversos.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Dr. Omar Piñón Solís</h1>
      </main>
    </div>
  );
}
