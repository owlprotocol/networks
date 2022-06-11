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
        publicRpcs: [],
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
    "3": {
        networkId: "3",
        name: "ropsten",
        publicRpcs: ["https://ropsten.infura.io/v3/{API_KEY}"],
        ws: [],
        explorerUrls: ["https://ropsten.etherscan.io/"],
        explorerApiUrls: ["https://api-ropsten.etherscan.io/api"],
        testnet: true
    },
    "4": {
        networkId: "4",
        name: "rinkeby",
        publicRpcs: ["https://rinkeby.infura.io/v3/{API_KEY}"],
        ws: [],
        explorerUrls: ["https://rinkeby.etherscan.io/"],
        explorerApiUrls: ["https://api-rinkeby.etherscan.io/api"],
        testnet: true
    },
    "5": {
        networkId: "5",
        name: "goerli",
        publicRpcs: ["https://goerli.infura.io/v3/{API_KEY}"],
        ws: [],
        explorerUrls: ["https://goerli.etherscan.io/"],
        explorerApiUrls: ["https://api-goerli.etherscan.io/api"],
        testnet: true
    },
    "10": {
        networkId: "10",
        name: "optimism",
        publicRpcs: ['https://mainnet.optimism.io'],
        ws: [],
        explorerUrls: ['https://optimistic.etherscan.io/'],
        explorerApiUrls: ['https://api-optimistic.etherscan.io'],
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
    "56": {
        networkId: "556",
        name: "binance",
        publicRpcs: [
            'https://bsc-dataseed4.ninicoin.io',
            'https://bsc-dataseed.binance.org',
            'https://bscrpc.com'
        ],
        ws: [],
        explorerUrls: ['https://bscscan.com/'],
        explorerApiUrls: ['https://api.bscscan.com/']
    },
    "137": {
        networkId: "137",
        name: "polygon",
        publicRpcs: [],
        ws: [],
        explorerUrls: [],
        explorerApiUrls: []
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
    "128": {
        networkId: "128",
        name: "heco",
        publicRpcs: ['https://http-mainnet.hecochain.com'],
        ws: [],
        explorerUrls: ['https://hecoinfo.com/'],
        explorerApiUrls: ['https://api.hecoinfo.com/']
    },
    "250": {
        networkId: "250",
        name: "fantom",
        publicRpcs: [
            'https://rpcapi.fantom.network',
            'https://fantom-mainnet.public.blastapi.io',
            'https://rpc.ftm.tools'
        ],
        ws: [],
        explorerUrls: ['https://ftmscan.com/'],
        explorerApiUrls: ['https://api.ftmscan.com']
    },
    "288": {
        networkId: "288",
        name: "boba",
        publicRpcs: [
            'https://lightning-replica.boba.network',
            'https://mainnet.boba.network'
        ],
        ws: [],
        explorerUrls: ["https://blockexplorer.boba.network/"],
        explorerApiUrls: ["https://blockexplorer.boba.network/api"]
    },
    "361": {
        networkId: "361",
        name: "theta",
        publicRpcs: [
            'https://eth-rpc-api.thetatoken.org/rpc'
        ],
        ws: [],
        explorerUrls: ["https://explorer.thetatoken.org/"],
        explorerApiUrls: ["https://explorer.thetatoken.org:8443/api"],
    },
    "1284": {
        networkId: "1284",
        name: "moonbeam",
        publicRpcs: [
            'https://moonbeam.public.blastapi.io',
            'https://rpc.api.moonbeam.network',
            'https://rpc.ankr.com/moonbeam'
        ],
        ws: [],
        explorerUrls: ["https://moonscan.io/"],
        explorerApiUrls: ["https://api-moonbeam.moonscan.io"],
 
    },
    "1285": {
        networkId: "1285",
        name: "moonriver",
        publicRpcs: [
            'https://moonriver.public.blastapi.io',
            'https://rpc.api.moonriver.moonbeam.network',
            'https://moonriver.api.onfinality.io/public'
        ],
        ws: [],
        explorerUrls: ["https://moonriver.moonscan.io/"],
        explorerApiUrls: ["https://blockscout.moonriver.moonbeam.network/api"],

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
    "42161": {
        networkId: "42161",
        name: "arbitrum",
        publicRpcs: [
            'https://arb1.arbitrum.io/rpc'
        ],
        ws: [],
        explorerUrls: ["https://arbiscan.io/"],
        explorerApiUrls: ['https://api.arbiscan.com/'],
    },
    "43114": {
        networkId: "43114",
        name: "avalanche",
        publicRpcs: [
            'https://rpc.ankr.com/avalanche',
            'https://ava-mainnet.public.blastapi.io/ext/bc/C/rpc',
            'https://api.avax.network/ext/bc/C/rpc'
        ],
        ws: [],
        explorerUrls: ["https://snowtrace.io/"],
        explorerApiUrls: ['https://api.snowtrace.io'],
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
    '1313161554': {
        networkId: "1313161554",
        name: "aurora",
        publicRpcs: [
            'https://mainnet.aurora.dev'
        ],
        ws: [],
        explorerUrls: ['https://aurorascan.dev/'],
        explorerApiUrls: ['https://explorer.mainnet.aurora.dev/api'],
    },
    '1666600000': {
        networkId: "1666600000",
        name: "harmony",
        publicRpcs: [
            'https://api.s0.t.hmny.io',
            'https://api.fuzz.fi',
            'https://rpc.heavenswail.one'
        ],
        ws: [],
        explorerUrls: ['https://explorer.harmony.one/'],
        explorerApiUrls: ['https://api.harmony.one/'],
    }
}

export default networks;
