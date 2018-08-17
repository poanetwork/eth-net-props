function getNetworkDisplayName(network) {
	switch (network) {
		case 1: 
			return 'Main Ethereum Network'
		case 3:
			return 'Ropsten Test Network'
		case 4:
			return 'Rinkeby Test Network'
		case 42:
			return 'Kovan Test Network'
		case 77:
			return 'POA Sokol Test Network'
		case 99:
			return 'POA Network'
		default:
			return 'Unknown Private Network'
	}
}

module.exports = {
	getNetworkDisplayName
}