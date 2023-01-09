import React from 'react'
import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard"; //this is a component we have yet to code, but know we will use it so import it to start

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    {/* TODO in div below - gradient */}
    <div />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        What People are <br className="sm:block hidden" /> saying about us
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
      {/* Above, like in another component we did, '{...card}' is spreading the properties of a card (which we imported above). I think by doing this we're giving the FeedbackCard component props of the features properties imported from constants. You'll see that next when we code FeedbackCard component, we will give it props of these feature properties, so it can be dynamic */}
    </div>
  </section>
);

export default Testimonials