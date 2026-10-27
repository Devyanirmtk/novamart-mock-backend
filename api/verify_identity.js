export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { account_number, postcode } = req.body || {};

  const accounts = {
    "10000001": {
      postcode: "94107",
      customer_name: "Jordan Rivera"
    },
    "10000002": {
      postcode: "10001",
      customer_name: "Sam Patel"
    }
  };

  const account = accounts[String(account_number || "").trim()];
  const success = Boolean(
    account && account.postcode === String(postcode || "").trim()
  );

  if (!success) {
    return res.status(200).json({ success: false });
  }

  return res.status(200).json({
    success: true,
    customer_name: account.customer_name
  });
}
