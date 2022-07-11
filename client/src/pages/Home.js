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

  const getBalance = async () => {
    const res = await axios.get("/api/account/balance");
    console.log(res.data);
  };

  const getPayouts = async () => {
    const res = await axios.get("/api/account/payouts");
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
      <button onClick={getBalance}>get balance</button>
      <button onClick={getPayouts}>get payouts</button>
      <button onClick={updateAccount}>update account</button>
      <button onClick={getAccountLink}>account link</button>
      <br />
      <form action="/api/stripe/pay" method="POST">
        <button type="submit">Checkout</button>
      </form>
      <br />
      <form action="/create-checkout-session" method="POST">
        <button type="submit">platform</button>
      </form>
      <br />

      <form action="/api/payout" method="POST">
        <button type="submit">request payout</button>
      </form>
    </div>
  );
};

export default Home;
