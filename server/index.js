// connect to node server
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51LGI14B8jHrxy8evqwIhUucmp9wJLl3mDgEmHj3xoed8JgULJUQR1bCcIMxJRz2CMMdrfsuxyYELACqUi0LHPdn300iGIGXYFK"
);

const app = express();

app.use(cors());
// app.use(bodyParser.json());

// create a new stripe connected account
app.post("/api/stripe/connect", async (req, res) => {
  console.log("connecting to stripe");

  try {
    const account = await stripe.accounts.create({
      type: "express",
      business_type: "individual",
      individual: {
        first_name: "new",
        last_name: "test",
        email: "krisbik@gmail.com",
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
        slug: "kris-bik-individual-account",
        name: "kris bik Individual Account",
      },
      settings: { payouts: { schedule: { interval: "manual" } } },
    });

    console.log(account);
    res.send(account);
  } catch (err) {
    console.log(err);
  }
});

// test mode client ID ca_LyFAlRUtUBMNL8m8DpBtqb3x2MgvczUN
// stripe test bank acct 000123456789

// create an account link to update bank details and enable payments, payouts
app.post("/api/stripe/link", async (req, res) => {
  console.log(req.body);
  try {
    const accountLink = await stripe.accountLinks.create({
      account: "acct_1LKLGbPUnEwgEBVx",
      refresh_url: "http://localhost:3000/",
      return_url: "http://localhost:3000/",
      type: "account_onboarding",
      collect: "eventually_due",
    });

    // console.log(accountLink);
    res.redirect(303, accountLink.url);
    // res.send(accountLink?.url);
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

// get account balance
app.get("/api/account/balance", async (req, res) => {
  console.log("getting balance");
  try {
    const balance = await stripe.balance.retrieve({
      stripeAccount: "acct_1LKLGbPUnEwgEBVx",
    });

    console.log(balance);
    res.send(balance);
  } catch (err) {
    console.log(err);
  }
});

// get account list of payouts
app.get("/api/account/payouts", async (req, res) => {
  console.log("getting payouts");
  try {
    const payouts = await stripe.payouts.list({
      stripeAccount: "acct_1LGNbABL7LmCNVVi",
    });

    const date = new Date(payouts.data[0].created);
    let payoutsAmount = 0;

    payouts.data.map((payout) => {
      payoutsAmount += payout.amount;
    });
    console.log(payoutsAmount);
    console.log(date);

    res.send(payouts);
  } catch (err) {
    console.log(err);
  }
});

// get a particular payout details
app.get("/api/payout", async (req, res) => {
  console.log("getting a particular payout");
  try {
    const payout = await stripe.payouts.retrieve("po_1LJS7hBL7LmCNVVi4GpFQyoM");

    console.log(payout);
    res.send(payout);
  } catch (err) {
    console.log(err);
  }
});

// manually create a stripe payout
app.post("/api/payout", async (req, res) => {
  // request for payout from stripe at least 7 days after payment
  const payout = await stripe.payouts.create(
    {
      amount: 500,
      currency: "cad",
    },
    {
      stripeAccount: "acct_1LKLGbPUnEwgEBVx",
    }
  );

  console.log(payout);
  res.send(payout);
});

// update stripe account
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

// perform a stripe payment to a connected account
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
        application_fee_amount: 200,
        transfer_data: {
          destination: "acct_1LKLGbPUnEwgEBVx",
        },
      },
    });

    // console.log(session);
    res.send(session);
    // res.redirect(303, session.url);
  } catch (err) {
    console.log(err);
  }
});

// create a stripe payment intent
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

  // console.log(session);
  res.redirect(303, session.url);
});

// == STRIPE WEBHOOK ==

const fulfillOrder = async (session) => {
  const paymentIntent = await stripe.paymentIntents.retrieve(
    "pi_3LKeWdB8jHrxy8ev0w0HTFvk"
  );
  // TODO: fill me in
  console.log("Fulfilled order", paymentIntent);
  console.log(paymentIntent.amount);
};

const createOrder = (session) => {
  // TODO: fill me in
  console.log("Creating order", session);
};

const emailCustomerAboutFailedPayment = (session) => {
  // TODO: fill me in
  console.log("Emailing customer", session);
};

// Stripe webhook for a completed checkout session
app.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  async (req, res) => {
    // with signature verification
    const payload = req.body;
    const sig = req.headers["stripe-signature"];
    const endpointSecret =
      "whsec_240dfb7a29b0e79a4253f4508f4ee3e21298a8eff00f2b8ea6756b9220071030";

    let event;
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      console.log(err);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        // Save an order in your database, marked as 'awaiting payment'
        createOrder(session);

        // Check if the order is paid (for example, from a card payment)
        //
        // A delayed notification payment will have an `unpaid` status, as
        // you're still waiting for funds to be transferred from the customer's
        // account.
        if (session.payment_status === "paid") {
          fulfillOrder(session);
        }

        break;
      }

      case "checkout.session.async_payment_succeeded": {
        const session = event.data.object;

        // Fulfill the purchase...
        fulfillOrder(session);

        break;
      }

      case "checkout.session.async_payment_failed": {
        const session = event.data.object;

        // Send an email to the customer asking them to retry their order
        emailCustomerAboutFailedPayment(session);

        break;
      }

      case "payout.created": {
        const payout = event.data.object;
        console.log("payout created", payout);

        break;
      }

      case "payout.paid": {
        const payout = event.data.object;
        console.log("payout paid", payout);

        break;
      }
    }

    res.status(200).json({ success: true });
  }
);
// whsec_240dfb7a29b0e79a4253f4508f4ee3e21298a8eff00f2b8ea6756b9220071030

const server = require("http").createServer(app);
// const io = require("socket.io")(server);
const port = process.env.PORT || 8000;

// run server
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
