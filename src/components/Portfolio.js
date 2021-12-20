import React from 'react';

function Portfolio() {
  return (
    <section class="portfolio">
      <p>Family Media Project</p>
      <div className="flex-row">
      <img src="assets/images/placeholder_1_600.png" alt="Family Media"/>
            <a href="https://github.com/trswork" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://family-media-uncc.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>

            <p>Travel Website Project</p>
      <div className="flex-row">
      <img src="assets/images/placeholder_2_600.png" alt="Beach"/>
            <a href="https://github.com/trswork" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://crhodes111.github.io/Project1/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
    </section>
  );
}

export default Portfolio;