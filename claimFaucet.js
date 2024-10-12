const axios = require("axios");
const { addresses } = require("./addresses.js");

// Faucet API URL
const faucetApiUrl = "https://testnet-api.onefinity.network/faucet";

async function claimTokens(address) {
  try {
    // Calling the Faucet API for an address
    const response = await axios.post(faucetApiUrl, {
      address: address,
    });

    // Display API response
    console.log(
      `Claim succesful for address ${address}, `,
      `txHash: `,
      response.data.txHash
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // If Axios error, Display message error
      console.error(
        `Error when claiming for address ${address}: ${
          error.response?.data.message || error.message
        }`
      );
    } else {
      // Other errors
      console.error(
        `Error when claiming for address ${address}: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  }
}

async function main() {
  for (const address of addresses) {
    await claimTokens(address);
  }
}

main().catch(console.error);
