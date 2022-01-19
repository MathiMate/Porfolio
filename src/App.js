import React from 'react';
import ComponentFooter from "./components/Footer";
import ComponentHeader from "./components/Header";

function App() {
  return (
    <div className="container-fluid">
      <ComponentHeader />
      <main class="main">
        <section id="tittle">
          <h1 class="tittle__h1">
            Mathias Lasa <br />
            Front-end Developer
          </h1>
          <p>
            Hello, currently I'm studying on ORT University, I'm junior as
            programming developer being focus on Front-end development. Looking
            for a team to work, apply my skills and learn more about this world
            to continue improving.
          </p>
        </section>
        <section class="stackSkills d-none">
          <h2 id="stackSkills__a">SKILLS</h2>
          <div class="stackSkills__container">
            <div class="stackSkills__elements">
              <ul class="stackSkillsUnorderList">
                <li>
                  <figure>
                    <img
                      src="/Icons/png256/001-html.png"
                      title="HTML"
                      alt="HTML"
                    ></img>
                  </figure>
                </li>
                <li>
                  <figure>
                    <img
                      src="/Icons/png256/002-css-3.png"
                      title="CSS3"
                      alt="CSS3"
                    ></img>
                  </figure>
                </li>
                <li>
                  <figure>
                    <img
                      src="/Icons/png256/js.png"
                      title="javascript"
                      alt="javascript"
                    ></img>
                  </figure>
                </li>
                <li>
                  <figure>
                    <img
                      src="/Icons/png256/bootstrap.png"
                      title="Boostrap"
                      alt="Boostrap"
                    ></img>
                  </figure>
                </li>
                <li>
                  <figure>
                    <img
                      src="/Icons/png256/014-sql-server.png"
                      title="SQL"
                      alt="SQL"
                    ></img>
                  </figure>
                </li>
                <li>
                  <figure>
                    <img
                      src="/Icons/png256/013-hashtag-1.png"
                      title="C Sharp"
                      alt="C Sharp"
                    ></img>
                  </figure>
                </li>
                <li>
                  <figure>
                    <img
                      src="/Icons/png256/net.png"
                      title=".Net"
                      alt=".Net"
                    ></img>
                  </figure>
                </li>
                <li>
                  <figure>
                    <img
                      src="/Icons/png256/016-api.png"
                      title="API"
                      alt="API"
                    ></img>
                  </figure>
                </li>
                <li>
                  <figure>
                    <img
                      src="/Icons/png256/023-responsive-design-2.png"
                      title="Responsive"
                      alt="Responsive"
                    ></img>
                  </figure>
                </li>
                <li>
                  <figure>
                    <img
                      src="/Icons/png256/003-seo.png"
                      title="SEO"
                      alt="SEO"
                    ></img>
                  </figure>
                </li>
                <li>
                  <figure>
                    <img
                      src="/Icons/png256/027-agile.png"
                      title="Agile"
                      alt="Agile"
                    ></img>
                  </figure>
                </li>
                <li>
                  <figure>
                    <img
                      src="/Icons/png256/slack.png"
                      title="Slack"
                      alt="Slack"
                    ></img>
                  </figure>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section class="stackProyects d-none">
          <h2 id="stackProyects__a">PROYECTS</h2>
          <h3>MasterMind</h3>
          <article>
            <figure></figure>
            <p>A well known board game created in digital format</p>
            <a href="http://" target="_blank">
              <button>Ver GitHub</button>
            </a>
            <a href="http://" target="_blank">
              <button>Ver Proyecto</button>
            </a>
          </article>
          <h3>Pokédex API</h3>
          <article>
            <figure></figure>
            <p>Using an API and fetch functions I made a Pokédex</p>
            <a href="http://" target="_blank">
              <button>Ver GitHub</button>
            </a>
            <a href="http://" target="_blank">
              <button>Ver Proyecto</button>
            </a>
          </article>
          <h3>Social Media</h3>
          <article>
            <figure></figure>
            <p>Social Media description</p>
            <a href="http://" target="_blank">
              <button>Ver GitHub</button>
            </a>
            <a href="http://" target="_blank">
              <button>Ver Proyecto</button>
            </a>
          </article>
        </section>
        <h2 id="contact__a">CONTACT</h2>
        <form className='d-none'>
          <input type="email" name="email" id="form__email" required />
          <label for="form__email">Your email</label>
          <textarea
            name=""
            id="form__textarea"
            cols="32"
            rows="10"
            placeholder="Leave a message"
          ></textarea>
          <input type="number" name="" id="form__number" required />
          <label for="form__number">Phone number</label>
          <button class="a__button">
            <a href="tel:+59898919122">Callme now</a>
          </button>
          <button type="submit">Send</button>
        </form>
      </main>
      <figure class="d-none arrow">
        <a href="#tittle">
          <img
            title="Back to top"
            src="/Icons/001-up-arrow.png"
            alt="arrow"
            srcset=""
          ></img>
        </a>
      </figure>
      <ComponentFooter />
    </div>
  );
}

export default App;
