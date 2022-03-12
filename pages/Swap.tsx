import {useState , useEffect} from 'react'
import Link from 'next/link'
import TokenList from '../Components/Contexts/TokenList'
import Image from 'next/image'
import XDTIMG from '../Components/Images/XRDAO.png'
import matic from '../Components/Images/Matic.png'
import Arrow from '../Components/Images/arrow-circle-down'
import { useMoralis, useChain, useERC20Balances, useWeb3ExecuteFunction } from 'react-moralis'
import { PRECISION, RE, abi, CONTRACT_ADDRESS } from "../Components/constants"
import { reverse } from 'dns'
import {ethers} from "ethers";

const XDT = {
    name: "XDT",
    address: "0xe80973A088B3f7FeCb9A74AB271B6Cb93693c2C0",
    image: "",
};
const Matic ={
    name: "Matic",
    address: "0x0000000000000000000000000000000000001010",
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png"
};





export default function Swap() {
    const [myContract, setMyContract] = useState(null);
    const [address, setAddress] = useState();
    const { authenticate, isAuthenticated, user } = useMoralis();
    const [amountFrom, setAmountFrom] = useState(0.0);
    const [amountTo, setAmountTo] = useState(0.0);
    const [coin, setCoin] = useState(true);

    

    const getSwapEstimateAmountTo = (val) => {
        const { data, error, fetch, isFetching, isLoading } = useWeb3ExecuteFunction({
            abi: abi,
            contractAddress: CONTRACT_ADDRESS,
            functionName: "getSwapToken2EstimateGivenToken1",
            params: {
                _amountToken1: amountTo
            }
        });
       
        
    };

    useEffect(() => {
        
        return () => {
            console.log(amountTo)
        };
    }, );
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
   
function Form(props){
    const { fetchERC20Balances, data, isLoading, isFetching, error } = useERC20Balances();
    const onChangeAmtFrm = (val) => {
        setAmountFrom(val.target.value);
        getSwapEstimateAmountTo(val.target.value);
    };
    
    const onChangeAmtTo = (val) => {
        setAmountTo(val.target.value);
        getSwapEstimateAmountFrm(val.target.value);
    };
    
    const rev = () => {
        setCoin(!coin);
        getSwapEstimateAmountTo(amountFrom);
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
        {XDT.name}
        </div>
        <div className="contain justify-self-end md:scale-100 scale-150 " >
        <Image height="50" width="50" className="rounded-full"  src={XDTIMG}/>
        
        </div>
    </div>
    


    </label>
    )
};
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

    
    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <div className="w-2/3 h-2/3 rounded-xl bg-slate-600 justify-center">
           
            <div className=" grid font-light md:text-3xl text-2xl text-center justify-between grid-cols-3">
            <div className="SwapMenu rounded-tl-lg">
                {/* Swap */}
                <p>Swap</p>

            </div>
            <div className="SwapMenu ">
                {/* Provide Liquidity */}
                <Link href="/Add_Liquidity">
                <a>Add <br />Liquidity</a>
                </Link >
            </div>
            <div className="SwapMenu rounded-tr-lg">
                {/* Remove Liquidity */}
                <p>Remove <br />Liquidity</p>
            </div>
            </div>
            <br />
            <div className=" p-2 flex md:text-4xl text-xl justify-start px-5">
                <div className="p-2 w-20 md:w-40 text-center bg-white rounded-xl">From</div>
            </div>
            <div className="">
           <Form />
           </div>
           <div className="p-2 flex justify-between md:text-4xl text-xl px-5">
               <div className="p-2 w-20 md:w-40 text-center bg-white rounded-xl ">To</div>
               <div className="flex w-1/9 justify-end px-5"/>
               <div className={"p-2 justify-end w-40 md:w-60 text-center text-white bg-primary rounded-xl"}>
               {!isAuthenticated ?
                    (<button onClick={()=>{
                        authenticate();
                        useERC20Balances({ params: {chain: 'polygon'}}
                        );
                    }}className="flex text-xl md:text-4xl text-center">Connect Wallet 
                    </button>):(<button onClick={() =>{
                        Swap();
                        useERC20Balances({ params: {chain: 'polygon'}});
                    }}>
                    Swap </button>) }
                   </div>
           </div>
          

          
            </div>
            
            
        </div>
    )
}

