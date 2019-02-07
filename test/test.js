//load modules
const explorerLinks = require('../helpers/get-explorer-links')
const faucetLinks = require('../helpers/get-faucet-links')
const RPCEndpoints = require('../helpers/get-rpc-endpoints')
const netProps = require('../helpers/get-net-properties')

const chai = require('chai')
const assert = chai.assert

describe('eth-net-props', () => {
	let claimPrefix = 'should return correct explorer link for'
	describe('gets explorer links', () => {
		describe ('getExplorerAccountLinkFor()', () => {
			it(`${claimPrefix} Sokol POA Network`, () => {
				assert.equal(explorerLinks.getExplorerAccountLinkFor('0x95426f2bc716022fcf1def006dbc4bb81f5b5164', 77), 'https://blockscout.com/poa/sokol/address/0x95426f2bc716022fcf1def006dbc4bb81f5b5164')
			})
			it(`${claimPrefix} Core POA Network`, () => {
				assert.equal(explorerLinks.getExplorerAccountLinkFor('0x15c40c6de9f2299680a4522d8635c9b394eded09', 99), 'https://blockscout.com/poa/core/address/0x15c40c6de9f2299680a4522d8635c9b394eded09')
			})
			it(`${claimPrefix} Dai Chain`, () => {
				assert.equal(explorerLinks.getExplorerAccountLinkFor('0x15c40c6de9f2299680a4522d8635c9b394eded09', 100), 'https://blockscout.com/poa/dai/address/0x15c40c6de9f2299680a4522d8635c9b394eded09')
			})
			it(`${claimPrefix} Mainnet`, () => {
				assert.equal(explorerLinks.getExplorerAccountLinkFor('0x70FDd102DDB03Dc55B1719E76DfeA784916621fd', 1), 'https://etherscan.io/address/0x70FDd102DDB03Dc55B1719E76DfeA784916621fd')
			})
			it(`${claimPrefix} Ropsten`, () => {
				assert.equal(explorerLinks.getExplorerAccountLinkFor('0x70FDd102DDB03Dc55B1719E76DfeA784916621fd', 3), 'https://ropsten.etherscan.io/address/0x70FDd102DDB03Dc55B1719E76DfeA784916621fd')
			})
			it(`${claimPrefix} Rinkeby`, () => {
				assert.equal(explorerLinks.getExplorerAccountLinkFor('0x70FDd102DDB03Dc55B1719E76DfeA784916621fd', 4), 'https://rinkeby.etherscan.io/address/0x70FDd102DDB03Dc55B1719E76DfeA784916621fd')
			})
			it(`${claimPrefix} Kovan`, () => {
				assert.equal(explorerLinks.getExplorerAccountLinkFor('0x70FDd102DDB03Dc55B1719E76DfeA784916621fd', 42), 'https://kovan.etherscan.io/address/0x70FDd102DDB03Dc55B1719E76DfeA784916621fd')
			})
			it(`${claimPrefix} RSK Mainnet`, () => {
				assert.equal(explorerLinks.getExplorerAccountLinkFor('0x70FDd102DDB03Dc55B1719E76DfeA784916621fd', 30), 'https://explorer.rsk.co/address/0x70FDd102DDB03Dc55B1719E76DfeA784916621fd')
			})
			it(`${claimPrefix} Goerli Testnet`, () => {
				assert.equal(explorerLinks.getExplorerAccountLinkFor('0xd8fe15886d2dcbc5d7c06394beb417aadaf1eee0', 5), 'https://blockscout.com/eth/goerli/address/0xd8fe15886d2dcbc5d7c06394beb417aadaf1eee0')
			})
		})

		describe ('getExplorerTxLinkFor()', () => {
			it(`${claimPrefix} Sokol POA Network`, () => {
				assert.equal(explorerLinks.getExplorerTxLinkFor('0x0af429e7a51e29ede74fe0748ffb6a141ffe41cfaaeadb4fca8b28c1914254c0', 77), 'https://blockscout.com/poa/sokol/tx/0x0af429e7a51e29ede74fe0748ffb6a141ffe41cfaaeadb4fca8b28c1914254c0')
			})
			it(`${claimPrefix} Core POA Network`, () => {
				assert.equal(explorerLinks.getExplorerTxLinkFor('0xb3b01bcc1a73477cd86de989cc207fa59f87ea601dea298772f4b1b3f6f1407e', 99), 'https://blockscout.com/poa/core/tx/0xb3b01bcc1a73477cd86de989cc207fa59f87ea601dea298772f4b1b3f6f1407e')
			})
			it(`${claimPrefix} Dai Chain`, () => {
				assert.equal(explorerLinks.getExplorerTxLinkFor('0xb3b01bcc1a73477cd86de989cc207fa59f87ea601dea298772f4b1b3f6f1407e', 100), 'https://blockscout.com/poa/dai/tx/0xb3b01bcc1a73477cd86de989cc207fa59f87ea601dea298772f4b1b3f6f1407e')
			})
			it(`${claimPrefix} Mainnet`, () => {
				assert.equal(explorerLinks.getExplorerTxLinkFor('0x892c825d1ec25b0a1a27aa5dff5b54fc4488a45029d0087fc40d3d733ded7305', 1), 'https://etherscan.io/tx/0x892c825d1ec25b0a1a27aa5dff5b54fc4488a45029d0087fc40d3d733ded7305')
			})
			it(`${claimPrefix} Ropsten`, () => {
				assert.equal(explorerLinks.getExplorerTxLinkFor('0x892c825d1ec25b0a1a27aa5dff5b54fc4488a45029d0087fc40d3d733ded7305', 3), 'https://ropsten.etherscan.io/tx/0x892c825d1ec25b0a1a27aa5dff5b54fc4488a45029d0087fc40d3d733ded7305')
			})
			it(`${claimPrefix} Rinkeby`, () => {
				assert.equal(explorerLinks.getExplorerTxLinkFor('0x892c825d1ec25b0a1a27aa5dff5b54fc4488a45029d0087fc40d3d733ded7305', 4), 'https://rinkeby.etherscan.io/tx/0x892c825d1ec25b0a1a27aa5dff5b54fc4488a45029d0087fc40d3d733ded7305')
			})
			it(`${claimPrefix} Kovan`, () => {
				assert.equal(explorerLinks.getExplorerTxLinkFor('0x892c825d1ec25b0a1a27aa5dff5b54fc4488a45029d0087fc40d3d733ded7305', 42), 'https://kovan.etherscan.io/tx/0x892c825d1ec25b0a1a27aa5dff5b54fc4488a45029d0087fc40d3d733ded7305')
			})
			it(`${claimPrefix} RSK Mainnet`, () => {
				assert.equal(explorerLinks.getExplorerTxLinkFor('0x33a7511c7838f5be0ade40d732f0a51cd28c8a641de9079836170cbdac8e7d83', 30), 'https://explorer.rsk.co/tx/0x33a7511c7838f5be0ade40d732f0a51cd28c8a641de9079836170cbdac8e7d83')
			})
			it(`${claimPrefix} Goerli Testnet`, () => {
				assert.equal(explorerLinks.getExplorerTxLinkFor('0xb9599801c83e6aa20769e7dcdce0989c7380ba78cb587d3d7db11e1b30b17b54', 5), 'https://blockscout.com/eth/goerli/tx/0xb9599801c83e6aa20769e7dcdce0989c7380ba78cb587d3d7db11e1b30b17b54')
			})
		})

		describe ('getExplorerTokenLinkFor()', () => {
			it(`${claimPrefix} Sokol POA Network`, () => {
				assert.equal(explorerLinks.getExplorerTokenLinkFor('0xcf2AEDCfb4ff2c9020fb61c41226A4DfD77D12dE', '0x70FDd102DDB03Dc55B1719E76DfeA784916621fd', 77), 'https://blockscout.com/poa/sokol/address/0xcf2AEDCfb4ff2c9020fb61c41226A4DfD77D12dE')
			})
			it(`${claimPrefix} Core POA Network`, () => {
				assert.equal(explorerLinks.getExplorerTokenLinkFor('0xcf2AEDCfb4ff2c9020fb61c41226A4DfD77D12dE', '0x70FDd102DDB03Dc55B1719E76DfeA784916621fd', 99), 'https://blockscout.com/poa/core/address/0xcf2AEDCfb4ff2c9020fb61c41226A4DfD77D12dE')
			})
			it(`${claimPrefix} Dai Chain`, () => {
				assert.equal(explorerLinks.getExplorerTokenLinkFor('0xcf2AEDCfb4ff2c9020fb61c41226A4DfD77D12dE', '0x70FDd102DDB03Dc55B1719E76DfeA784916621fd', 100), 'https://blockscout.com/poa/dai/address/0xcf2AEDCfb4ff2c9020fb61c41226A4DfD77D12dE')
			})
			it(`${claimPrefix} Mainnet`, () => {
				assert.equal(explorerLinks.getExplorerTokenLinkFor('0xcf2AEDCfb4ff2c9020fb61c41226A4DfD77D12dE', '0x70FDd102DDB03Dc55B1719E76DfeA784916621fd', 1), 'https://etherscan.io/token/0xcf2AEDCfb4ff2c9020fb61c41226A4DfD77D12dE?a=0x70FDd102DDB03Dc55B1719E76DfeA784916621fd')
			})
			it(`${claimPrefix} Ropsten`, () => {
				assert.equal(explorerLinks.getExplorerTokenLinkFor('0xcf2AEDCfb4ff2c9020fb61c41226A4DfD77D12dE', '0x70FDd102DDB03Dc55B1719E76DfeA784916621fd', 3), 'https://ropsten.etherscan.io/token/0xcf2AEDCfb4ff2c9020fb61c41226A4DfD77D12dE?a=0x70FDd102DDB03Dc55B1719E76DfeA784916621fd')
			})
			it(`${claimPrefix} Rinkeby`, () => {
				assert.equal(explorerLinks.getExplorerTokenLinkFor('0xcf2AEDCfb4ff2c9020fb61c41226A4DfD77D12dE', '0x70FDd102DDB03Dc55B1719E76DfeA784916621fd', 4), 'https://rinkeby.etherscan.io/token/0xcf2AEDCfb4ff2c9020fb61c41226A4DfD77D12dE?a=0x70FDd102DDB03Dc55B1719E76DfeA784916621fd')
			})
			it(`${claimPrefix} Kovan`, () => {
				assert.equal(explorerLinks.getExplorerTokenLinkFor('0xcf2AEDCfb4ff2c9020fb61c41226A4DfD77D12dE', '0x70FDd102DDB03Dc55B1719E76DfeA784916621fd', 42), 'https://kovan.etherscan.io/token/0xcf2AEDCfb4ff2c9020fb61c41226A4DfD77D12dE?a=0x70FDd102DDB03Dc55B1719E76DfeA784916621fd')
			})
			it(`${claimPrefix} RSK Mainnet`, () => {
				assert.equal(explorerLinks.getExplorerTokenLinkFor('0x16cb2604ce5951c8506fbf690d816be6d0aa00fb', '0x604056c0f88aed17ef975269aab1ae9d02840bb2', 30), 'https://explorer.rsk.co/token/0x16cb2604ce5951c8506fbf690d816be6d0aa00fb/account/0x604056c0f88aed17ef975269aab1ae9d02840bb2')
			})
			it(`${claimPrefix} Goerli testnet`, () => {
				assert.equal(explorerLinks.getExplorerTokenLinkFor('0xd8fe15886d2dcbc5d7c06394beb417aadaf1eee0', '0x604056c0f88aed17ef975269aab1ae9d02840bb2', 5), 'https://blockscout.com/eth/goerli/address/0xd8fe15886d2dcbc5d7c06394beb417aadaf1eee0')
			})
		})
	})

	claimPrefix = 'should return correct faucet link for'
	describe('get faucet links', () => {
		it(`${claimPrefix} Sokol POA Network`, () => {
			const sokolFaucetLinks = faucetLinks.getFaucetLinks(77)
			assert.equal(sokolFaucetLinks.length, 1)
			if (sokolFaucetLinks.length > 0) {
				assert.equal(sokolFaucetLinks[0], 'https://faucet.poa.network/')
			}
		})
		it(`${claimPrefix} Ropsten Network`, () => {
			const ropstenFaucetLinks = faucetLinks.getFaucetLinks(3)
			assert.equal(ropstenFaucetLinks.length, 1)
			if (ropstenFaucetLinks.length > 0) {
				assert.equal(ropstenFaucetLinks[0], 'https://faucet.metamask.io/')
			}
		})
		it(`${claimPrefix} Rinkeby Network`, () => {
			const rinkebyFaucetLinks = faucetLinks.getFaucetLinks(4)
			assert.equal(rinkebyFaucetLinks.length, 1)
			if (rinkebyFaucetLinks.length > 0) {
				assert.equal(rinkebyFaucetLinks[0], 'https://faucet.rinkeby.io/')
			}
		})
		it(`${claimPrefix} Kovan Network`, () => {
			const kovanFaucetLinks = faucetLinks.getFaucetLinks(42)
			assert.equal(kovanFaucetLinks.length, 2)
			if (kovanFaucetLinks.length > 0) {
				assert.equal(kovanFaucetLinks[0], 'https://faucet.kovan.network/')
				assert.equal(kovanFaucetLinks[1], 'https://gitter.im/kovan-testnet/faucet/')
			}
		})
		it(`${claimPrefix} RSK Testnet`, () => {
			const RSKFaucetLinks = faucetLinks.getFaucetLinks(31)
			assert.equal(RSKFaucetLinks.length, 1)
			if (RSKFaucetLinks.length > 0) {
				assert.equal(RSKFaucetLinks[0], 'https://faucet.testnet.rsk.co/')
			}
		})
		it(`${claimPrefix} Goerli Network`, () => {
			const goerliFaucetLinks = faucetLinks.getFaucetLinks(5)
			assert.equal(goerliFaucetLinks.length, 1)
			if (goerliFaucetLinks.length > 0) {
				assert.equal(goerliFaucetLinks[0], 'https://goerli-faucet.slock.it/')
			}
		})
		it('should not return faucet link for production blockchains', () => {
			assert.equal(faucetLinks.getFaucetLinks(1).length, 0)
			assert.equal(faucetLinks.getFaucetLinks(99).length, 0)
			assert.equal(faucetLinks.getFaucetLinks(100).length, 0)
			assert.equal(faucetLinks.getFaucetLinks(30).length, 0)
		})
	})

	claimPrefix = 'should return correct RPC endpoint for'
	describe('get RPC endpoints', () => {
		it(`${claimPrefix} Sokol POA Network`, () => {
			const sokolRPCEndpoints = RPCEndpoints.getRPCEndpoints(77)
			assert.equal(sokolRPCEndpoints.length, 1)
			if (sokolRPCEndpoints.length > 0) {
				assert.equal(sokolRPCEndpoints[0], 'https://sokol.poa.network/')
			}
		})
		it(`${claimPrefix} Ropsten Network`, () => {
			const ropstenRPCEndpoints = RPCEndpoints.getRPCEndpoints(3)
			assert.equal(ropstenRPCEndpoints.length, 1)
			if (ropstenRPCEndpoints.length > 0) {
				assert.equal(ropstenRPCEndpoints[0], 'https://ropsten.infura.io/')
			}
		})
		it(`${claimPrefix} Rinkeby Network`, () => {
			const rinkebyRPCEndpoints = RPCEndpoints.getRPCEndpoints(4)
			assert.equal(rinkebyRPCEndpoints.length, 1)
			if (rinkebyRPCEndpoints.length > 0) {
				assert.equal(rinkebyRPCEndpoints[0], 'https://rinkeby.infura.io/')
			}
		})
		it(`${claimPrefix} Kovan Network`, () => {
			const kovanRPCEndpoints = RPCEndpoints.getRPCEndpoints(42)
			assert.equal(kovanRPCEndpoints.length, 1)
			if (kovanRPCEndpoints.length > 0) {
				assert.equal(kovanRPCEndpoints[0], 'https://kovan.infura.io/')
			}
		})
		it(`${claimPrefix} Mainnet`, () => {
			const MainnetRPCEndpoints = RPCEndpoints.getRPCEndpoints(1)
			assert.equal(MainnetRPCEndpoints.length, 1)
			if (MainnetRPCEndpoints.length > 0) {
				assert.equal(MainnetRPCEndpoints[0], 'https://mainnet.infura.io/')
			}
		})
		it(`${claimPrefix} Core POA Network`, () => {
			const POARPCEndpoints = RPCEndpoints.getRPCEndpoints(99)
			assert.equal(POARPCEndpoints.length, 1)
			if (POARPCEndpoints.length > 0) {
				assert.equal(POARPCEndpoints[0], 'https://core.poa.network/')
			}
		})
		it(`${claimPrefix} xDai chain`, () => {
			const xDaiRPCEndpoints = RPCEndpoints.getRPCEndpoints(100)
			assert.equal(xDaiRPCEndpoints.length, 1)
			if (xDaiRPCEndpoints.length > 0) {
				assert.equal(xDaiRPCEndpoints[0], 'https://dai.poa.network/')
			}
		})
		it(`${claimPrefix} RSK Mainnet`, () => {
			const RSKRPCEndpoints = RPCEndpoints.getRPCEndpoints(30)
			assert.equal(RSKRPCEndpoints.length, 1)
			if (RSKRPCEndpoints.length > 0) {
				assert.equal(RSKRPCEndpoints[0], 'https://public-node.rsk.co')
			}
		})
		it(`${claimPrefix} RSK TestNet`, () => {
			const RSKRPCEndpoints = RPCEndpoints.getRPCEndpoints(31)
			assert.equal(RSKRPCEndpoints.length, 1)
			if (RSKRPCEndpoints.length > 0) {
				assert.equal(RSKRPCEndpoints[0], 'https://public-node.testnet.rsk.co')
			}
		})
		it(`${claimPrefix} Goerli testnet`, () => {
			const GoerliRPCEndpoints = RPCEndpoints.getRPCEndpoints(5)
			assert.equal(GoerliRPCEndpoints.length, 1)
			if (GoerliRPCEndpoints.length > 0) {
				assert.equal(GoerliRPCEndpoints[0], 'https://goerli.blockscout.com/')
			}
		})
	})

	claimPrefix = 'should return correct display name for'
	describe('get network properties', () => {
		it(`${claimPrefix} Sokol POA Network`, () => {
			assert.equal(netProps.getNetworkDisplayName(77), 'Sokol Test Network')
		})
		it(`${claimPrefix} Core POA Network`, () => {
			assert.equal(netProps.getNetworkDisplayName(99), 'POA Network')
		})
		it(`${claimPrefix} DAI chain`, () => {
			assert.equal(netProps.getNetworkDisplayName(100), 'xDai Chain')
		})
		it(`${claimPrefix} Mainnet`, () => {
			assert.equal(netProps.getNetworkDisplayName(1), 'Main Ethereum Network')
		})
		it(`${claimPrefix} RSK Mainnet`, () => {
			assert.equal(netProps.getNetworkDisplayName(30), 'RSK Mainnet')
		})
		it(`${claimPrefix} Ropsten`, () => {
			assert.equal(netProps.getNetworkDisplayName(3), 'Ropsten Test Network')
		})
		it(`${claimPrefix} Rinkeby`, () => {
			assert.equal(netProps.getNetworkDisplayName(4), 'Rinkeby Test Network')
		})
		it(`${claimPrefix} Kovan`, () => {
			assert.equal(netProps.getNetworkDisplayName(42), 'Kovan Test Network')
		})
		it(`${claimPrefix} RSK Testnet`, () => {
			assert.equal(netProps.getNetworkDisplayName(31), 'RSK Testnet')
		})
		it(`${claimPrefix} Goerli Testnet`, () => {
			assert.equal(netProps.getNetworkDisplayName(5), 'Görli Test Network')
		})

		claimPrefix = 'should return correct coin name for'
		it(`${claimPrefix} Sokol POA Network`, () => {
			assert.equal(netProps.getNetworkCoinName(77), 'POA')
		})
		it(`${claimPrefix} Core POA Network`, () => {
			assert.equal(netProps.getNetworkCoinName(99), 'POA')
		})
		it(`${claimPrefix} DAI chain`, () => {
			assert.equal(netProps.getNetworkCoinName(100), 'xDAI')
		})
		it(`${claimPrefix} Mainnet`, () => {
			assert.equal(netProps.getNetworkCoinName(1), 'ETH')
		})
		it(`${claimPrefix} RSK Mainnet`, () => {
			assert.equal(netProps.getNetworkCoinName(30), 'RBTC')
		})
		it(`${claimPrefix} Ropsten`, () => {
			assert.equal(netProps.getNetworkCoinName(3), 'ETH')
		})
		it(`${claimPrefix} Rinkeby`, () => {
			assert.equal(netProps.getNetworkCoinName(4), 'ETH')
		})
		it(`${claimPrefix} Kovan`, () => {
			assert.equal(netProps.getNetworkCoinName(42), 'ETH')
		})
		it(`${claimPrefix} RSK Testnet`, () => {
			assert.equal(netProps.getNetworkCoinName(31), 'RBTC')
		})
		it(`${claimPrefix} Goerli Testnet`, () => {
			assert.equal(netProps.getNetworkCoinName(5), 'GöETH')
		})

		it('Sokol POA Network is a testnet', () => {
			assert.equal(netProps.isTestnet(77), true)
		})
		it('Core POA Network is not a testnet', () => {
			assert.equal(netProps.isTestnet(99), false)
		})
		it('DAI chain is not a testnet', () => {
			assert.equal(netProps.isTestnet(100), false)
		})
		it('Mainnet is not a testnet', () => {
			assert.equal(netProps.isTestnet(1), false)
		})
		it('RSK Mainnet is not a testnet', () => {
			assert.equal(netProps.isTestnet(30), false)
		})
		it('Ropsten is a testnet', () => {
			assert.equal(netProps.isTestnet(3), true)
		})
		it('Rinkeby is a testnet', () => {
			assert.equal(netProps.isTestnet(4), true)
		})
		it('Kovan is a testnet', () => {
			assert.equal(netProps.isTestnet(42), true)
		})
		it('RSK Testnet is a testnet', () => {
			assert.equal(netProps.isTestnet(31), true)
		})
		it('Goerli Testnet is a testnet', () => {
			assert.equal(netProps.isTestnet(5), true)
		})
	})
})