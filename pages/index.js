/* eslint-disable react/react-in-jsx-scope */
import styles from '../styles/Home.module.css'

/********** THIS FILE IS PART OF TASK 1 **********/

export default function Home() {
  return (
    <>
      {/* YOUR CODE HERE */}
      <div className={styles.heroImg}>
        <div className={styles.heroText}>
          <p>Egestas.</p>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At quis in viverra feugiat dolor malesuada netus faucibus. Egestas magna massa tellus.</p>
        </div>
     </div>
     <div className={styles.info}>
       <div className={styles.title}>
         <h2>Elementum velit.</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt erat imperdiet nulla quam nunc. </p>
       </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src="/static/coffee.png" alt="coffee"/>
            <h4>Et risus.</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel enim mattis.</p>
          </div>
          <div className={styles.card}>
            <img src="/static/linen.png" alt="coffee"/>
            <h4>Habitant enim.</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus quis.</p>
          </div>
          <div className={styles.card}>
            <img src="/static/plant.png" alt="coffee"/>
            <h4>Vitae eu blandit.</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci commodo.</p>
          </div>
          </div>
     </div>
    </>
  )
}
