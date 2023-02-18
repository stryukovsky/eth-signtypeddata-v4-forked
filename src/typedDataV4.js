export default {
  domain: {
    chainId: 80001,
    name: "VKPromenfteus",
    verifyingContract: "0x0000000000000000000000000000000000000000",
    version: "1"
  },

  message: {
    fromTimestamp: Math.floor(Date.now() / 1000),
    toTimestamp: 3600 + Math.floor(Date.now() / 1000)
  },
  primaryType: "AuthenticationTimeSpan",
  types: {
    EIP712Domain: [
      { name: "name", type: "string" },
      { name: "version", type: "string" },
      { name: "chainId", type: "uint256" },
      { name: "verifyingContract", type: "address" }
    ],
    AuthenticationTimeSpan: [
      { name: "fromTimestamp", type: "uint256" },
      { name: "toTimestamp", type: "uint256" }
    ]
  }
};
