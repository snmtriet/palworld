"use client";

import { ElementEnum, WorkEnum } from "@/types";
import {
  FloatingPortal,
  autoUpdate,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import cx from "classnames";
import Image from "next/image";
import React, { MouseEvent, MouseEventHandler, memo, useState } from "react";

type Props = {
  item: {
    src: string;
    name: string;
  };
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => void;
  active: ElementEnum | WorkEnum | undefined;
};

const convertName = (name: ElementEnum | WorkEnum | string | undefined) => {
  return name?.toLowerCase().replaceAll(" ", "-");
};

const MiniCard = (props: Props) => {
  const { item, active, onClick } = props;
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
    <div key={item.src}>
      <button
        onClick={onClick}
        key={item.src}
        ref={refs.setReference}
        {...getReferenceProps()}
        name={item.name}
        className={cx(
          convertName(active) === convertName(item.name) && "active"
        )}
      >
        <Image
          src={item.src}
          alt={item.name}
          width={28}
          height={28}
          loading="lazy"
          title={item.name}
        />
      </button>
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

export default memo(MiniCard);
