const axios = require("axios");
const { addresses } = require("./addresses.js");

// URL de l'API du faucet
const faucetApiUrl = "https://testnet-api.onefinity.network/faucet";

async function claimTokens(address) {
  try {
    // Appel à l'API du faucet avec l'adresse
    const response = await axios.post(faucetApiUrl, {
      address: address,
    });

    // Afficher la réponse de l'API
    console.log(
      `Réclamation réussie pour l'adresse ${address}, `,
      `txHash: `,
      response.data.txHash
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Si l'erreur est une erreur Axios, afficher le message d'erreur
      console.error(
        `Erreur lors de la réclamation pour l'adresse ${address}: ${
          error.response?.data.message || error.message
        }`
      );
    } else {
      // Autres erreurs
      console.error(
        `Erreur lors de la réclamation pour l'adresse ${address}: ${
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
