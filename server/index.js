// connect to node server
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const stripe = require("stripe")("STRIPE_SECRET_KEY");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/api/stripe/connect", async (req, res) => {
  console.log("connecting to stripe");

  try {
    const account = await stripe.accounts.create({
      type: "express",
      business_type: "individual",
      individual: {
        first_name: "Kai",
        last_name: "hervez",
        email: "kaihervez@gmail.com",
        // dob: {
        //   day: 1,
        //   month: 1,
        //   year: 1901,
        // },
        // address: {
        //   line1: "1234 Main Street",
        //   city: "San Francisco",
        //   state: "CA",
        //   postal_code: "94111",
        //   country: "US",
        // },
        // ssn_last_4: "1234",
        // phone: "555-555-5555",
      },
      metadata: {
        slug: "kai-hervez-individual-account",
      },
    });

    console.log(account);
    res.send(account);
  } catch (err) {
    console.log(err);
  }
});

// test mode client ID ca_LyFAlRUtUBMNL8m8DpBtqb3x2MgvczUN
// stripe test bank acct 000123456789

app.post("/api/stripe/link", async (req, res) => {
  try {
    const accountLink = await stripe.accountLinks.create({
      account: "acct_1LGK2TBXAA4J26qQ",
      refresh_url: "http://localhost:3000/",
      return_url: "http://localhost:3000/",
      type: "account_onboarding",
      collect: "eventually_due",
    });

    // console.log(accountLink);
    res.send(accountLink?.url);
  } catch (err) {
    console.log(err);
  }
});

app.get("/api/stripe/account", async (req, res) => {
  console.log("getting account");
  try {
    const account = await stripe.accounts.retrieve("acct_1LGNbABL7LmCNVVi");
    console.log(account);
    res.send(account);
  } catch (err) {
    console.log(err);
  }
});

app.post("/api/stripe/update", async (req, res) => {
  console.log("updating account");
  try {
    const account = await stripe.accounts.update("acct_1LGNbABL7LmCNVVi", {
      business_type: "individual",
    });

    console.log(account);
    res.send(account);
  } catch (err) {
    console.log(err);
  }
});

app.post("/api/stripe/pay", async (req, res) => {
  console.log("paying");
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // price: "price_1LGg07B8jHrxy8evvqRUrgHy",
          // quantity: 1,
          price_data: {
            currency: "usd",
            product_data: {
              name: "expert reward",
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/failure",
      payment_intent_data: {
        application_fee_amount: 10,
        transfer_data: {
          destination: "acct_1LGIieBFLXwhRea3",
        },
      },
    });

    console.log(session);
    res.redirect(303, session.url);
  } catch (err) {
    console.log(err);
  }
});

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "whatido reward",
          },
          unit_amount: 3000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/failure",
  });

  console.log(session);
  res.redirect(303, session.url);
});

const server = require("http").createServer(app);
// const io = require("socket.io")(server);
const port = process.env.PORT || 8000;

// run server
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
