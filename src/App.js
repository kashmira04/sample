import React, { useState } from "react";
import styles from "./App.module.scss"

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      {!isOpen ? (
        <div className={styles.envelope} onClick={handleClick}>
          <div className={styles.topFlap}></div>
          <div className={styles.bottomFlap}></div>
          <div className={styles.envelopeBody}>
            <p className={styles.text}>Tap to Open</p>
          </div>
        </div>
      ) : (
        <div className={styles.letter}>
          <p>Hi Cutie,</p>
          <p>Every moment I spend with you reminds me of just how lucky I am to have you in my life.Matlab q kaise ...aise kaise hua ye ...mere saath kaise hua ye....But here we are, and I'm beyond thankful. Thank you for choosing me, for making me feel like the luckiest person alive. I promise, I'll always be there, holding your hand through everything.</p>
          <p>I love you sooooo muuucchhh forever....ummahhh ..ummmahh ..ummaahhhh(lots of geeli puppy)</p>
          <p>Yours and only yours,</p>
          <p>Dopamine</p>
          <button className={styles.closeButton} onClick={handleClose}>Bye cutie</button>
        </div>
      )}
    </div>
  ); 
};

export default App;
