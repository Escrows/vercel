import Address from "../components/address.component";
import Chat from "../components/chat.component";

const Welcome = ({ account, balance, disconnect }) => {
  return (
    <div>
      <h2>Bienvenido</h2>
      <a
        className="bold"
        href={`https://etherscan.io/address/${account}`}
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        <Address account={account} />
      </a>
      {/* <Balance balance={balance} />
              <Button text="log out" action={disconnect} /> */}
      <Chat nombre={account} />
    </div>
  )
}

export default Welcome;