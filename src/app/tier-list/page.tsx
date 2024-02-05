"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import classNames from "classnames";
import pals from "../../../public/jsons/pals.json";
import { replaceName } from "@/utils/replaceName";
import {
  FloatingPortal,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { Pal } from "@/types";

const TierListPage = () => {
  const searchParams = useSearchParams();
  const tabParams = searchParams.get("tab");
  const [tab, setTab] = useState(tabParams || "best");

  const renderPals = (rank: string) => {
    if (["flying", "ground"].includes(tab)) {
      return pals.filter((item: any) => {
        return item[tab]?.rank === rank.toUpperCase();
      });
    }
    return pals.filter((item: any) => {
      return item[tab] === rank.toUpperCase();
    });
  };

  const handleChangeTab = (tab: string) => setTab(tab);

  return (
    <>
      <div className="head">
        <h1>
          Palworld <span>Pals Tier List</span>
        </h1>
        <p>Most powerful, and useful Pals to have.</p>
      </div>
      <section className="tier-list-page">
        <div className="others">
          <div className="links">
            <Link
              onClick={() => handleChangeTab("best")}
              aria-current="page"
              href="/tier-list?tab=best"
              className={classNames(
                "other-tier",
                tab === "best" && "router-link-active router-link-exact-active"
              )}
            >
              Best
            </Link>
            <Link
              onClick={() => handleChangeTab("worker")}
              href="/tier-list?tab=worker"
              className={classNames(
                "other-tier",
                tab === "worker" &&
                  "router-link-active router-link-exact-active"
              )}
            >
              Workers
            </Link>
            <Link
              onClick={() => handleChangeTab("flying")}
              href="/tier-list?tab=flying"
              className={classNames(
                "other-tier",
                tab === "flying" &&
                  "router-link-active router-link-exact-active"
              )}
            >
              Flying Mounts
            </Link>
            <Link
              onClick={() => handleChangeTab("ground")}
              href="/tier-list?tab=ground"
              className={classNames(
                "other-tier",
                tab === "ground" &&
                  "router-link-active router-link-exact-active"
              )}
            >
              Ground Mounts
            </Link>
            <Link
              onClick={() => handleChangeTab("combat")}
              href="/tier-list?tab=combat"
              className={classNames(
                "other-tier",
                tab === "combat" &&
                  "router-link-active router-link-exact-active"
              )}
            >
              Combat
            </Link>
          </div>
        </div>
        <div className="tier-list">
          {["s", "a", "b", "c", "d"].map((rank) => (
            <div key={rank} className={classNames("tier", rank.toUpperCase())}>
              <div className="t-name">{rank.toUpperCase()}</div>
              <div
                className={classNames(
                  "content",
                  tab === "worker" && "worktier",
                  ["flying", "ground"].includes(tab) && "speedtier"
                )}
              >
                {renderPals(rank) &&
                  renderPals(rank).map((item) => (
                    <div className="pal" key={item.name}>
                      <div className="wrapper">
                        <Link
                          className="link "
                          href={`/pal/${replaceName(item.name)}`}
                          target="_blank"
                        />
                        <ImageWithTooltip item={item} />
                        {tab === "flying" && (
                          <div className="speed">{item.flying?.speed}</div>
                        )}
                        {tab === "ground" && (
                          <div className="speed">{item.ground?.speed}</div>
                        )}
                        {tab === "worker" && (
                          <div className="works short">
                            <div className="items">
                              {item.works.map((work) => (
                                <div key={work.name} className="item active">
                                  <div className="w">
                                    <div className="image">
                                      <Image
                                        src={work.image}
                                        alt={work.name}
                                        width={20}
                                        height={20}
                                      />
                                    </div>
                                  </div>
                                  <div className="level">
                                    <span className="value">{work.level}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TierListPage;

const ImageWithTooltip = ({ item }: { item: Pal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "top",
    // Make sure the tooltip stays on the screen
    middleware: [offset(5), shift()],
  });
  const hover = useHover(context, { delay: 0 });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });
  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  return (
    <div style={{ cursor: "pointer" }}>
      <div ref={refs.setReference} {...getReferenceProps()}>
        <Image
          width={55}
          height={55}
          loading="lazy"
          src={item.image}
          alt={item.name}
          ref={refs.setReference}
          {...getReferenceProps()}
        />
      </div>
      <FloatingPortal>
        {isOpen && (
          <div
            className="popper__inner"
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            {item.name}
          </div>
        )}
      </FloatingPortal>
    </div>
  );
};
