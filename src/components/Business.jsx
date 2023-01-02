import React from 'react'
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const Business = () =>  (
  // Below, classes of 'layout.section', etc are taking the already defined style from imported layout above - just less typing overall bc we reuse a bunch
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business, <br className="sm:block hidden" /> we’ll handle
        the money.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
      </p>

      <Button styles={`mt-10`} />
      {/* Above, 'styles' is a prop that has style of margin top of 10 */}
    </div>
  </section>
);

export default Business;