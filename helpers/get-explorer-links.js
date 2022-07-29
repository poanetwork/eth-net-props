const { networkIDs } = require('./enum')
const {
	ETH_MAINNET_CODE,
	ETH_ROPSTEN_CODE,
	ETH_RINKEBY_CODE,
	ETH_GOERLI_CODE,
	ETH_SEPOLIA_CODE,
	ETH_KOVAN_CODE,
	POA_SOKOL_CODE,
	POA_CORE_CODE,
	GC_MAINNET_CODE,
	GC_OPTIMISM_CODE,
	RSK_MAINNET_CODE,
	RSK_TESTNET_CODE,
	ETC_MAINNET_CODE,
	OPTIMISM_GOERLI_CODE,
	ASTAR_CODE,
	SHIDEN_CODE,
	SHIBUYA_CODE,
	CELO_CODE,
	CELO_ALFAJORES_TESTNET_CODE,
	CELO_BAKLAVA_TESTNET_CODE,
} = networkIDs

const blockScoutLink = (net, prefix) => {
	if (prefix) {
		return `https://blockscout.com/${net}/${prefix}`
	} else {
		return `https://blockscout.com/${net}`
	}
}
const etherscanLink = (prefix) => prefix === 'mainnet' ? 'https://etherscan.io' : `https://${prefix}.etherscan.io`
const rskTestnetExplorerLink = 'https://explorer.testnet.rsk.co'
const celoExplorerLink = 'https://explorer.celo.org'
const celoAlfajoresTestnetExplorerLink = 'https://alfajores-blockscout.celo-testnet.org'
const celoBaklavaTestnetExplorerLink = 'https://baklava-blockscout.celo-testnet.org'

const explorerLink = (networkCode, net, prefix) => {
	switch (networkCode) {
	case POA_SOKOL_CODE: // POA Sokol testnet
	case POA_CORE_CODE: // POA Core
	case GC_MAINNET_CODE: // Gnosis chain
	case GC_OPTIMISM_CODE: // GC Optimism
	case ETC_MAINNET_CODE: // ETC mainnet
	case RSK_MAINNET_CODE: // RSK mainnet
	case OPTIMISM_GOERLI_CODE: // Optimissm Goerli testnet
	case ASTAR_CODE: // Astar
	case SHIDEN_CODE: // Shiden
	case SHIBUYA_CODE: // Shibuya
		return blockScoutLink(net, prefix)
	case RSK_TESTNET_CODE: // RSK testnet
		return rskTestnetExplorerLink
	case ETH_MAINNET_CODE: // main net
	case ETH_ROPSTEN_CODE: // ropsten testnet
	case ETH_RINKEBY_CODE: // rinkeby testnet
	case ETH_KOVAN_CODE: // kovan testnet
	case ETH_GOERLI_CODE: // Goerli testnet
	case ETH_SEPOLIA_CODE: // Sepolia testnet
		return etherscanLink(prefix)
	case CELO_CODE: // CELO
		return celoExplorerLink
	case CELO_ALFAJORES_TESTNET_CODE: // CELO ALFAJORES TESTNET
		return celoAlfajoresTestnetExplorerLink
	case CELO_BAKLAVA_TESTNET_CODE: // CELO BAKLAVA TESTNET
		return celoBaklavaTestnetExplorerLink
	default:
		return blockScoutLink(net, prefix)
	}
}

const tokenLink = (networkCode, chain, prefix, tokenAddress, holderAddress) => {
	const blockscoutLinkStr = `${blockScoutLink(chain, prefix)}/address/${holderAddress}/tokens/${tokenAddress}/token-transfers`
	const etherscanLinkStr = `${etherscanLink(prefix)}/token/${tokenAddress}?a=${holderAddress}`
	const rskTestnetExplorerLinkStr = `${rskTestnetExplorerLink}/address/${tokenAddress}`
	const celoExplorerLinkStr = `${celoExplorerLink}/address/${holderAddress}/tokens/${tokenAddress}/token_transfers`
	const celoAlfajoresTestnetExplorerLinkStr = `${celoAlfajoresTestnetExplorerLink}/address/${holderAddress}/tokens/${tokenAddress}/token_transfers`
	const celoBaklavaTestnetExplorerLinkStr = `${celoBaklavaTestnetExplorerLink}/address/${holderAddress}/tokens/${tokenAddress}/token_transfers`

	switch (networkCode) {
	case POA_SOKOL_CODE: // POA Sokol testnet
	case POA_CORE_CODE: // POA Core
	case GC_MAINNET_CODE: // Gnosis chain
	case GC_OPTIMISM_CODE: // GC Optimism
	case ETC_MAINNET_CODE: // ETC mainnet
	case RSK_MAINNET_CODE: // RSK mainnet
	case OPTIMISM_GOERLI_CODE: // Optimism Goerli testnet
	case ASTAR_CODE: // Astar
	case SHIDEN_CODE: // Shiden
	case SHIBUYA_CODE: // Shibuya
		return blockscoutLinkStr
	case RSK_TESTNET_CODE: // RSK testnet
		return rskTestnetExplorerLinkStr
	case ETH_MAINNET_CODE: // main net
	case ETH_ROPSTEN_CODE: // ropsten testnet
	case ETH_RINKEBY_CODE: // rinkeby testnet
	case ETH_KOVAN_CODE: // kovan testnet
	case ETH_GOERLI_CODE: // Goerli testnet
	case ETH_SEPOLIA_CODE: // Sepolia testnet
		return etherscanLinkStr
	case CELO_CODE: // CELO
		return celoExplorerLinkStr
	case CELO_ALFAJORES_TESTNET_CODE: // CELO Alfajores testnet
		return celoAlfajoresTestnetExplorerLinkStr
	case CELO_BAKLAVA_TESTNET_CODE: // CELO Baklava testnet
		return celoBaklavaTestnetExplorerLinkStr
	default:
		return blockscoutLinkStr
	}
}

const getExplorerAccountLinkFor = (account, networkCode) => {
	const prefix = getExplorerPrefix(networkCode)
	const chain = getExplorerChain(networkCode)
	return `${explorerLink(networkCode, chain, prefix)}/address/${account}`
}

const getExplorerTxLinkFor = (hash, networkCode) => {
	const prefix = getExplorerPrefix(networkCode)
	const chain = getExplorerChain(networkCode)
	return `${explorerLink(networkCode, chain, prefix)}/tx/${hash}`
}

const getExplorerTokenLinkFor = (tokenAddress, holderAddress, networkCode) => {
	const prefix = getExplorerPrefix(networkCode)
	const chain = getExplorerChain(networkCode)
	return tokenLink(networkCode, chain, prefix, tokenAddress, holderAddress)
}

function getExplorerChain (networkCode) {
	const net = parseInt(networkCode)
	let chain
	switch (net) {
	case ETH_MAINNET_CODE: // main net
	case ETH_ROPSTEN_CODE: // ropsten testnet
	case ETH_RINKEBY_CODE: // rinkeby testnet
	case ETH_KOVAN_CODE: // kovan testnet
	case ETH_GOERLI_CODE: // Goerli testnet
	case ETH_SEPOLIA_CODE: // Sepolia testnet
		chain = 'eth'
		break
	case POA_SOKOL_CODE: // POA Sokol testnet
	case POA_CORE_CODE: // POA Core
		chain = 'poa'
		break
	case GC_MAINNET_CODE: // Gnosis chain
	case GC_OPTIMISM_CODE: // Optimism on Gnosis chain
		chain = 'xdai'
		break
	case ETC_MAINNET_CODE: // ETC mainnet
		chain = 'etc'
		break
	case RSK_MAINNET_CODE: // RSK mainnet
		chain = 'rsk'
		break
	case OPTIMISM_GOERLI_CODE: // Optimism Goerli testnet
		chain = 'optimism'
		break
	case ASTAR_CODE: // Astar
		chain = 'astar'
		break
	case SHIDEN_CODE: // Shiden
		chain = 'shiden'
		break
	case SHIBUYA_CODE: // Shibuya
		chain = 'shibuya'
		break
	case CELO_CODE: // CELO
		chain = 'celo'
		break
	case CELO_ALFAJORES_TESTNET_CODE: // CELO Alfajores testnet
		chain = 'celo-alfajores'
		break
	case CELO_BAKLAVA_TESTNET_CODE: // CELO Baklava testnet
		chain = 'celo-baklava'
		break
	default:
		chain = ''
	}
	return chain
}

function getExplorerPrefix (networkCode) {
	const net = parseInt(networkCode)
	let prefix
	switch (net) {
	case ETH_MAINNET_CODE: // main net
	case ETC_MAINNET_CODE: // ETC mainnet
	case RSK_MAINNET_CODE: // RSK mainnet
	case GC_MAINNET_CODE: // Gnosis chain
		prefix = 'mainnet'
		break
	case ETH_ROPSTEN_CODE: // ropsten testnet
		prefix = 'ropsten'
		break
	case ETH_RINKEBY_CODE: // rinkeby testnet
		prefix = 'rinkeby'
		break
	case ETH_SEPOLIA_CODE: // Sepolia testnet
		prefix = 'sepolia'
		break
	case ETH_KOVAN_CODE: // kovan testnet
		prefix = 'kovan'
		break
	case POA_SOKOL_CODE: // POA Sokol testnet
		prefix = 'sokol'
		break
	case POA_CORE_CODE: // POA Core
		prefix = 'core'
		break
	case GC_OPTIMISM_CODE: // GC Optimism
		prefix = 'optimism'
		break
	case ETH_GOERLI_CODE: // Goerli testnet
	case OPTIMISM_GOERLI_CODE: // Optimism Goerli testnet
		prefix = 'goerli'
		break
	default:
		prefix = ''
	}
	return prefix
}

module.exports = {
	getExplorerAccountLinkFor,
	getExplorerTxLinkFor,
	getExplorerTokenLinkFor,
}
