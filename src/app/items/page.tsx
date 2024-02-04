"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ItemList } from "@/components";
import { useDebounce } from "@/hooks";
import { Item } from "@/types/common";

const ItemsPage = () => {
  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page");
  const [items, setItems] = useState<Item[]>([]);
  const [originalItems, setOriginalItems] = useState<Item[][]>([]);
  const [page, setPage] = useState(pageParam || 1);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const debouncedValue = useDebounce(search, 300);

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!debouncedValue) {
      setItems(originalItems[+page]);
      return;
    }
    const itemsFiltered = originalItems.flat().filter((item) => {
      return item.name.match(new RegExp(debouncedValue, "gi"));
    });
    setItems(itemsFiltered);
  }, [debouncedValue, originalItems, page]);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const cloneItems = [];
      for (let i = 1; i <= 10; i++) {
        const res = await fetch(`/jsons/items/${i}.json`);
        const json = await res.json();
        cloneItems[i] = json;
      }
      setItems(cloneItems[1]);
      setOriginalItems(cloneItems);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const onChangePage = (num: number) => {
    setPage(num);
    setItems(originalItems[num]);
  };

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const onFilterItems = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (!value || value === "All") {
      setItems(originalItems[+page]);
      return;
    }
    const itemsFiltered = originalItems.flat().filter((item) => {
      return item.type.match(new RegExp(value, "gi"));
    });
    setItems(itemsFiltered);
  };

  return (
    <>
      <div className="head">
        <h1>
          Palworld <span>Items</span>
        </h1>
        <p>Every item in Palworld with full details.</p>
      </div>
      <div className="filters">
        <div className="search">
          <p>Search for item</p>
          <input
            type="text"
            placeholder="Enter name"
            id="search-mini"
            onChange={onChangeSearch}
          />
        </div>
        <div className="order-rarity">
          <p>Item Type</p>
          <select name="item_type" id="item_type" onChange={onFilterItems}>
            <option value="">Select Type</option>
            <option value="All">All</option>
            <option value="Accessory">Accessory</option>
            <option value="Weapon">Weapon</option>
            <option value="Material">Material</option>
            <option value="Consume">Consumable</option>
            <option value="Ammo">Ammo</option>
            <option value="Essential">Essential</option>
            <option value="Food">Food</option>
            <option value="Blueprint">Blueprint</option>
            <option value="Armor">Armor</option>
            <option value="Glider">Glider</option>
            <option value="SpecialWeapon">Spheres</option>
          </select>
        </div>
        <div className="page-nav">
          <p>Page</p>
          <div className="btns">
            {new Array(10).fill(undefined).map((_, index) => (
              <Link
                key={index}
                onClick={() => onChangePage(index + 1)}
                aria-current="page"
                href={`/items?page=${index + 1}`}
                className={classNames(
                  "router-link-active router-link-exact-active page-nav-btn",
                  +page === index + 1 && "active"
                )}
              >
                {index + 1}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {loading ? (
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
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};

export default ItemsPage;
