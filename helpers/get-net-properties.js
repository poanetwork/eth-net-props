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

function getNetworkDisplayName(network) {
	const netID = parseInt(network)
	switch (netID) {
	case ETH_MAINNET_CODE:
		return 'Ethereum'
	case ETH_ROPSTEN_CODE:
		return 'Ropsten Testnet'
	case ETH_RINKEBY_CODE:
		return 'Rinkeby Testnet'
	case ETH_GOERLI_CODE:
		return 'Görli Testnet'
	case ETH_SEPOLIA_CODE:
		return 'Sepolia Testnet'
	case ETH_KOVAN_CODE:
		return 'Kovan Testnet'
	case POA_SOKOL_CODE:
		return 'Sokol Testnet'
	case POA_CORE_CODE:
		return 'POA'
	case GC_MAINNET_CODE:
		return 'Gnosis Chain'
	case GC_OPTIMISM_CODE:
		return 'Optimism on Gnosis Chain'
	case RSK_MAINNET_CODE:
		return 'RSK'
	case RSK_TESTNET_CODE:
		return 'RSK Testnet'
	case ETC_MAINNET_CODE:
		return 'Ethereum Classic'
	case OPTIMISM_GOERLI_CODE:
		return 'Optimism Goerli Testnet'
	case ASTAR_CODE:
		return 'Astar'
	case SHIDEN_CODE:
		return 'Shiden'
	case SHIBUYA_CODE:
		return 'Shibya'
	case CELO_CODE:
		return 'CELO'
	case CELO_ALFAJORES_TESTNET_CODE:
		return 'CELO Alfajores'
	case CELO_BAKLAVA_TESTNET_CODE:
		return 'CELO Baklava'
	default:
		return 'Unknown Private Network'
	}
}

function getNetworkCoinName(network) {
	const netID = parseInt(network)
	switch (netID) {
	case POA_SOKOL_CODE:
	case POA_CORE_CODE:
		return 'POA'
	case RSK_MAINNET_CODE:
	case RSK_TESTNET_CODE:
		return 'RBTC'
	case GC_MAINNET_CODE:
	case GC_OPTIMISM_CODE:
		return 'xDAI'
	case ETH_GOERLI_CODE:
		return 'GöETH'
	case ETH_SEPOLIA_CODE:
		return 'SEP'
	case ETC_MAINNET_CODE:
		return 'ETC'
	case ASTAR_CODE:
		return 'ASTR'
	case SHIDEN_CODE:
		return 'SDN'
	case SHIBUYA_CODE:
		return 'SBY'
	case CELO_CODE:
	case CELO_ALFAJORES_TESTNET_CODE:
	case CELO_BAKLAVA_TESTNET_CODE:
		return 'CELO'
	default:
		return 'ETH'
	}
}

function isTestnet(network) {
	const netID = parseInt(network)
	switch (netID) {
	case ETH_MAINNET_CODE:
	case POA_CORE_CODE:
	case GC_MAINNET_CODE:
	case GC_OPTIMISM_CODE:
	case RSK_MAINNET_CODE:
	case ETC_MAINNET_CODE:
	case CELO_CODE:
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