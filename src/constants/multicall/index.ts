import { ChainId } from '0xshardeum'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x3c6cE7E6B52F9A85Dd4230d91b4A7b2FF9359efb', // TODO
  [ChainId.TESTNET]: '0x3c6cE7E6B52F9A85Dd4230d91b4A7b2FF9359efb'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
