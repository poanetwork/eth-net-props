const getExplorerLinks = require('./helpers/get-explorer-links')

module.exports = {
	explorerLinks: {
		getExplorerAccountLinkFor: getExplorerLinks.getExplorerAccountLinkFor,
		getExplorerTxLinkFor: getExplorerLinks.getExplorerTxLinkFor,
		getExplorerTokenLinkFor: getExplorerLinks.getExplorerTokenLinkFor,
	}
}