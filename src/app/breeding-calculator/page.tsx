"use client";

import React, { useState } from "react";
import { Pals } from "../../../public/jsons";
import { PalCardSmall } from "@/components";
import classNames from "classnames";
import { Pal } from "@/types";
import Image from "next/image";

type Data = {
  parent1: Pal | null;
  parent2: Pal | null;
  result: Pal | null;
};

const BreedingCalculatorPage = () => {
  const [pals, setPals] = useState(Pals);
  const [activeIndex, setActiveIndex] = useState(1);
  const [data, setData] = useState<Data>({
    parent1: null,
    parent2: null,
    result: null,
  });

  const handleChangeActiveIndex = (index: number) => setActiveIndex(index);

  const handleClick = (pal: Pal) => {
    setData((prev) => ({ ...prev, [`parent${activeIndex}`]: pal }));
  };
  console.log("🍕 ~ data:", data);

  return (
    <>
      <div className="head">
        <h1>
          Palworld <span>Breeding Calculator &amp; All Combinations</span>
        </h1>
        <p>
          Determine the resulting child of a coupled Pals by their breeding
          power.
        </p>
      </div>
      <div className="btn-option">
        <button>Find All Combinations for Child ( reverse )</button>
      </div>
      <div className="breeding">
        <div className="calculator">
          <div
            className={classNames("pal", activeIndex === 1 && "selected")}
            onClick={() => handleChangeActiveIndex(1)}
          >
            {data.parent1 && (
              <div className="image">
                <Image
                  src={data.parent1.image.replace(
                    "/palicon/",
                    "/full_palicon/"
                  )}
                  alt={data.parent1.name}
                  width={100}
                  height={100}
                />
              </div>
            )}

            <div className="name">
              {data.parent1 ? data.parent1.name : "Select Parent"}
            </div>
          </div>
          <div className="action">+</div>
          <div
            className={classNames("pal", activeIndex === 2 && "selected")}
            onClick={() => handleChangeActiveIndex(2)}
          >
            {data.parent2 && (
              <div className="image">
                <Image
                  src={data.parent2.image.replace(
                    "/palicon/",
                    "/full_palicon/"
                  )}
                  alt={data.parent2.name}
                  width={100}
                  height={100}
                />
              </div>
            )}
            <div className="name">
              {data.parent2 ? data.parent2.name : "Select Parent"}
            </div>
          </div>
          <div className="action">=</div>
          <div className="pal result">
            {data.result && (
              <div className="image">
                <Image
                  src={data.result.image.replace("/palicon/", "/full_palicon/")}
                  alt={data.result.name}
                  width={100}
                  height={100}
                />
              </div>
            )}
            <div className="name">
              {" "}
              {data.result ? data.result.name : "Results"}
            </div>
          </div>
        </div>
        <div className="filters">
          <div className="search">
            <p>Search for Pal</p>
            <input
              type="text"
              placeholder="Enter name"
              defaultValue=""
              id="search-mini"
            />
          </div>
        </div>
        <section className="pals-list breed-pals-list small">
          {pals.map((item) => (
            <PalCardSmall
              key={item.name}
              pal={item}
              worksShort={false}
              onSelectPal={handleClick}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default BreedingCalculatorPage;
