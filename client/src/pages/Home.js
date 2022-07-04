import axios from "axios";

const Home = () => {
  const connectStripe = async () => {
    const res = await axios.post("/api/stripe/connect");
    console.log(res);
  };

  const getAccount = async () => {
    const res = await axios.get("/api/stripe/account");
    console.log(res.data);
  };

  const updateAccount = async () => {
    const res = await axios.post("/api/stripe/update");
    console.log(res);
  };

  const getAccountLink = async () => {
    const res = await axios.post("/api/stripe/link");
    console.log(res);
    window.open(res.data);
  };

  return (
    <div>
      <button onClick={connectStripe} style={{ margin: "20px" }}>
        connect stripe
      </button>
      <button onClick={getAccount}>get account</button>
      <button onClick={updateAccount}>update account</button>
      <button onClick={getAccountLink}>account link</button>
      <form action="/api/stripe/pay" method="POST">
        <button type="submit">Checkout</button>
      </form>
      <form action="/create-checkout-session" method="POST">
        <button type="submit">platform</button>
      </form>
    </div>
  );
};

export default Home;
