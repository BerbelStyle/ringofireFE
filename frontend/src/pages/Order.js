/** @format */

import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import OrderForm from "../components/OrderForm/OrderForm";

const Order = () => {
  return (
    <>
      <Header withLinks pageTitle={"order"} />
      <OrderForm />
      <Footer />
    </>
  );
};

export default Order;
