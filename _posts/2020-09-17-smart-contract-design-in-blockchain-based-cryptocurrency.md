---
date: 'Sep 17 2020 2:00:00 GMT+0530 (India Standard Time)'
title: 'Smart Contract Design in Blockchain-Based Cryptocurrency'
showcase: true
journal: false
tags: 
  - bitcoin
  - smart contract
  - blockchain
---

Ever since I had to implement a full-fledged [bitcoin simulation](https://github.com/techcentaur/Bitcoin-Simulation) almost exactly similar to actual cryptocurrency in my Advanced Distributed Systems class a couple of months ago, I was thinking about how to introduce a series of smart contracts in any Blockchain based system. Now it seems like I understand how the design is going to work, so I'll just summarize it here.

As the design principle goes "if it won't be simple, it simply won't be," I'll try to make it as simple as possible.

---

Smart Contract (SC): A contract between two persons A and B, that network is aware of and agreed upon.

Say A needs to pay x coins to B when the amount of coins in A's account is more than y coins. This is an oversimplified contract, let's call it SC1.

Design Requirements:
- Every node on Bitcoin network should be able to verify that SC1 is a valid contract and it involves variables A, B, x, y that both A and B have already agreed upon.
- If A's account has more than y coins, and A has not paid B yet, any transaction from A is not allowed in any mined block.
- After A pays x coins to B, everything goes back normal given SC1 is a one time contract. The network handles chain-reorganization in correspondence to SC's.


SC is by definition "declarative" in nature. Every node has the freedom to choose the right data structure for SC in their system, it doesn't matter as long as the network agrees on the format of SC.

The implementation then works similar to  UTXO (Unspent Transaction Outputs). Node's keep a pre-defined data structure in their RAM and checks against every transaction when a mined block is added to their main Blockchain.

This can obviously be introduced in Bitcoin without any hassle. It is already present in Ethereum btw.

		