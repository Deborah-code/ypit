import React, { useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  showCloseButton?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  children,
  onClick,
  showCloseButton,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = () => {
    onClick && onClick();
  };

  return (
    <>
      {isOpen && (
        <main
          className="fixed top-[74px] left-0 flex items-center justify-center z-50 w-[100vw] md:w-[60%] md:left-[20%]  md:inset-0  max-h-[99vh]"
          onClick={handleCloseModal}
        >
          <div
            className="h-screen md:h-full bg-white w-[100vw] shadow-2xl"
            ref={modalRef}
          >
            {showCloseButton && (
              <div
                className="text-right px-[60px] pt-[24px] cursor-pointer"
                onClick={handleCloseModal}
              >
                X
              </div>
            )}

            {children}
          </div>
        </main>
      )}
    </>
  );
};

export default Modal;
