import ENS, { getENSAddress } from '@ensdomain/ensjs'

const ens = new ENS({ provider, ensAddress: getENSAddress('1') })

ens.name('resolver.eth').getAddress() // 0x123



function UserNameform() {
    const onSubmit = (e) => {
        
    }
    return (
        <div>
            <form>
                <input type="text" maxLength={20} placeholder="UserName"/>
            </form>
        </div>
    )
}
function UserNameSignUp() {

    return (
        <div>
           
        </div>
    )
}

export default UserNameSignUp
