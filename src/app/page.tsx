/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="content home">
        <div className="container">
          <h1>
            Palworld <span>Database</span>
          </h1>
          <p>
            Welcome to the comprehensive Palworld database, your one-stop
            resource for all things Palworld-related, covering Pals, Maps,
            Dungeons, Weapons &amp; Items, and Building information.
          </p>
          <div className="links">
            <Link
              href="/breeding-calculator"
              className="link"
              style={{ backgroundImage: 'url("/images/breed.png")' }}
            >
              <span>Breeding Calculator</span>
            </Link>
            <Link
              href="/map"
              className="link"
              style={{ backgroundImage: 'url("/images/map.png")' }}
            >
              <span>Map</span>
            </Link>
            <Link
              href="/pals"
              className="link"
              style={{ backgroundImage: 'url("/images/image-pals.png")' }}
            >
              <span>Pals</span>
            </Link>
            <Link
              href="/tier-list"
              className="link"
              style={{ backgroundImage: 'url("/images/tier-lists.png")' }}
            >
              <span>Tier List</span>
            </Link>
            <Link
              href="/items"
              className="link"
              style={{ backgroundImage: 'url("/images/items-img.png")' }}
            >
              <span>Items</span>
            </Link>
            <Link
              href="/structures"
              className="link"
              style={{ backgroundImage: 'url("/images/image-structures.png")' }}
            >
              <span>Structures</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>About Palworld</h2>
        <div className="text">
          <p>
            Palworld is an open-world survival game where you can capture
            mysterious creatures called “Pals.” These Pals have their uses, and
            you’ll need all their help if you want to survive in this harsh
            world of starvation, dangerous Pal attacks, and poachers.
          </p>
          <p>
            The game is developed by the Tokyo-based company Pocketpair and
            offers a unique blend of collecting creatures and third-person
            shooting elements.
          </p>
          <p>
            While it has been playfully dubbed “Pokémon with guns,” it’s
            important to note that the developer considers it a very unique game
            with inspiration drawn from other titles like Rimworld and Ark.
          </p>
        </div>
      </section>
      <section className="gameplay">
        <h2>Palworld Gameplay</h2>
        <div className="display">
          <div className="pres">
            <div className="text">
              <h3>Story</h3>
              <p>
                In the heart of the Pacific Ocean lies Palpagos Island, a place
                where science and magic intertwine. Its lush jungles harbor
                enigmatic creatures called Pals, each possessing unique
                abilities.
              </p>
              <p>
                Our protagonist, a shipwrecked explorer, washes ashore on
                Palpagos. Survival depends on capturing Pals, harnessing their
                powers, and unraveling the island’s secrets.
              </p>
            </div>
            <div className="gif">
              <img src="/images/explore.gif" alt="Explore Palworld" />
            </div>
          </div>
          <div className="pres">
            <div className="text">
              <h3>Mechanics ( Capture Pals )</h3>
              <p>
                In Palworld, you can catch new Pals using special devices.
                Before catching them, it&apos;s important to understand each
                Pal&apos;s unique skills. When you successfully catch a Pal, you
                gain access to its abilities, like special attacks or helpful
                actions.
              </p>
              <p>
                These abilities make the game more interesting, and you need to
                think about how to use them wisely in different situations, such
                as fighting, gathering resources, or solving challenges.
              </p>
            </div>
            <div className="gif">
              <img src="/images/capture.gif" alt="capture pals in Palworld" />
            </div>
          </div>
          <div className="pres">
            <div className="text">
              <h3>Multiplayer</h3>
              <p>
                Palworld offers an exciting multiplayer experience, allowing
                players to team up with friends or engage in friendly
                competition. In the multiplayer mode, collaboration becomes key
                as players can share resources, work together on building
                projects, and explore the game world as a team.
              </p>
            </div>
            <div className="gif">
              <img
                src="/images/multiplayer.gif"
                alt="play with friend in Palworld"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
