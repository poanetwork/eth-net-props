# eth-net-props

[![Build Status](https://travis-ci.org/poanetwork/eth-net-props.svg?branch=master)](https://travis-ci.org/poanetwork/eth-net-props)
[![Known Vulnerabilities](https://snyk.io/test/github/poanetwork/eth-net-props/badge.svg)](https://snyk.io/test/github/poanetwork/eth-net-props)
[![Coverage Status](https://coveralls.io/repos/github/poanetwork/eth-net-props/badge.svg?branch=master)](https://coveralls.io/github/poanetwork/eth-net-props?branch=master)

Get properties of EVM compatible networks

Example of usage:

```
const ethNetProps = require('eth-net-props')

const addr = '0x02c6A1Fb7F074fF168Da43307EC8c39c6b88Fd01'
const networkID = 99

//gets explorer's link to account
const explorerUrlForAccount = ethNetProps.explorerLinks.getExplorerAccountLinkFor(addr, networkID)

//gets explorer's link to token
const tokenAddr = '0xcf2AEDCfb4ff2c9020fb61c41226A4DfD77D12dE'
const explorerUrlForToken = ethNetProps.explorerLinks.getExplorerTokenLinkFor(tokenAddr, addr, networkID)

//gets explorer's link to tx
const txHash = '0x793388b1aec9a40027d7b356db6bae040edc67459e3d9569bdc78435182c6703'
const explorerUrlForTx = ethNetProps.explorerLinks.getExplorerTxLinkFor(txHash, networkID)

//gets array of faucets' links
const faucetLinks = ethNetProps.faucetLinks(networkID)

//gets array of RPC edpoints
const RPCEndpoints = ethNetProps.RPCEndpoints(networkID)

//gets network's display name
const networkDisplayName = ethNetProps.props.getNetworkDisplayName(networkID)

//check, if chain is a testnet
const isTestnet = ethNetProps.props.isTestnet(networkID)
```