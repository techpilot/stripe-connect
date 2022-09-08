import axios from "axios";

const Home = () => {
  const connectPaystack = async () => {
    const res = await axios.get("/create-paystack");
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

  const deleteAccount = async () => {
    const res = await axios.delete("/api/stripe/delete");
    console.log(res);
  };

  const getAccountLink = async () => {
    const data = { hello: "world" };
    await axios.post("/api/stripe/link", data);
    // console.log(res);
    // window.open(res.data);
  };

  const checkout = async () => {
    const res = await axios.post("/api/stripe/pay");
    window.open(res.data?.url);
  };

  return (
    <div>
      <button onClick={connectPaystack} style={{ margin: "20px" }}>
        connect paystack
      </button>
      <br />
    </div>
  );
};

export default Home;
