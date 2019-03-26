const { networkIDs } = require('./enum')
const { isClassic } = require('./helper')
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
} = networkIDs

function getNetworkDisplayName(network) {
	const netID = isClassic(network) ? network : parseInt(network)
	switch (netID) {
	case MAINNET_CODE:
		return 'Main Ethereum Network'
	case ROPSTEN_CODE:
		return 'Ropsten Test Network'
	case RINKEBY_CODE:
		return 'Rinkeby Test Network'
	case GOERLI_CODE:
		return 'Görli Test Network'
	case KOVAN_CODE:
		return 'Kovan Test Network'
	case SOKOL_CODE:
		return 'Sokol Test Network'
	case POA_CORE_CODE:
		return 'POA Network'
	case XDAI_CODE:
		return 'xDai Chain'
	case RSK_CODE:
		return 'RSK Mainnet'
	case RSK_TESTNET_CODE:
		return 'RSK Testnet'
	case CLASSIC_CODE:
		return 'Ethereum Classic'
	default:
		return 'Unknown Private Network'
	}
}

function getNetworkCoinName(network) {
	const netID = isClassic ? network : parseInt(network)
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