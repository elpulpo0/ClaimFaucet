# Claim 5 ONE on offical OneFinity Faucet for mutliple adresses at once.
They needs to be have a balance lower than 1 ONE

### Step 1

Clone this repository :

```bash
git clone https://github.com/elpulpo0/ClaimFaucet
```

### Step 2

Install dependencies

```bash
npm install
```

### Step 3

Create an addresses.js file with your evm addresses at the root, exactly like this

```js
export const addresses = [
  "0xaddress1",
  "0xaddress2",
  "0xaddress3",
];

module.exports = { addresses };
```

### Step 4

Claim your ONE

```bash
npm run claim
```