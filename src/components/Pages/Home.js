import React, {useState, useEffect} from "react";
import SectionOne from "../../components/sectionOne";
import Space from "../../components/space";
import Modal from "../modal";

export default function Home() {

    const [modal, setModal] = useState({
      visible: true,
      height: 100,
      opacity: 1,
      display: 'block'
    });

    useEffect(() => {
      
      const timeout = setTimeout(() => {
        setModal((prev) => {
          return { visible: false, height: 0, opacity: 0, display: 'none' };
        });
      }, 2000);

      return () => window.clearTimeout(timeout);
    }, []);
  return (
    <>
      <Modal {...modal} />
      {!modal.visible && (
        <>
          {/* <Nav /> */}
          <SectionOne />
          <Space />
        </>
      )}
    </>
  );
}
