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
	RSK_TESTNET_CODE,
	CLASSIC_CODE,
	CALLISTO_NETWORK_CODE
} = networkIDs

function getNetworkDisplayName(network) {
	const netID = parseInt(network)
	switch (netID) {
	case MAINNET_CODE:
		return 'Ethereum'
	case ROPSTEN_CODE:
		return 'Ropsten Testnet'
	case RINKEBY_CODE:
		return 'Rinkeby Testnet'
	case GOERLI_CODE:
		return 'Görli Testnet'
	case KOVAN_CODE:
		return 'Kovan Testnet'
	case SOKOL_CODE:
		return 'Sokol Testnet'
	case POA_CORE_CODE:
		return 'POA'
	case XDAI_CODE:
		return 'xDai'
	case RSK_CODE:
		return 'RSK'
	case RSK_TESTNET_CODE:
		return 'RSK Testnet'
	case CLASSIC_CODE:
		return 'Ethereum Classic'
	case CALLISTO_NETWORK_CODE:
		return 'Callisto Network'
	default:
		return 'Unknown Private Network'
	}
}

function getNetworkCoinName(network) {
	const netID = parseInt(network)
	switch (netID) {
	case SOKOL_CODE:
	case POA_CORE_CODE:
		return 'POA'
	case RSK_CODE:
	case RSK_TESTNET_CODE:
		return 'RBTC'
	case XDAI_CODE:
		return 'xDAI'
	case GOERLI_CODE:
		return 'GöETH'
	case CLASSIC_CODE:
		return 'ETC'
	case CALLISTO_NETWORK_CODE:
		return 'CLO'
	default:
		return 'ETH'
	}
}

function isTestnet(network) {
	const netID = parseInt(network)
	switch (netID) {
	case MAINNET_CODE:
	case POA_CORE_CODE:
	case XDAI_CODE:
	case RSK_CODE:
	case CLASSIC_CODE:
	case CALLISTO_NETWORK_CODE:
		return false
	default:
		return true
	}
}

module.exports = {
	getNetworkDisplayName,
	getNetworkCoinName,
	isTestnet
}
