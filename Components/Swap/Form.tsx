import {useState} from 'react'
import Image from 'next/image'
import Arrow from '../Components/Images/arrow-circle-down'
import {useERC20Balances, useWeb3ExecuteFunction} from 'react-moralis'

export default function Form(props){
    const { fetchERC20Balances, data, isLoading, isFetching, error } = useERC20Balances();
    const [amountFrom, setAmountFrom] = useState(0.0);
    const [amountTo, setAmountTo] = useState(0.0);
    const [coin, setCoin] = useState(true);
    

    const getSwapEstimateAmountTo = (val) => {
        const { data, error, fetch, isFetching, isLoading } = useWeb3ExecuteFunction({
            abi: abi,
            contractAddress: CONTRACT_ADDRESS,
            functionName: "getSwapToken2EstimateGivenToken1",
        });
    };
    
    const rev = () => {
        setCoin(!coin);
        getSwapEstimateAmountTo(amountFrom);
        getSwapEstimateAmountFrm(amountTo);
    };

    function Token2(props){
        const onInputChange = (e) => {
            if(e.target.value === "" || RE.test(e.target.value)){
                props.onChange(e);
            }
        }

    return(
    <label className="shadow-md flex columns-2 border rounded-xl focus:border-primary focus:ring-sky-500 border-slate-300 focus:ring-1 focus:outline-none bg-white w-full">
    <input onChange={(e) => onInputChange(e)} value={props.value} className="placeholder:italic text-4xl bg-transparent w-full placeholder:text-slate-400 block py-2 pl-9 pr-3  focus:outline-none " placeholder="0.00" onChange={(e) => onInputChange(e)} type="numeric" name="Token2"/>
    <div className="grid gap-6 grid-cols-2 p-5">
        <div className="px-5 text-center font-semibold text-4xl md:flex hidden">
        
        </div>
        <div className="contain justify-self-end md:scale-100 scale-150 " >
        <Image height="50" width="50" className="rounded-full"  src={XDTIMG}/>
        
        </div>
    </div>
    


    </label>
    )
};


const getSwapEstimateAmountFrm = async (val) => {
    if (["", "."].includes(val)) return;
    if (props.contract !== null) {
        try {
            let estimateOfAmountFrm;
            if (coin) {
                estimateOfAmountFrm =
                    await props.contract.getSwapToken1EstimateGivenToken2(
                        val * PRECISION
                    );
            } else {
                estimateOfAmountFrm =
                    await props.contract.getSwapToken2EstimateGivenToken1(
                        val * PRECISION
                    );
            }
            setAmountFrom(estimateOfAmountFrm / PRECISION);
        } catch (err) {
            alert(err?.data?.message);
        }
    }
};

const onChangeAmtFrm = (val) => {
    setAmountFrom(val.target.value);
    getSwapEstimateAmountTo(val.target.value);
};

const onChangeAmtTo = (val) => {
    setAmountTo(val.target.value);
    getSwapEstimateAmountFrm(val.target.value);
};
  const onSwap = async () => {
        if (["", "."].includes(amountFrom)) {
            alert("Amount should be a valid number");
            return;
        }
        if (props.contract === null) {
            alert("Connect to Metamask");
            return;
        } else {
            try {
                let response;
                if (coin) {
                    response = await props.contract.swapToken1(amountFrom * PRECISION);
                } else {
                    response = await props.contract.swapToken2(amountFrom * PRECISION);
                }
                await response.wait();
                setAmountFrom(0);
                setAmountTo(0);
                await props.getHoldings();
                alert("Success!");
            } catch (err) {
                alert(err?.data?.message);
            }
        }
    };
function Token1(props){
    
    const onInputChange = (e) => {
        if(e.target.value === "" || RE.test(e.target.value)){
            props.onChange(e);
        }
    }
    



    return(
    <label className="shadow-md flex columns-2 border rounded-xl focus:border-primary focus:ring-sky-500 border-slate-300 focus:ring-1 focus:outline-none bg-white w-full">
    <input onChange={(e) => onInputChange(e)} value={props.value} className="placeholder:italic text-4xl bg-transparent w-full placeholder:text-slate-400 block py-2 pl-9 pr-3  focus:outline-none " placeholder="0.00" type="numeric" name="Token2"/>
    <div className="grid gap-6 grid-cols-2 p-5">
        <div className="px-5 text-center font-semibold text-4xl md:flex hidden">
        {Matic.name}
        </div>
        <div className="contain justify-self-end md:scale-100 scale-150 " >
        <Image objectFit="cover" height="50" width="50" className="rounded-full"  src={matic}/>
        
        </div>
    </div>
    


    </label>
    )
}
    return(
        <>
    <div className="px-5 align-center ">
    {/* First Token */}
    <div>
   {coin  ? (<Token1 onChange={(e) => onChangeAmtFrm(e) }/>):(<Token2 onChange={(e) => onChangeAmtFrm(e)}/>)}
    </div>
    {/* Arrow */}
    <div className="flex scale-150 z-40 justify-center">
        <div onClick={rev} className="scale-150 bg-gray-50 rounded-full">
        <Arrow />
        </div>
    </div>
    {/* Second Token */}
    {coin  ?  (<Token2 onChange={(e) => onChangeAmtTo(e)}/>):(<Token1 onChange={(e) => onChangeAmtTo(e)}/>)}

    {/* Swap Button */}
    </div>
    </>
    )
};