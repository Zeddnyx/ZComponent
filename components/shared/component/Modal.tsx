"use client";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

import styles from "@/styles/component/modal.module.css";
import { useEsc } from "@/hooks";

const ModalItem = ({
  isOpen,
  setIsOpen,
  children,
  classNameDrawer,
  classNameHeader,
  className,
  title,
  outsideClickable = true,
  autoOpen = false,
}: IModalItem) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  useEsc(closeModal);
  const handleOutsideClick = (e: any) => {
    if (outsideClickable && e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className={`${styles.modalContainer}
        ${isOpen || autoOpen ? styles.modalActive : styles.modalInActive} `}
    >
      {/* Modal Overlay */}
      <div
        className={`fixed inset-0 ${
          isOpen || autoOpen ? styles.modalOverlay : "bg-transparent"
        }`}
        onClick={handleOutsideClick}
      ></div>

      <div
        className={`${classNameDrawer} ${styles.modalDrawer}  ${
          isOpen
            ? "max-md:animate-slide-in-up md:scale-100"
            : "max-md:animate-slide-out-down md:scale-0"
        } `}
      >
        <div className={`${classNameHeader} ${styles.modalHeader}`}>
          {title}
          <IoMdClose
            onClick={closeModal}
            className="cursor-pointer navbar-item-icon"
          />
        </div>
        <main
          className={`${className} ${styles.modalContent} custom-scrollbar`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default function Modal({
  title,
  children,
  text,
  outsideClickable,
  autoOpen,
  classNameDrawer,
  classNameHeader,
  className,
}: IModal) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
        {text}
      </div>
      <ModalItem
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={title}
        autoOpen={autoOpen}
        className={className}
        classNameDrawer={classNameDrawer}
        classNameHeader={classNameHeader}
        outsideClickable={outsideClickable}
      >
        {children}
      </ModalItem>
    </div>
  );
}
