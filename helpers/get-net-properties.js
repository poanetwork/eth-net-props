function getNetworkDisplayName(network) {
	const netID = parseInt(network)
	switch (netID) {
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
		case 100:
			return 'xDai Chain'
		default:
			return 'Unknown Private Network'
	}
}

function getNetworkCoinName(network) {
	const netID = parseInt(network)
	switch (netID) {
		case 77:
		case 99:
			return 'POA'
		case 100:
			return 'xDAI'
		default:
			return 'ETH'
	}
}

function isTestnet(network) {
	const netID = parseInt(network)
	switch (netID) {
		case 1:
		case 99:
		case 100:
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