"use client";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const PalDetail = () => {
  const { name } = useParams();

  const stats = [
    { name: "HP", value: 100 },
    { name: "Defense", value: 100 },
    { name: "Crafting Speed", value: 100 },
    { name: "Melee Attack", value: 70 },
    { name: "Shot Attack", value: 115 },
    { name: "Price", value: 3170 },
    { name: "Stamina", value: 100 },
    { name: "Support", value: 110 },
    { name: "Running Speed", value: 700 },
    { name: "Ride Sprint Speed", value: 900 },
    { name: "Slow Walk Speed", value: 80 },
  ];

  const works = [
    {
      name: "Gathering",
      image: "/images/icons/T_icon_palwork_05.png",
      width: 30,
    },
    {
      name: "Cooling",
      image: "/images/icons/T_icon_palwork_10.png",
      width: 30,
    },
    {
      name: "Deforesting",
      image: "/images/icons/T_icon_palwork_06.png",
      width: 30,
    },
    {
      name: "Kindling",
      image: "/images/icons/T_icon_palwork_00.png",
      width: 30,
      level: 2,
    },
    {
      name: "Generating Electricity",
      image: "/images/icons/T_icon_palwork_03.png",
      width: 30,
    },
    {
      name: "Handiwork",
      image: "/images/icons/T_icon_palwork_04.png",
      width: 30,
    },
    {
      name: "Mining",
      image: "/images/icons/T_icon_palwork_07.png",
      width: 30,
    },
    {
      name: "Farming",
      image: "/images/icons/T_icon_palwork_12.png",
      width: 30,
    },
    {
      name: "Oil Extracting",
      image: "/images/icons/T_icon_palwork_09.png",
      width: 30,
    },
    {
      name: "Medicine Production",
      image: "/images/icons/T_icon_palwork_08.png",
      width: 30,
    },
    {
      name: "Planting",
      image: "/images/icons/T_icon_palwork_02.png",
      width: 30,
    },
    {
      name: "Transporting",
      image: "/images/icons/T_icon_palwork_11.png",
      width: 30,
    },
    {
      name: "Watering",
      image: "/images/icons/T_icon_palwork_01.png",
      width: 30,
    },
  ];

  return (
    <div className="pal-details">
      <div className="pal">
        <div className="image">
          <Image
            src={`/images/full_palicon/T_AmaterasuWolf_icon_normal.png`}
            width={130}
            height={130}
            alt="Kitsun"
          />
        </div>
        <h1 className="name">{name}</h1>
        <p>Guardian of the Azure Flame</p>
        <div className="below">
          <div className="rare rarity">
            <div className="lv">6</div>

            <div className="name">Rare</div>
          </div>
          <div className="elements">
            <div className="element elm8">
              <Image
                src="/images/icons/T_Icon_element_s_01.png"
                alt="Fire element"
                width={28}
                height={28}
              />
              <div className="name">Fire</div>
            </div>
          </div>
        </div>
        <div className="about">
          Despite its appearance, AmaterasuWolf is extremely sensitive and will
          flee into a cave when spooked. Long ago, it was considered an ill omen
          if one were found nearby.
        </div>
      </div>
      <div className="container">
        <div className="left">
          <div className="drops">
            <h2>Possible Drops</h2>
            <p className="tip">(hover over item to see description)</p>
            <table>
              <tbody>
                <tr>
                  <th>Item</th>
                  <th>Amount</th>
                  <th>Rate</th>
                </tr>
                <tr>
                  <td className="item-td">
                    <div className="v-popper v-popper--theme-dropdown">
                      <div className="det">
                        <div className="image">
                          <Image
                            src="/images/items/T_itemicon_Material_FireOrgan.png"
                            width={28}
                            height={28}
                            alt="Flame Organ"
                          />
                        </div>
                        <div className="name">Flame Organ</div>
                      </div>
                    </div>
                  </td>
                  <td>2 - 3</td>
                  <td>100%</td>
                </tr>
                <tr>
                  <td className="item-td">
                    <div className="v-popper v-popper--theme-dropdown">
                      <div className="det">
                        <div className="image">
                          <Image
                            src="/images/items/T_itemicon_Material_Leather.png"
                            width={28}
                            height={28}
                            alt="Leather"
                          />
                        </div>
                        <div className="name">Leather</div>
                      </div>
                    </div>
                  </td>
                  <td>2 - 3</td>
                  <td>100%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="stats">
            <h2>Stats</h2>
            <div className="items">
              {stats.map((item) => (
                <div key={item.name} className="item">
                  <div className="name">{item.name}</div>
                  <div className="value">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="location">
            <h2>Stats</h2>
            <div className="loc">
              <Link href="/map">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                </svg>
                <span>Find All Locations for Kitsun. </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="combos">
            <h2>Unique Combinations</h2>
            <div className="pal-combinations">
              <div className="pal">
                <Link
                  aria-current="page"
                  href="/pal/kitsun"
                  className="router-link-active router-link-exact-active"
                >
                  <div className="male c">
                    <div className="image">
                      <Image
                        width={50}
                        height={50}
                        src="/images/palicon/T_AmaterasuWolf_icon_normal.png"
                        alt="Kitsun"
                      />
                    </div>
                    <div className="name">Kitsun</div>
                  </div>
                </Link>
                <div className="action">+</div>
                <Link href="/pal/astegon" className="">
                  <div className="female c">
                    <div className="image">
                      <Image
                        width={50}
                        height={50}
                        src="/images/palicon/T_BlackMetalDragon_icon_normal.png"
                        alt="Astegon"
                      />
                    </div>
                    <div className="name">Astegon</div>
                  </div>
                </Link>
                <div className="action">=</div>
                <Link href="/pal/shadowbeak" className="">
                  <div className="result c">
                    <div className="image">
                      <Image
                        width={50}
                        height={50}
                        src="/images/palicon/T_BlackGriffon_icon_normal.png"
                        alt="Shadowbeak"
                      />
                    </div>
                    <div className="name">Shadowbeak</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="work-suit">
            <h2>Work Suitability</h2>
            <div className="works">
              <div className="items">
                {works.map((item) => (
                  <div
                    key={item.name}
                    className={classNames("item", item.level && "active")}
                  >
                    <div className="w">
                      <div className="image">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={30}
                          height={30}
                        />
                      </div>
                      <div className="name">{item.name}</div>
                    </div>
                    {item.level && (
                      <div className="level">
                        <span className="text">Lv</span>
                        <span className="value">2</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="abilities">
            <div className="passive skills">
              <h2>Partner Skill</h2>
              <div className="items">
                <div className="item">
                  <div className="header">
                    <div className="name">Clear Mind</div>
                  </div>
                  <div className="content">
                    <p>
                      Can be ridden. Unaffected by the cold or heat while riding
                      this Pal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="active skills">
              <h2>Active Skills</h2>
              <div className="items">
                <div className="item">
                  <div className="header">
                    <div className="wrap">
                      <div className="name">Ignis Blast</div>
                      <div className="level">- Lv 1</div>
                    </div>
                    <div className="waza-element">
                      <div className="element">
                        <Image
                          width={32}
                          height={32}
                          src="/images/icons/T_Icon_element_s_01.png"
                          alt="elm8  element"
                        />
                      </div>
                      {/**/}
                    </div>
                  </div>
                  <div className="stats">
                    <div className="items">
                      <div className="item red">
                        <div className="name">Power:</div>
                        <div className="value">30</div>
                      </div>
                      <div className="item yellow">
                        <div className="name">Cooldown:</div>
                        <div className="value">2</div>
                      </div>
                      <div className="item grey">
                        <div className="name">Range:</div>
                        <div className="value">500 - 5000</div>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <p>Hurls a ball of fire straight at an enemy.</p>
                  </div>
                </div>
                <div className="item">
                  <div className="header">
                    <div className="wrap">
                      <div className="name">Spirit Fire</div>
                      <div className="level">- Lv 7</div>
                    </div>
                    <div className="waza-element">
                      <div className="element">
                        <Image
                          width={32}
                          height={32}
                          src="/images/icons/T_Icon_element_s_01.png"
                          alt="elm8  element"
                        />
                      </div>
                      {/**/}
                    </div>
                  </div>
                  <div className="stats">
                    <div className="items">
                      <div className="item red">
                        <div className="name">Power:</div>
                        <div className="value">45</div>
                      </div>
                      <div className="item yellow">
                        <div className="name">Cooldown:</div>
                        <div className="value">7</div>
                      </div>
                      <div className="item grey">
                        <div className="name">Range:</div>
                        <div className="value">1000 - 3000</div>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <p>
                      Shoots fireballs towards an enemy. The fireballs explode
                      after a short distance, generating smaller fireballs that
                      spread forward.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="header">
                    <div className="wrap">
                      <div className="name">Spirit Flame</div>
                      <div className="level">- Lv 15</div>
                    </div>
                    <div className="waza-element">
                      <div className="element">
                        <Image
                          width={32}
                          height={32}
                          src="/images/icons/T_Icon_element_s_05.png"
                          alt="elm2  element"
                        />
                      </div>
                      {/**/}
                    </div>
                  </div>
                  <div className="stats">
                    <div className="items">
                      <div className="item red">
                        <div className="name">Power:</div>
                        <div className="value">75</div>
                      </div>
                      <div className="item yellow">
                        <div className="name">Cooldown:</div>
                        <div className="value">16</div>
                      </div>
                      <div className="item grey">
                        <div className="name">Range:</div>
                        <div className="value">500 - 5000</div>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <p>
                      Fires three balls of malice that relentlessly pursue an
                      enemy.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="header">
                    <div className="wrap">
                      <div className="name">Daring Flames</div>
                      <div className="level">- Lv 22</div>
                    </div>
                    <div className="waza-element">
                      <div className="element">
                        <Image
                          width={32}
                          height={32}
                          src="/images/icons/T_Icon_element_s_01.png"
                          alt="elm8  element"
                        />
                      </div>
                      {/**/}
                    </div>
                  </div>
                  <div className="stats">
                    <div className="items">
                      <div className="item red">
                        <div className="name">Power:</div>
                        <div className="value">75</div>
                      </div>
                      <div className="item yellow">
                        <div className="name">Cooldown:</div>
                        <div className="value">10</div>
                      </div>
                      <div className="item grey">
                        <div className="name">Range:</div>
                        <div className="value">1000 - 3500</div>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <p>
                      AmaterasuWolf&apos;s exclusive skill. Charges forward with
                      great speed while clad in intense blue flames.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="header">
                    <div className="wrap">
                      <div className="name">Flare Storm</div>
                      <div className="level">- Lv 30</div>
                    </div>
                    <div className="waza-element">
                      <div className="element">
                        <Image
                          width={32}
                          height={32}
                          src="/images/icons/T_Icon_element_s_01.png"
                          alt="elm8  element"
                        />
                      </div>
                      {/**/}
                    </div>
                  </div>
                  <div className="stats">
                    <div className="items">
                      <div className="item red">
                        <div className="name">Power:</div>
                        <div className="value">80</div>
                      </div>
                      <div className="item yellow">
                        <div className="name">Cooldown:</div>
                        <div className="value">18</div>
                      </div>
                      <div className="item grey">
                        <div className="name">Range:</div>
                        <div className="value">700 - 3000</div>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <p>
                      Generates two flaming tornadoes on either side before
                      launching them at an enemy.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="header">
                    <div className="wrap">
                      <div className="name">Ignis Rage</div>
                      <div className="level">- Lv 40</div>
                    </div>
                    <div className="waza-element">
                      <div className="element">
                        <Image
                          width={32}
                          height={32}
                          src="/images/icons/T_Icon_element_s_01.png"
                          alt="elm8  element"
                        />
                      </div>
                      {/**/}
                    </div>
                  </div>
                  <div className="stats">
                    <div className="items">
                      <div className="item red">
                        <div className="name">Power:</div>
                        <div className="value">120</div>
                      </div>
                      <div className="item yellow">
                        <div className="name">Cooldown:</div>
                        <div className="value">40</div>
                      </div>
                      <div className="item grey">
                        <div className="name">Range:</div>
                        <div className="value">100 - 1000</div>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <p>
                      Energizes the surrounding ground, causing it to explode
                      after a set amount of time.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="header">
                    <div className="wrap">
                      <div className="name">Fire Ball</div>
                      <div className="level">- Lv 50</div>
                    </div>
                    <div className="waza-element">
                      <div className="element">
                        <Image
                          width={32}
                          height={32}
                          src="/images/icons/T_Icon_element_s_01.png"
                          alt="elm8  element"
                        />
                      </div>
                      {/**/}
                    </div>
                  </div>
                  <div className="stats">
                    <div className="items">
                      <div className="item red">
                        <div className="name">Power:</div>
                        <div className="value">150</div>
                      </div>
                      <div className="item yellow">
                        <div className="name">Cooldown:</div>
                        <div className="value">55</div>
                      </div>
                      <div className="item grey">
                        <div className="name">Range:</div>
                        <div className="value">500 - 9999</div>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <p>
                      Creates a giant ball of flame and hurls it at an enemy.
                      The ball explodes over a wide area upon impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PalDetail;
