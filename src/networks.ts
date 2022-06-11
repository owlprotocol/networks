export interface Network {
    /** Network Id */
    networkId: string,
    /** Network Name */
    name: string,
    /** HTTP RPC Endpoints */
    publicRpcs: string[]
    /** Private HTTP RPC Endpoints */
    privateRpcs?: {
        infura?: string;
        alchemy?: string;
        ankr?: string;
    }
    /** WS RPC Endpoints */
    ws: string[]
    /** Block explorer (eg. Etherscan) to use for network. */
    explorerUrls: string[]
    /** Block explorer API url (eg. Etherscan) to use for indexed explorer data */
    explorerApiUrls: string[]
    /** Testnet */
    testnet?: boolean
}

const networks: { [networkId: string]: Network } = {
    "1": {
        networkId: "1",
        name: "mainnet",
        publicRpcs: [
        ],
        privateRpcs: {
            infura: 'https://mainnet.infura.io/v3/{API_KEY}',
            alchemy: 'https://eth-mainnet.alchemyapi.io/v2/{API_KEY}',
            ankr: 'https://rpc.ankr.com/eth/{API_KEY}',
        },
        ws: [],
        explorerUrls: [
            'https://etherscan.io/'
        ],
        explorerApiUrls: [
            'https://api.etherscan.io/api'
        ]
    },
    "137": {
        networkId: "137",
        name: "polygon",
        publicRpcs: [],
        ws: [],
        explorerUrls: [],
        explorerApiUrls: []
    },
    "42161": {
        networkId: "42161",
        name: "arbitrum",
        publicRpcs: [],
        ws: [],
        explorerUrls: ["https://arbiscan.io/"],
        explorerApiUrls: [],
    },
    "10": {
        networkId: "10",
        name: "optimism",
        publicRpcs: [],
        ws: [],
        explorerUrls: [],
        explorerApiUrls: [],
    },
    "3": {
        networkId: "3",
        name: "ropsten",
        publicRpcs: [],
        ws: [],
        explorerUrls: ["https://ropsten.etherscan.io/"],
        explorerApiUrls: ["https://api-ropsten.etherscan.io/api"],
        testnet: true
    },
    "4": {
        networkId: "4",
        name: "rinkeby",
        publicRpcs: [""],
        ws: [],
        explorerUrls: ["https://rinkeby.etherscan.io/"],
        explorerApiUrls: ["https://api-rinkeby.etherscan.io/api"],
        testnet: true
    },
    "5": {
        networkId: "5",
        name: "goerli",
        publicRpcs: [""],
        ws: [],
        explorerUrls: ["https://goerli.etherscan.io/"],
        explorerApiUrls: ["https://api-goerli.etherscan.io/api"],
        testnet: true
    },
    "42": {
        networkId: "42",
        name: "kovan",
        publicRpcs: [],
        ws: [],
        explorerUrls: [],
        explorerApiUrls: ["https://kovan.etherscan.io/"],
        testnet: true
    },
    "8001": {
        networkId: "8001",
        name: "mumbai",
        publicRpcs: [],
        ws: [],
        explorerUrls: [],
        explorerApiUrls: [],
        testnet: true
    },
    "421611": {
        networkId: "421611",
        name: "arbitrumRinkeby",
        publicRpcs: [],
        ws: [],
        explorerUrls: [],
        explorerApiUrls: [],
        testnet: true
    },
    "69": {
        networkId: "10",
        name: "optimismKovan",
        publicRpcs: [],
        ws: [],
        explorerUrls: [],
        explorerApiUrls: [],
        testnet: true
    },
}

export default networks;
