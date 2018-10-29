function getFaucetLinks(network) {
	const netID = parseInt(network)
	switch (netID) {
	case 3:
		return ['https://faucet.ropsten.be/', 'https://faucet.metamask.io/']
	case 4:
		return ['https://faucet.rinkeby.io/']
	case 42:
		return ['https://faucet.kovan.network/', 'https://gitter.im/kovan-testnet/faucet/']
	case 77:
		return ['https://faucet.poa.network/']
	default:
		return []
	}
}

module.exports = {
	getFaucetLinks
}