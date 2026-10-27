export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { account_number, order_id, new_address } = req.body || {};

  if (!account_number || !order_id || !new_address) {
    return res.status(400).json({
      success: false,
      message: "Account number, order ID, and new address are required."
    });
  }

  const validAccounts = ["10000001", "10000002"];
  const validOrders = ["12345", "67890"];

  if (!validAccounts.includes(String(account_number).trim())) {
    return res.status(404).json({
      success: false,
      message: "Account not found."
    });
  }

  if (!validOrders.includes(String(order_id).trim())) {
    return res.status(404).json({
      success: false,
      message: "Order not found."
    });
  }

  return res.status(200).json({
    success: true,
    confirmation: "Address update accepted for the mock assignment.",
    order_id: String(order_id).trim(),
    new_address: String(new_address).trim()
  });
}
