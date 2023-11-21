import React, { useState, useEffect } from "react";
import im0 from "../../assets/transactions/explore_image.png";
import im1 from "../../assets/transactions/explore_image-1.png";
import im2 from "../../assets/transactions/explore_image-2.png";
import im3 from "../../assets/transactions/explore_image-3.png";
import im4 from "../../assets/transactions/explore_image-4.png";
import im5 from "../../assets/transactions/explore_image-5.png";

const TransactionCard = ({ img, timestamp, from, to, amount, message }) => {
  return (
    <div className="mt-4 p-6 bg-bg-2 rounded-lg w-max font-semibold">
      <img src={img} alt="im-1" />
      <div className="place-items-center bg-primary text-neutral-100 max-w-max p-1 rounded-md relative bottom-4 m-auto">
        {timestamp}
      </div>
      <div>
        <span className="text-neutral-200">From:</span>
        {from}
      </div>

      <div>
        <span className="text-neutral-200">To: </span>
        {to}
      </div>

      <div>
        <span className="text-neutral-200">Amount:</span>
        {amount}
      </div>
      <div>
        <span className="text-neutral-200">Message:</span>
        {message}
      </div>
    </div>
  );
};

function Transactions() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  const transactionList = [
    {
      image: im0,
      timestamp: "2021-11-04 02:02",
      from: "dUfUenk...hPklj3WC",
      to: "Q2IcH9P...ZwG4WsvY",
      amount: "0.0004 ETH",
      message: "Hello from SendCrypt",
    },
    {
      image: im1,
      timestamp: "2021-11-04 02:02",
      from: "dUfUenk...hPklj3WC",
      to: "Q2IcH9P...ZwG4WsvY",
      amount: "0.0004 ETH",
      message: "Hello Web3 Developers",
    },
    {
      image: im2,
      timestamp: "2021-11-04 02:02",
      from: "dUfUenk...hPklj3WC",
      to: "Q2IcH9P...ZwG4WsvY",
      amount: "0.0004 ETH",
      message: "Hello World",
    },
    {
      image: im3,
      timestamp: "2021-11-04 02:02",
      from: "dUfUenk...hPklj3WC",
      to: "Q2IcH9P...ZwG4WsvY",
      amount: "0.0004 ETH",
      message: "Hello Developers",
    },
    {
      image: im4,
      timestamp: "2021-11-04 02:02",
      from: "dUfUenk...hPklj3WC",
      to: "Q2IcH9P...ZwG4WsvY",
      amount: "0.0004 ETH",
      message: "Hello There",
    },
    {
      image: im5,
      timestamp: "2021-11-04 02:02",
      from: "dUfUenk...hPklj3WC",
      to: "Q2IcH9P...ZwG4WsvY",
      amount: "0.0004 ETH",
      message: "Hello Folks",
    },
  ];

  //display only two when in mobile
  let adjustedList = isMobile ? transactionList.slice(0, 2) : transactionList;

  return (
    <article className="m-6 flex flex-col flex-wrap items-center justify-center">
      <div className="lg:max-w-7xl lg:w-5/6">
        <h1 className="text-3xl font-bold">Latest Transactions</h1>
        {/*isMobile ? "mobile ni siya" : "desktop ni siya"*/}
        {adjustedList.map((items) => {
          return (
            <TransactionCard
              key={items.timestamp}
              img={items.image}
              timestamp={items.timestamp}
              from={items.from}
              to={items.to}
              amount={items.amount}
              message={items.message}
            />
          );
        })}
      </div>
    </article>
  );
}
export default Transactions;
