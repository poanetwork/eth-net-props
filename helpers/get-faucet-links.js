const { networkIDs } = require('./enum')
const {
	ETH_ROPSTEN_CODE,
	ETH_RINKEBY_CODE,
	ETH_GOERLI_CODE,
	ETH_SEPOLIA_CODE,
	ETH_KOVAN_CODE,
	POA_SOKOL_CODE,
	RSK_TESTNET_CODE,
	CELO_ALFAJORES_TESTNET_CODE,
} = networkIDs

function getFaucetLinks(network) {
	const netID = parseInt(network)
	switch (netID) {
	case ETH_ROPSTEN_CODE:
		return ['https://faucet.metamask.io/']
	case ETH_RINKEBY_CODE:
		return ['https://faucet.rinkeby.io/']
	case ETH_GOERLI_CODE:
		return ['https://goerli-faucet.slock.it/']
	case ETH_SEPOLIA_CODE:
		return ['https://faucet.sepolia.dev/']
	case ETH_KOVAN_CODE:
		return ['https://faucet.kovan.network/', 'https://gitter.im/kovan-testnet/faucet/']
	case POA_SOKOL_CODE:
		return ['https://faucet.poa.network/']
	case RSK_TESTNET_CODE:
		return ['https://faucet.rsk.co/']
	case CELO_ALFAJORES_TESTNET_CODE:
		return ['https://celo.org/developers/faucet']
	default:
		return []
	}
}

module.exports = {
	getFaucetLinks
}