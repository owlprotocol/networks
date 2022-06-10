interface Network {
    /** Network Id */
    networkId: string,
    /** Network Name */
    name: string,
    /** HTTP RPC Endpoints */
    rpc: string[]
    /** WS RPC Endpoints */
    ws: string[]
    /** Block explorer (eg. Etherscan) to use for network. */
    explorerUrl: string[]
    /** Block explorer API url (eg. Etherscan) to use for indexed explorer data */
    explorerApiUrl: string[]
    /** Testnet */
    testnet?: boolean
}

const networks: { [networkId: string]: Network } = {
    "1": {
        networkId: "1",
        name: "mainnet",
        rpc: [],
        ws: [],
        explorerUrl: [
            'https://etherscan.io/'
        ],
        explorerApiUrl: [
            'https://api.etherscan.io/api'
        ]
    },
    "137": {
        networkId: "137",
        name: "polygon",
        rpc: [],
        ws: [],
        explorerUrl: [],
        explorerApiUrl: []
    },
    "42161": {
        networkId: "42161",
        name: "arbitrum",
        rpc: [],
        ws: [],
        explorerUrl: ["https://arbiscan.io/"],
        explorerApiUrl: [],
    },
    "10": {
        networkId: "10",
        name: "optimism",
        rpc: [],
        ws: [],
        explorerUrl: [],
        explorerApiUrl: [],
    },
    "3": {
        networkId: "3",
        name: "ropsten",
        rpc: [],
        ws: [],
        explorerUrl: ["https://ropsten.etherscan.io/"],
        explorerApiUrl: ["https://api-ropsten.etherscan.io/api"],
        testnet: true
    },
    "4": {
        networkId: "4",
        name: "rinkeby",
        rpc: [""],
        ws: [],
        explorerUrl: ["https://rinkeby.etherscan.io/"],
        explorerApiUrl: ["https://api-rinkeby.etherscan.io/api"],
        testnet: true
    },
    "5": {
        networkId: "5",
        name: "goerli",
        rpc: [""],
        ws: [],
        explorerUrl: ["https://goerli.etherscan.io/"],
        explorerApiUrl: ["https://api-goerli.etherscan.io/api"],
        testnet: true
    },
    "42": {
        networkId: "42",
        name: "kovan",
        rpc: [],
        ws: [],
        explorerUrl: [],
        explorerApiUrl: ["https://kovan.etherscan.io/"],
        testnet: true
    },
    "8001": {
        networkId: "8001",
        name: "mumbai",
        rpc: [],
        ws: [],
        explorerUrl: [],
        explorerApiUrl: [],
        testnet: true
    },
    "421611": {
        networkId: "421611",
        name: "arbitrumRinkeby",
        rpc: [],
        ws: [],
        explorerUrl: [],
        explorerApiUrl: [],
        testnet: true
    },
    "69": {
        networkId: "10",
        name: "optimismKovan",
        rpc: [],
        ws: [],
        explorerUrl: [],
        explorerApiUrl: [],
        testnet: true
    },
}
