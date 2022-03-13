import Head from 'next/head'
import Link from 'next/link'
function DAO() {
    return (
        <>
            <div>
                <Head>
                    <title>XRDAO | DAO</title>
                </Head>
            </div>
        <div className="w-screen h-full text-white bg-gradient-to-b from-grey to-black">
            
                <div className="flex justify-center p-5">
                    <h1 className="text-center">DAOs</h1>
                </div>

                <div className="flex flex-col items-center p-5 justify-center text-">
                    <h2 className="text-2xl md:px-60 text-center">DAO stands for Decentralized Autonomous Organization read more about DAO's here:</h2>
                    <Link href="https://cointelegraph.com/ethereum-for-beginners/what-is-a-decentralized-autonomous-organization-and-how-does-a-dao-work" >
                        <a className="text-2xl underline text-slate-500 hover:text-slate-200">What is a DAO?</a>
                    </Link>
                    <br />
                    <p className="text-center px-10 md:px-40">XRDAO is a large DAO with many smaller DAO's within. Each of these smaller DAOs are comprised of teams. These teams are DAO's allowing the members to vote on if they need a new member, should focus elsewhere, etc. The top DAO is the XRDAO, this is the community, users, and owners.</p>
                </div>
                <div className="grid md:grid-cols-3 p-5">
                    <div />
                    <p className="text-center p-10">
                        <h2 className="text-2xl">Founder's DAO</h2>
                        <br />
                        The Original DAO is called the Founders DAO, this team will be in charge of getting XRDAO off of the ground and lay the framework for the platform
                        </p>
                    <div />
                    <p className="text-center p-10"><h2 className="text-2xl">Development DAO</h2><br />This Dao will be comprised of teams for different aspects of our platform</p>
                    <p className="text-center p-10"><h2 className="text-2xl">Marketing DAO</h2> <br />This Dao will be responsible for all of the creative, marketing, and advertising needs for XRDAO. </p>
                    <p className="text-center p-10"><h2 className="text-2xl">Innovation DAO</h2> <br /> This DAO will be responsible for future innovation from the organization. This DAO will plan future ideas for XRDAO and submit them to the public to vote on</p>
                      <p className="text-center p-10"><h2 className="text-2xl">Community DAO</h2> <br/> This DAO will be responsable for the future of the platform and the major decisions of the Organization</p>
                </div>


            </div>
            </>
    )
}

export default DAO
