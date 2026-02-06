import React from "react";

export default function BurgerMenu({ active, setActive }) {
  return (
    <div
      className="block md:hidden cursor-pointer z-50"
      data-drawer-target="drawer-example"
      data-drawer-show="drawer-example"
      aria-controls="drawer example"
      onClick={() => setActive(!active)}
    >
      BurgerMenu
    </div>
  );
}
