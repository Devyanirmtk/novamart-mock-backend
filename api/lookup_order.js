export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { order_id } = req.body || {};

  if (!order_id) {
    return res.status(400).json({
      status: "error",
      message: "Order ID is required."
    });
  }

  const orders = {
    "12345": {
      order_id: "12345",
      status: "shipped",
      items: [
        {
          name: "Nova Headphones X1",
          quantity: 1,
          price: 149
        }
      ],
      expected_delivery: "2026-05-22",
      shipping_address: "742 Evergreen Terrace, Springfield",
      fulfillment_center: "FC-WEST-03"
    },
    "67890": {
      order_id: "67890",
      status: "processing",
      items: [
        {
          name: "Nova Smart Speaker Mini",
          quantity: 2,
          price: 79
        }
      ],
      expected_delivery: "2026-05-25",
      shipping_address: "1600 Pennsylvania Ave NW, Washington DC",
      fulfillment_center: "FC-EAST-01"
    }
  };

  const order = orders[String(order_id).trim()];

  if (!order) {
    return res.status(200).json({
      status: "not_found",
      message: "No matching order was found."
    });
  }

  return res.status(200).json(order);
}
