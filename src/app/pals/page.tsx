"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import { MiniCard, PalCard } from "@/components";
import { Elements, Works, Pals } from "../../../public/jsons";
import { useDebounce } from "@/hooks";
import { ElementEnum, RarityEnum, WorkEnum } from "@/types";

type Filters = {
  search: string;
  element: ElementEnum | undefined;
  work: WorkEnum | undefined;
};

const PalsPage = () => {
  const [pals, setPals] = useState(Pals);
  const [filters, setFilters] = useState<Filters>({
    search: "",
    element: undefined,
    work: undefined,
  });

  const debouncedValue = useDebounce(filters.search, 300);

  useEffect(() => {
    const palsFiltered = Pals.filter((item) => {
      return item.name.match(new RegExp(debouncedValue, "gi"));
    });
    setPals(palsFiltered);
  }, [debouncedValue]);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilters((prev) => ({ ...prev, search: value }));
  };

  const onChangeRarity = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as RarityEnum;
    if (!value || value === "all") {
      setPals(Pals);
      return;
    }
    let maxRarity = 0;
    let minRarity = 0;
    switch (value) {
      case "common":
        minRarity = 0;
        maxRarity = 4;
        break;
      case "rare":
        minRarity = 5;
        maxRarity = 7;
        break;
      case "epic":
        minRarity = 8;
        maxRarity = 10;
        break;
      case "legendary":
        minRarity = 11;
        maxRarity = 999;
        break;
      default:
        console.error("Invalid rarity");
        break;
    }
    const palsFiltered = Pals.filter(({ level }) => {
      return +level >= minRarity && +level <= maxRarity;
    });
    setPals(palsFiltered);
  };

  const onChangeElement = (
    e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    const value =
      (e.target as HTMLButtonElement).name ||
      (e.target as HTMLImageElement).alt;
    setFilters((prev) => ({ ...prev, element: value as ElementEnum }));
    const palsFiltered = Pals.filter((item) => {
      return item.elements.some(
        (element) => element.name.toLowerCase() === value.toLowerCase()
      );
    });
    setPals(palsFiltered);
  };

  const onChangeWork = (
    e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    const value =
      (e.target as HTMLButtonElement).name ||
      (e.target as HTMLImageElement).alt;
    setFilters((prev) => ({ ...prev, work: value as WorkEnum }));
    const palsFiltered = Pals.filter((item) => {
      return item.works.some(
        (element) => element.name.toLowerCase() === value.toLowerCase()
      );
    });
    setPals(palsFiltered);
  };

  return (
    <>
      <div className="head">
        <h1>
          Palworld <span>Pals</span>
        </h1>
        <p>Pals Elements, Abilities, Rarirty and Stats.</p>
      </div>
      <div className="filters">
        <div className="search">
          <p>Search for Pal</p>
          <input
            type="text"
            placeholder="Enter name"
            id="search-mini"
            onChange={onChangeSearch}
            value={filters.search}
          />
        </div>
        <div className="order-rarity">
          <p>Rarity</p>
          <select name="rarity" id="rarity" onChange={onChangeRarity}>
            <option value="">Select rarity</option>
            <option value="all" style={{ color: "rgb(221, 221, 221)" }}>
              All
            </option>
            <option value="common" style={{ color: "rgb(126, 126, 126)" }}>
              Common (0 → 4)
            </option>
            <option value="rare" style={{ color: "rgb(106, 146, 255)" }}>
              Rare (5 → 8)
            </option>
            <option value="epic" style={{ color: "rgb(185, 99, 255)" }}>
              Epic (8 → 10)
            </option>
            <option value="legendary" style={{ color: "rgb(255, 149, 87)" }}>
              Legendary (10+)
            </option>
          </select>
        </div>
        <div className="filter-element">
          <p>Filter by element</p>
          <div className="elements">
            {Elements.map((item) => (
              <MiniCard
                key={item.name}
                item={item}
                onClick={onChangeElement}
                active={filters.element}
              />
            ))}
          </div>
        </div>
        <div className="filter-work filter-element">
          <p>Filter by work</p>
          <div className="elements">
            {Works.map((item) => (
              <MiniCard
                key={item.name}
                item={item}
                onClick={onChangeWork}
                active={filters.work}
              />
            ))}
          </div>
        </div>
      </div>
      <section className="pals-list">
        {pals.map((item) => (
          <PalCard key={item.name} pal={item} />
        ))}
      </section>
    </>
  );
};

export default PalsPage;
