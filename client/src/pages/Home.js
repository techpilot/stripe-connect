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

  const getPayments = async () => {
    // const res = await axios.get("/api/account/payments");
    // console.log(res.data);
  };

  const getPayouts = async () => {
    const res = await axios.get("/api/account/payouts");
    console.log(res.data);
  };

  const getPayout = async () => {
    const res = await axios.get("/api/payout");
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

  const checkout = async () => {
    const res = await axios.post("/api/stripe/pay");
    window.open(res.data?.url);
  };

  return (
    <div>
      <button onClick={connectStripe} style={{ margin: "20px" }}>
        connect stripe
      </button>
      <button onClick={getAccount}>get account</button>
      <button onClick={getBalance}>get balance</button>
      <button onClick={getPayments}>get payments</button>
      <button onClick={getPayouts}>get payouts</button>
      <button onClick={getPayout}>get a payout</button>
      <button onClick={updateAccount}>update account</button>
      <form action="/api/stripe/link" method="POST">
        <button type="submit">account link</button>
      </form>
      <br />

      <button onClick={checkout}>Checkout</button>

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
