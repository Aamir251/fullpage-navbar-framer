import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { navBarData } from "./navbardata";
import {
  navbarVariants,
  ulVariants,
  liVariants,
  imgVariants,
  iconsVariants,
  iconVariant
} from "./animation/navbarAnimation";

function Navbar({ isOpen, setIsOpen }) {
  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
  const [currentIndex, setCurrentIndex] = useState(0);
  const onMouseLeave = () => {
    setCurrentIndex(0);
  };
  return (
    <AnimatePresence exitBeforeEnter>
      {isOpen && (
        <motion.nav
          key="nav"
          variants={{ ...navbarVariants }}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          className="absolute navbar-container"
        >
          <CloseButton setIsOpen={setIsOpen} />

          <div className="nav_wrapper">
            <div className="relative">
              <AnimatePresence exitBeforeEnter>
                {isOpen && (
                  <motion.ul
                    variants={ulVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    key="ul"
                  >
                    {navBarData.map((item, index) => (
                      <motion.li
                        key={index}
                        onMouseEnter={() => setCurrentIndex(index)}
                        onMouseLeave={onMouseLeave}
                        variants={liVariants}
                        transition={transition}
                        whileHover={{ color: "#FF9F9F" }}
                      >
                        {item.name}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>

              <motion.div
                variants={iconsVariants}
                initial="initial"
                animate="animate"
                className="icons_container absolute"
              >
                <motion.img
                  variants={iconVariant}
                  src="/images/instagram.svg"
                  alt="instagram"
                />
                <motion.img
                  variants={iconVariant}
                  src="/images/facebook.svg"
                  alt="instagram"
                />
                <motion.img
                  variants={iconVariant}
                  src="/images/twitter.svg"
                  alt="instagram"
                />
              </motion.div>
            </div>
            <div className="nav_img_wrapper">
              <figure className="relative">
                {navBarData.map((item, index) => {
                  return (
                    <AnimatePresence key={index}>
                      {currentIndex === index && (
                        <motion.img
                          src={item.img}
                          className="absolute nav_img"
                          alt=""
                          variants={imgVariants}
                          initial="initial"
                          animate="animate"
                          transition={transition}
                          exit="exit"
                        />
                      )}
                    </AnimatePresence>
                  );
                })}
              </figure>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

export default Navbar;
const CloseButton = ({ setIsOpen }) => {
  return (
    <img
      onClick={() => setIsOpen(false)}
      className="absolute nav-btn"
      src="/images/close.svg"
      alt="close"
    />
  );
};
