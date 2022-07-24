import React from 'react';

import styles from './styles.module.css';

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <img src='/img/umg.png' alt='' />
        <div>
          <h1>Restaurante UMG</h1>
          <h5>Carta</h5>
        </div>
      </header>

      <main>
        <aside>
          <a href='#'>Entradas</a>
          <a href='#'>Platos Principales</a>
          <a href='#'>Ensaladas</a>
        </aside>

        <section>
          <h2>Entradas</h2>
          <div>
            <ul>
              <li>
                <h3>Muzzarela</h3>
                <p>Bastones de muzzarela rebozados</p>
              </li>
            </ul>
          </div>

          <a href='#'>Volver arriba</a>

          <div>
            <ul>
              <li>
                <h3>Muzzarela</h3>
                <p>Bastones de muzzarela rebozados</p>
              </li>
            </ul>
          </div>

          <a href='#'>Volver arriba</a>

          <div>
            <ul>
              <li>
                <h3>Muzzarela</h3>
                <p>Bastones de muzzarela rebozados</p>
              </li>
            </ul>
          </div>

          <a href='#'>Volver arriba</a>
        </section>
      </main>

      <footer>
        <img src='/img/umg.png' alt='' />
        <div>
          <h5>Contacto</h5>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Insta</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
