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

function getRPCEndpoints(network) {
	const netID = parseInt(network)
	switch (netID) {
	case MAINNET_CODE:
		return ['https://mainnet.infura.io/']
	case ROPSTEN_CODE:
		return ['https://ropsten.infura.io/']
	case RINKEBY_CODE:
		return ['https://rinkeby.infura.io/']
	case GOERLI_CODE:
		return ['https://rpc.slock.it/goerli/']
	case KOVAN_CODE:
		return ['https://kovan.infura.io/']
	case SOKOL_CODE:
		return ['https://sokol.poa.network/']
	case POA_CORE_CODE:
		return ['https://core.poanetwork.dev/']
	case XDAI_CODE:
		return ['https://xdai.poanetwork.dev/']
	case RSK_CODE:
		return ['https://public-node.rsk.co']
	case RSK_TESTNET_CODE:
		return ['https://public-node.testnet.rsk.co']
	case CLASSIC_CODE:
		return ['https://www.ethercluster.com/etc']
	case CALLISTO_NETWORK_CODE:
		return ['https://clo-geth.0xinfra.com']
	default:
		return []
	}
}

module.exports = {
	getRPCEndpoints
}
