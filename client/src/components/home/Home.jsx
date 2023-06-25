import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";

const Component = styled(Box)({
  padding: "10px",
  background: "#f2f2f2",
});

const Home = () => {
  const { products } = useSelector((state) => state.getProducts);
  console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Component>
        <Banner />
      </Component>
    </>
  );
};

export default Home;
