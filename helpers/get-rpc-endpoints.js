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

function getRPCEndpoints(network) {
	const netID = parseInt(network)
	switch (netID) {
	case ETH_MAINNET_CODE:
		return ['https://mainnet.infura.io/']
	case ETH_ROPSTEN_CODE:
		return ['https://ropsten.infura.io/']
	case ETH_RINKEBY_CODE:
		return ['https://rinkeby.infura.io/']
	case ETH_GOERLI_CODE:
		return ['https://rpc.slock.it/goerli/']
	case ETH_SEPOLIA_CODE:
		return ['https://rpc.sepolia.org']
	case ETH_KOVAN_CODE:
		return ['https://kovan.poa.network/']
	case POA_SOKOL_CODE:
		return ['https://sokol.poa.network/']
	case POA_CORE_CODE:
		return ['https://core.poanetwork.dev/']
	case GC_MAINNET_CODE:
		return ['https://rpc.gnosischain.com']
	case GC_OPTIMISM_CODE:
		return ['https://optimism.gnosischain.com']
	case RSK_MAINNET_CODE:
		return ['https://public-node.rsk.co']
	case RSK_TESTNET_CODE:
		return ['https://public-node.testnet.rsk.co']
	case ETC_MAINNET_CODE:
		return ['https://www.ethercluster.com/etc']
	case OPTIMISM_GOERLI_CODE:
		return ['https://goerli.optimism.io/']
	case ASTAR_CODE:
		return ['https://rpc.astar.network:8545', 'https://astar.public.blastapi.io']
	case SHIDEN_CODE:
		return ['https://rpc.shiden.astar.network:8545', 'https://shiden.public.blastapi.io']
	case SHIBUYA_CODE:
		return ['https://shibuya.public.blastapi.io']
	case CELO_CODE:
		return ['https://forno.celo.org']
	case CELO_ALFAJORES_TESTNET_CODE:
		return ['https://alfajores-forno.celo-testnet.org']
	case CELO_BAKLAVA_TESTNET_CODE:
		return ['https://baklava-forno.celo-testnet.org']
	default:
		return []
	}
}

module.exports = {
	getRPCEndpoints
}