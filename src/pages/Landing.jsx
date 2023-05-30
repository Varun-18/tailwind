import React from "react";
import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import useLanding from "../talons/useLanding";

const Landing = () => {
  const { fetchData } = useLanding();
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
    </>
  );
};

export default Landing;
