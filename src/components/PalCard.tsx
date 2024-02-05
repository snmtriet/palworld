import React, { memo } from "react";
import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import { Pal } from "@/types";

const PalCard = ({
  pal,
  worksShort = true,
}: {
  pal: Pal;
  worksShort?: Boolean;
}) => {
  const { elements, image, works, level, name, rarity } = pal;
  return (
    <div className="pal">
      <Link href={`/pal/${name.toLowerCase().replaceAll(" ", "-")}`}>
        <div className="container">
          <div className="elements">
            {elements.map((item) => (
              <div key={item.name} className="element">
                <Image
                  src={item.image}
                  alt={item.name}
                  height={24}
                  width={24}
                />
              </div>
            ))}
          </div>
          <div className="image">
            <Image
              loading="lazy"
              src={image}
              alt={name}
              height={60}
              width={60}
            />
          </div>
          <div className="name">{name}</div>
          <div className={cx("rarity", rarity.toLowerCase())}>
            <div className="lv">{level}</div>
            <div className="name">{rarity}</div>
          </div>
          {worksShort && (
            <div className="works short">
              <div className="items">
                {works.map((item) => (
                  <div key={item.name} className="active item">
                    <div className="w">
                      <div className="image">
                        <Image
                          loading="lazy"
                          src={item.image}
                          width={20}
                          height={20}
                          alt={item.name}
                        />
                      </div>
                    </div>
                    <div className="level">
                      <span className="value">{item.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default memo(PalCard);
