import { Structure } from "@/types/common";
import Image from "next/image";
import React, { memo } from "react";

type Props = {
  items: Structure[];
};

const StructureList = (props: Props) => {
  const { items } = props;
  return (
    <section className="items-list">
      {items &&
        items.length > 0 &&
        items.map((item, index) => (
          <div className="item" key={index}>
            <div className="up">
              <div className="name">
                <div className="text">Red Metal Barrel</div>
                <div className="type">Furniture</div>
              </div>
              <div className="image">
                <Image
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  width={60}
                  height={60}
                />
              </div>
            </div>
            <div className="item-card structure">
              <div className="description">{item.description}</div>
              <div className="keys">
                {item.keys.length
                  ? item.keys.map((item, index) => (
                      <div key={index} className="key">
                        <div className="text">{item.name}</div>
                        <div className="value">{item.value}</div>
                      </div>
                    ))
                  : null}
              </div>
              <div className="recipe">
                <p>Materials</p>
                <div className="elms">
                  {item.materials.length
                    ? item.materials.map((item, index) => (
                        <div key={index} className="item">
                          <div className="image">
                            <Image
                              src={item.image}
                              alt={item.name}
                              loading="lazy"
                              width={30}
                              height={30}
                            />
                          </div>
                          <div className="name">{item.name}</div>
                        </div>
                      ))
                    : null}
                </div>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default memo(StructureList);
