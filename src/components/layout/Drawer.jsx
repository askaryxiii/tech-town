import { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";

const Drawer = ({ isOpen, isClosing, closeDrawer, children }) => {
  const drawerRef = useRef(null);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        drawerRef.current &&
        !drawerRef.current.contains(event.target)
      ) {
        closeDrawer();
      }
    };

    // Handle escape key press
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeDrawer();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      // Prevent scrolling when drawer is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen && !isClosing) return null;

  return (
    <div className={`drawer-container ${isClosing ? "closing" : ""}`}>
      {/* Blurred backdrop */}
      <div
        className="drawer-backdrop"
        aria-hidden="true"
        onClick={closeDrawer}
      />

      {/* Drawer container */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-14">
            <button
              onClick={closeDrawer}
              className="drawer-close-button"
              aria-label="Close drawer">
              <IoMdClose className="text-white font-bold text-2xl" />
            </button>
            <div
              ref={drawerRef}
              className="drawer-panel pointer-events-auto relative w-full max-w-3xl">
              {/* Drawer content */}
              <div className="flex h-full flex-col bg-white shadow-xl border-l border-gray-200 px-6 py-8">
                <div className="flex-1 overflow-y-auto">{children || null}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
