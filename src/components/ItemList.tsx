import { Item } from "@/types/common";
import Image from "next/image";
import React, { memo } from "react";

type Props = {
  items: Item[];
};
const ItemList = (props: Props) => {
  const { items } = props;
  return (
    <section className="items-list">
      {items &&
        items.length > 0 &&
        items.map((item, index) => (
          <div className="item" key={index}>
            <div className="up">
              <div className="name">
                <div className="text">{item.name}</div>
                <div className="type">{item.type}</div>
              </div>
              <div className="image">
                <Image
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div className="item-card">
              <div className="description">{item.description}</div>
              <div className="keys">
                {item.keys.length
                  ? item.keys.map((key, index) => (
                      <div key={index} className="key">
                        <div className="text">{key.name}</div>
                        <div className="value">{key.value}</div>
                      </div>
                    ))
                  : null}
              </div>
              {item.recipe.length ? (
                <div className="recipe">
                  <p>Recipe</p>
                  <div className="elms">
                    {item.recipe.map((recipe, index) => (
                      <div key={index} className="item">
                        <div className="image">
                          <Image
                            src={recipe.image}
                            alt={recipe.name}
                            loading="lazy"
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="name">{recipe.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        ))}
    </section>
  );
};

export default memo(ItemList);
