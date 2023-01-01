import React from 'react'
import styles from "./style";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      {/* Note, if want to know what style does from 'styles', just command click it */}
      <div className={`${styles.boxWidth}`}>
        Navbar - placeholder for future components
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        Hero
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        Stats
        Business
        Billing
        CardDeal
        Testimonials
        Clients
        CTA
        Footer
      </div>
    </div>

  </div>
);

export default App;