import styles from './header.module.css'

export default function Topo() {
  return(
    <header className={styles.body}>
      <div className={styles.header}>
        <div className={styles.menuBody}>
          <div className={styles.menuLine}/>
          <div className={styles.menuLine}/>
          <div className={styles.menuLine}/>
        </div>
        <div className={styles.bodySearch}>
          <input type="text" placeholder="Já pensou no que está procurando?" name="search"/>
        </div>
        <div className={styles.none}></div>
      </div>
    </header>
  )
}
