import React, { useEffect } from 'react';

const SquarePayment = () => {
  useEffect(() => {
    const initializeSquare = async () => {
      if (!window.Square) {
        alert("Square library failed to load");
        return;
      }

      // ✅ Use Production App ID and Location ID (not Access Token!)
      const payments = window.Square.payments(
        "sq0idp-czyDEpOXP8ZuIq1hpLQYeA", // Production App ID
        "L97JC6JHWXMEG" // Production Location ID
      );

      const card = await payments.card();
      await card.attach("#card-container");

      document.getElementById("card-button").addEventListener("click", async () => {
        const tokenResult = await card.tokenize();

        if (tokenResult.status === "OK") {
          console.log("✅ Token:", tokenResult.token);

          try {
            const response = await fetch("/payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                sourceId: tokenResult.token,
                amount: 100, // $1.00 CAD
              }),
            });

            if (!response.ok) {
              throw new Error(`Server error: ${response.status}`);
            }

            const result = await response.json();
            console.log("💰 Payment Result:", result);

            if (result.payment) {
              alert("✅ Payment Successful!");
            } else {
              alert("❌ Payment Failed");
            }
          } catch (err) {
            console.error("Fetch failed:", err);
            alert("❌ Payment request failed. Check console for details.");
          }
        } else {
          alert("❌ Card Tokenization Failed");
        }
      });
    };

    initializeSquare();
  }, []);

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h2>Pay with Card</h2>
      <div id="card-container" style={{ marginBottom: "20px" }}></div>
      <button id="card-button">Pay $1.00</button>
    </div>
  );
};

export default SquarePayment;
