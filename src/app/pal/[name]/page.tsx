"use client";

import { PalDetail } from "@/types/common";
import { replaceName } from "@/utils/replaceName";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const PalDetailPage = () => {
  const { name } = useParams();
  const [data, setData] = useState<PalDetail>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/jsons/pals/${name}.json`);
      const json = await res.json();
      setData(json);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <svg
          className="animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            style={{ opacity: 0.25 }}
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            style={{ opacity: 0.75 }}
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    );
  }

  if (!data && !loading)
    return (
      <div className="loading-container">
        <h2>Data not found 🫥🗡️</h2>
      </div>
    );

  return (
    data && (
      <div className="pal-details">
        <div className="pal">
          <div className="image">
            <Image src={data.image} width={130} height={130} alt={data.name} />
          </div>
          <h1 className="name">{data.name}</h1>
          <p>{data.title}</p>
          <div className="below">
            <div
              className={classNames(
                "rarity",
                data?.rarity?.name?.toLowerCase()
              )}
            >
              <div className="lv">{data.rarity.level}</div>

              <div className="name">{data.rarity.name}</div>
            </div>
            <div className="elements">
              {data.elements.map((item) => (
                <div
                  key={item.name}
                  className={classNames("element", item.className)}
                >
                  <Image
                    src={item.image}
                    alt={item.name + "Element"}
                    width={28}
                    height={28}
                  />
                  <div className="name">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="about">{data.description}</div>
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
                  {data.drops.map((item) => (
                    <tr key={item.name}>
                      <td className="item-td">
                        <div className="v-popper v-popper--theme-dropdown">
                          <div className="det">
                            <div className="image">
                              <Image
                                src={item.image}
                                width={28}
                                height={28}
                                alt={item.name}
                              />
                            </div>
                            <div className="name">{item.name}</div>
                          </div>
                        </div>
                      </td>
                      <td>{item.amount}</td>
                      <td>{item.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="stats">
              <h2>Stats</h2>
              <div className="items">
                {data.stats.map((item) => (
                  <div key={item.name} className="item">
                    <div className="name">{item.name}</div>
                    <div className="value">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="location">
              <h2>Location</h2>
              <div className="loc">
                <Link href="/map">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                  </svg>
                  <span>Find All Locations for {data.name}. </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="combos">
              <h2>Unique Combinations</h2>
              <div className="pal-combinations">
                {data.uniqueCombinations.length &&
                  data.uniqueCombinations.map((item, index) => (
                    <div className="pal" key={index}>
                      <Link
                        aria-current="page"
                        href={`/pal/${replaceName(item.male.name)}`}
                        className="router-link-active router-link-exact-active"
                      >
                        <div className="male c">
                          <div className="image">
                            <Image
                              width={50}
                              height={50}
                              src={item.male.image}
                              alt={item.male.name}
                            />
                          </div>
                          <div className="name">{item.male.name}</div>
                        </div>
                      </Link>
                      <div className="action">+</div>
                      <Link
                        href={`/pal/${replaceName(item.female.name)}`}
                        className=""
                      >
                        <div className="female c">
                          <div className="image">
                            <Image
                              width={50}
                              height={50}
                              src={item.female.image}
                              alt={item.female.name}
                            />
                          </div>
                          <div className="name">{item.female.name}</div>
                        </div>
                      </Link>
                      <div className="action">=</div>
                      <Link
                        href={`/pal/${replaceName(item.result.name)}`}
                        className=""
                      >
                        <div className="result c">
                          <div className="image">
                            <Image
                              width={50}
                              height={50}
                              src={item.result.image}
                              alt={item.result.name}
                            />
                          </div>
                          <div className="name">{item.result.name}</div>
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
            <div className="work-suit">
              <h2>Work Suitability</h2>
              <div className="works">
                <div className="items">
                  {data.workSuitability.map((item) => (
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
                      {item.isActive && (
                        <div className="level">
                          <span className="text">Lv</span>
                          <span className="value">{item.level}</span>
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
                      <div className="name">{data.partnerSkill.name}</div>
                    </div>
                    <div className="content">
                      <p>{data.partnerSkill.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="active skills">
                <h2>Active Skills</h2>
                <div className="items">
                  {data.activeSkills.length &&
                    data.activeSkills.map((item) => (
                      <div className="item" key={item.name}>
                        <div className="header">
                          <div className="wrap">
                            <div className="name">{item.name}</div>
                            <div className="level">{item.level}</div>
                          </div>
                          <div className="waza-element">
                            <div className="element">
                              <Image
                                width={32}
                                height={32}
                                src={item.image}
                                alt={item.name}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="stats">
                          <div className="items">
                            <div className="item red">
                              <div className="name">Power:</div>
                              <div className="value">{item.power}</div>
                            </div>
                            <div className="item yellow">
                              <div className="name">Cooldown:</div>
                              <div className="value">{item.coolDown}</div>
                            </div>
                            <div className="item grey">
                              <div className="name">Range:</div>
                              <div className="value">{item.range}</div>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <p>{item.description}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default PalDetailPage;
