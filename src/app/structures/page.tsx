"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "@/hooks";
import { StructureList } from "@/components";
import { Structure } from "@/types/common";

const StructuresPage = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const debouncedValue = useDebounce(search, 300);
  const [items, setItems] = useState<Structure[]>([]);
  const [originalItems, setOriginalItems] = useState<Structure[]>([]);

  useEffect(() => {
    fetchStructure();
  }, []);

  useEffect(() => {
    if (!debouncedValue) {
      setItems(originalItems);
      return;
    }
    const itemsFiltered = originalItems.filter((item) => {
      return item.name.match(new RegExp(debouncedValue, "gi"));
    });
    setItems(itemsFiltered);
  }, [debouncedValue, originalItems]);

  const fetchStructure = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/jsons/structures.json`);
      const json = await res.json();
      setItems(json);
      setOriginalItems(json);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const onFilterItems = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (!value || value === "All") {
      setItems(originalItems);
      return;
    }
    const itemsFiltered = originalItems.filter((item) => {
      return item.type.match(new RegExp(value, "gi"));
    });
    setItems(itemsFiltered);
  };

  return (
    <>
      <div className="head">
        <h1>
          Palworld <span>Structures</span>
        </h1>
        <p>Every structure that you can build in Palworld.</p>
      </div>
      <div className="filters">
        <div className="search">
          <p>Search for Structures</p>
          <input
            type="text"
            placeholder="Enter name"
            id="search-mini"
            onChange={onChangeSearch}
          />
        </div>
        <div className="order-rarity">
          <p>Structure Type</p>
          <select name="item_type" id="item_type" onChange={onFilterItems}>
            <option value="">Select Type</option>
            <option value="All">All</option>
            <option value="Food">Food</option>
            <option value="Foundation">Foundation</option>
            <option value="Defense">Defense</option>
            <option value="Infrastructure">Infrastructure</option>
            <option value="Storage">Storage</option>
            <option value="Pal">Pals</option>
            <option value="Light">Light</option>
            <option value="Product">Product</option>
            <option value="Furniture">Furniture</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      <StructureList items={items} />
    </>
  );
};

export default StructuresPage;
