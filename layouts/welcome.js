import Address from "../components/address.component";
import Balance from "../components/balance.component";
import Button from "../components/button.component";

const Welcome = ({account, balance, disconnect}) => {
    return(
        <div>
             <a
                className="bold"
                href={`https://etherscan.io/address/${account}`}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <Address account={account} />
              </a>
                <Balance balance={balance} />
              <Button text="log out" action={disconnect} />
        </div>
    )
}

export default Welcome;