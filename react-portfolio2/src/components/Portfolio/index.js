import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio() {
  return (
    <section class="portfolio">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card">
            <img
              src={PlaceHolderOne}
              alt="Coming Soon"
              class="card-img-top"
            />
            <div class="card-body">

            <a href="https://github.com/trswork" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://family-media-uncc.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card">
            <img
              src={PlaceHolderOne}
              alt="Coming Soon"
              class="card-img-top"
            />
            <div class="card-body">

            <a href="https://github.com/trswork" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://family-media-uncc.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Portfolio;