import Header from "../components/header.component";

const noWallet = () => {
    return(
        <div className="center">
             <Header children="You need download a wallet." />
             <img className="image-wallet" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png" />
        </div>
    )
}

export default noWallet;