function getRPCEndpoints(network) {
	const netID = parseInt(network)
	switch (netID) {
	case 1:
		return ['https://mainnet.infura.io/']
	case 3:
		return ['https://ropsten.infura.io/']
	case 4:
		return ['https://rinkeby.infura.io/']
	case 42:
		return ['https://kovan.infura.io/']
	case 77:
		return ['https://sokol.poa.network/']
	case 99:
		return ['https://poa.infura.io/', 'https://core.poa.network/']
	case 100:
		return ['https://dai.poa.network/']
	default:
		return []
	}
}

module.exports = {
	getRPCEndpoints
}