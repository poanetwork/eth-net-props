const { networkIDs } = require('./enum')
const {
	MAINNET_CODE,
	ROPSTEN_CODE,
	RINKEBY_CODE,
	GOERLI_CODE,
	KOVAN_CODE,
	SOKOL_CODE,
	POA_CORE_CODE,
	XDAI_CODE,
	RSK_CODE,
} = networkIDs

const POA_IDs = [SOKOL_CODE, POA_CORE_CODE, XDAI_CODE]
const RSK_IDs = [RSK_CODE]
const ETH_IDs = [GOERLI_CODE]

const blockScoutLink = (net, prefix) => `https://blockscout.com/${net}/${prefix}`
const etherscanLink = (prefix) => `https://${prefix}etherscan.io`
const rskExplorerLink = 'https://explorer.rsk.co'

const getExplorerAccountLinkFor = (account, network) => {
	const prefix = getExplorerPrefix(network)
	if (POA_IDs.includes(parseInt(network))) {
		return `${blockScoutLink('poa', prefix)}/address/${account}`
	} else if (ETH_IDs.includes(parseInt(network))) {
		return `${blockScoutLink('eth', prefix)}/address/${account}`
	} else if (RSK_IDs.includes(parseInt(network))) {
		return `${rskExplorerLink}/address/${account}`
	} else {
		return `${etherscanLink(prefix)}/address/${account}`
	}
}

const getExplorerTxLinkFor = (hash, network) => {
	const prefix = getExplorerPrefix(network)
	if (POA_IDs.includes(parseInt(network))) {
		return `${blockScoutLink('poa', prefix)}/tx/${hash}`
	} else if (ETH_IDs.includes(parseInt(network))) {
		return `${blockScoutLink('eth', prefix)}/tx/${hash}`
	} else if (RSK_IDs.includes(parseInt(network))) {
		return `${rskExplorerLink}/tx/${hash}`
	} else {
		return `${etherscanLink(prefix)}/tx/${hash}`
	}
}

const getExplorerTokenLinkFor = (tokenAddress, account, network) => {
	const prefix = getExplorerPrefix(network)
	if (POA_IDs.includes(parseInt(network))) {
		return `${blockScoutLink('poa', prefix)}/address/${tokenAddress}`
	} else if (ETH_IDs.includes(parseInt(network))) {
		return `${blockScoutLink('eth', prefix)}/address/${tokenAddress}`
	} else if (RSK_IDs.includes(parseInt(network))) {
		return `${rskExplorerLink}/token/${tokenAddress}/account/${account}`
	} else {
		return `${etherscanLink(prefix)}/token/${tokenAddress}?a=${account}`
	}
}

function getExplorerPrefix (network) {
	const net = parseInt(network)
	let prefix
	switch (net) {
	case MAINNET_CODE: // main net
		prefix = ''
		break
	case ROPSTEN_CODE: // ropsten test net
		prefix = 'ropsten.'
		break
	case RINKEBY_CODE: // rinkeby test net
		prefix = 'rinkeby.'
		break
	case KOVAN_CODE: // kovan test net
		prefix = 'kovan.'
		break
	case SOKOL_CODE: // POA Sokol test net
		prefix = 'sokol'
		break
	case POA_CORE_CODE: // POA Core net
		prefix = 'core'
		break
	case XDAI_CODE: // Dai chain
		prefix = 'dai'
		break
	case GOERLI_CODE: // Goerli testnet
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
