import useWeb3ExecuteFunction from 'react-moralis'
// import {abi, CONTRACT_ADDRESS} from '../constants'
export default function getSwapToken2Estimate(amountTo){

const { data, error, fetch, isFetching, isLoading } = useWeb3ExecuteFunction({
    // abi: abi,
    // contractAddress: CONTRACT_ADDRESS,
    functionName: "getSwapToken2EstimateGivenToken1",
    params: {
        _amountToken1: amountTo
    }
});
}