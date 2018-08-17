//load modules
const explorerLinks = require('../helpers/get-explorer-links')
const netProps = require('../helpers/get-net-properties')

const chai = require('chai')
const assert = chai.assert
//const sould = chai.should()

console.log('test test')

describe('eth-net-props', () => {
	describe('get explorer links', () => {
		describe ('getExplorerAccountLinkFor()', () => {
			it('should return correct explorer link for Sokol POA Network', () => {
				assert.equal(explorerLinks.getExplorerAccountLinkFor('0x70FDd102DDB03Dc55B1719E76DfeA784916621fd', 77), 'https://sokol.poaexplorer.com/address/search/0x70FDd102DDB03Dc55B1719E76DfeA784916621fd')
			})
			it('should return correct explorer link for Core POA Network', () => {
				assert.equal(explorerLinks.getExplorerAccountLinkFor('0x70FDd102DDB03Dc55B1719E76DfeA784916621fd', 99), 'https://poaexplorer.com/address/search/0x70FDd102DDB03Dc55B1719E76DfeA784916621fd')
			})
			it('should return correct explorer link for Mainnet', () => {
				assert.equal(explorerLinks.getExplorerAccountLinkFor('0x70FDd102DDB03Dc55B1719E76DfeA784916621fd', 1), 'https://etherscan.io/address/0x70FDd102DDB03Dc55B1719E76DfeA784916621fd')
			})
			it('should return correct explorer link for Ropsten', () => {
				assert.equal(explorerLinks.getExplorerAccountLinkFor('0x70FDd102DDB03Dc55B1719E76DfeA784916621fd', 3), 'https://ropsten.etherscan.io/address/0x70FDd102DDB03Dc55B1719E76DfeA784916621fd')
			})
			it('should return correct explorer link for Rinkeby', () => {
				assert.equal(explorerLinks.getExplorerAccountLinkFor('0x70FDd102DDB03Dc55B1719E76DfeA784916621fd', 4), 'https://rinkeby.etherscan.io/address/0x70FDd102DDB03Dc55B1719E76DfeA784916621fd')
			})
			it('should return correct explorer link for Kovan', () => {
				assert.equal(explorerLinks.getExplorerAccountLinkFor('0x70FDd102DDB03Dc55B1719E76DfeA784916621fd', 42), 'https://kovan.etherscan.io/address/0x70FDd102DDB03Dc55B1719E76DfeA784916621fd')
			})
		})

		describe ('getExplorerTxLinkFor()', () => {
			it('should return correct explorer link for Sokol POA Network', () => {
				assert.equal(explorerLinks.getExplorerTxLinkFor('0x892c825d1ec25b0a1a27aa5dff5b54fc4488a45029d0087fc40d3d733ded7305', 77), 'https://sokol.poaexplorer.com/txid/search/0x892c825d1ec25b0a1a27aa5dff5b54fc4488a45029d0087fc40d3d733ded7305')
			})
			it('should return correct explorer link for Core POA Network', () => {
				assert.equal(explorerLinks.getExplorerTxLinkFor('0x892c825d1ec25b0a1a27aa5dff5b54fc4488a45029d0087fc40d3d733ded7305', 99), 'https://poaexplorer.com/txid/search/0x892c825d1ec25b0a1a27aa5dff5b54fc4488a45029d0087fc40d3d733ded7305')
			})
			it('should return correct explorer link for Mainnet', () => {
				assert.equal(explorerLinks.getExplorerTxLinkFor('0x892c825d1ec25b0a1a27aa5dff5b54fc4488a45029d0087fc40d3d733ded7305', 1), 'https://etherscan.io/tx/0x892c825d1ec25b0a1a27aa5dff5b54fc4488a45029d0087fc40d3d733ded7305')
			})
			it('should return correct explorer link for Ropsten', () => {
				assert.equal(explorerLinks.getExplorerTxLinkFor('0x892c825d1ec25b0a1a27aa5dff5b54fc4488a45029d0087fc40d3d733ded7305', 3), 'https://ropsten.etherscan.io/tx/0x892c825d1ec25b0a1a27aa5dff5b54fc4488a45029d0087fc40d3d733ded7305')
			})
			it('should return correct explorer link for Rinkeby', () => {
				assert.equal(explorerLinks.getExplorerTxLinkFor('0x892c825d1ec25b0a1a27aa5dff5b54fc4488a45029d0087fc40d3d733ded7305', 4), 'https://rinkeby.etherscan.io/tx/0x892c825d1ec25b0a1a27aa5dff5b54fc4488a45029d0087fc40d3d733ded7305')
			})
			it('should return correct explorer link for Kovan', () => {
				assert.equal(explorerLinks.getExplorerTxLinkFor('0x892c825d1ec25b0a1a27aa5dff5b54fc4488a45029d0087fc40d3d733ded7305', 42), 'https://kovan.etherscan.io/tx/0x892c825d1ec25b0a1a27aa5dff5b54fc4488a45029d0087fc40d3d733ded7305')
			})
		})

		describe ('getExplorerTokenLinkFor()', () => {
			it('should return correct explorer link for Sokol POA Network', () => {
				assert.equal(explorerLinks.getExplorerTokenLinkFor('0xcf2AEDCfb4ff2c9020fb61c41226A4DfD77D12dE', '0x70FDd102DDB03Dc55B1719E76DfeA784916621fd', 77), 'https://sokol.poaexplorer.com/address/search/0xcf2AEDCfb4ff2c9020fb61c41226A4DfD77D12dE')
			})
			it('should return correct explorer link for Core POA Network', () => {
				assert.equal(explorerLinks.getExplorerTokenLinkFor('0xcf2AEDCfb4ff2c9020fb61c41226A4DfD77D12dE', '0x70FDd102DDB03Dc55B1719E76DfeA784916621fd', 99), 'https://poaexplorer.com/address/search/0xcf2AEDCfb4ff2c9020fb61c41226A4DfD77D12dE')
			})
			it('should return correct explorer link for Mainnet', () => {
				assert.equal(explorerLinks.getExplorerTokenLinkFor('0xcf2AEDCfb4ff2c9020fb61c41226A4DfD77D12dE', '0x70FDd102DDB03Dc55B1719E76DfeA784916621fd', 1), 'https://etherscan.io/token/0xcf2AEDCfb4ff2c9020fb61c41226A4DfD77D12dE?a=0x70FDd102DDB03Dc55B1719E76DfeA784916621fd')
			})
			it('should return correct explorer link for Ropsten', () => {
				assert.equal(explorerLinks.getExplorerTokenLinkFor('0xcf2AEDCfb4ff2c9020fb61c41226A4DfD77D12dE', '0x70FDd102DDB03Dc55B1719E76DfeA784916621fd', 3), 'https://ropsten.etherscan.io/token/0xcf2AEDCfb4ff2c9020fb61c41226A4DfD77D12dE?a=0x70FDd102DDB03Dc55B1719E76DfeA784916621fd')
			})
			it('should return correct explorer link for Rinkeby', () => {
				assert.equal(explorerLinks.getExplorerTokenLinkFor('0xcf2AEDCfb4ff2c9020fb61c41226A4DfD77D12dE', '0x70FDd102DDB03Dc55B1719E76DfeA784916621fd', 4), 'https://rinkeby.etherscan.io/token/0xcf2AEDCfb4ff2c9020fb61c41226A4DfD77D12dE?a=0x70FDd102DDB03Dc55B1719E76DfeA784916621fd')
			})
			it('should return correct explorer link for Kovan', () => {
				assert.equal(explorerLinks.getExplorerTokenLinkFor('0xcf2AEDCfb4ff2c9020fb61c41226A4DfD77D12dE', '0x70FDd102DDB03Dc55B1719E76DfeA784916621fd', 42), 'https://kovan.etherscan.io/token/0xcf2AEDCfb4ff2c9020fb61c41226A4DfD77D12dE?a=0x70FDd102DDB03Dc55B1719E76DfeA784916621fd')
			})
		})
	})

	describe('get network properties', () => {
		it('should return correct display name for Sokol POA Network', () => {
			assert.equal(netProps.getNetworkDisplayName(77), 'POA Sokol Test Network')
		})
		it('should return correct display name for Core POA Network', () => {
			assert.equal(netProps.getNetworkDisplayName(99), 'POA Network')
		})
		it('should return correct display name for Mainnet', () => {
			assert.equal(netProps.getNetworkDisplayName(1), 'Main Ethereum Network')
		})
		it('should return correct display name for Ropsten', () => {
			assert.equal(netProps.getNetworkDisplayName(3), 'Ropsten Test Network')
		})
		it('should return correct display name for Rinkeby', () => {
			assert.equal(netProps.getNetworkDisplayName(4), 'Rinkeby Test Network')
		})
		it('should return correct display name for Kovan', () => {
			assert.equal(netProps.getNetworkDisplayName(42), 'Kovan Test Network')
		})
	})
})