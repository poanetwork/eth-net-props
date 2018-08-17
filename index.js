const getExplorerLinks = require('./helpers/get-explorer-links')
const getNetProperties = require('./helpers/get-net-properties')

module.exports = {
	explorerLinks: {
		getExplorerAccountLinkFor: getExplorerLinks.getExplorerAccountLinkFor,
		getExplorerTxLinkFor: getExplorerLinks.getExplorerTxLinkFor,
		getExplorerTokenLinkFor: getExplorerLinks.getExplorerTokenLinkFor,
	},
	props: {
		getNetworkDisplayName: getNetProperties.getNetworkDisplayName
	}
}