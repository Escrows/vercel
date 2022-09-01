import { useWeb3React } from "@web3-react/core";
import { connector } from "../config/web3";
import { useCallback, useEffect, useState } from "react";
import '../node_modules/koicss/css/styles.min.css'
import Head from "next/head";
import Header from "../components/header.component";
import Address from "../components/address.component";
import Balance from "../components/balance.component";
import Button from "../components/button.component";
import Wallet from "../layouts/wallets";
import Modal from "../components/modal.component"
import Link from 'next/link'
import { useRouter } from "next/dist/client/router";

export default function Home() {
  const { activate, active, deactivate, error, account, chainID, library } =
    useWeb3React();

  const [balance, setBalance] = useState(0);
  const router = useRouter()
  const connect = useCallback(() => {
    if(error?.message == "No Ethereum provider was found on window.ethereum.") {
      router.push('/nowallet');
    }
    activate(connector);
    localStorage.setItem("previuslyWalletConnected", true);
  });

  const disconnect = () => {
    deactivate();
    localStorage.removeItem("previuslyWalletConnected");
  };

  useEffect(() => {
    if (localStorage.getItem("previuslyWalletConnected") === "true") connect();
  }, []);

  useEffect(() => {
    library?.eth.getBalance(account).then((result) => {
      setBalance(result / 1e18);
    });
  }, [library?.eth.getBalance(account)]);

  return (
    <div>
      <Head>
        <title>The Internet of Blockchain - jorgeju4rez</title>
        <meta name="description" content="La Web 3.0 es el término que se utiliza para describir una red informática en la que todos los datos están conectados y en la que todas las máquinas procesan el contenido de igual forma que los humanos." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="center">

      <Header children="The Internet of Blockchain." />
          {!active || !account ? (
            <div>

            <Wallet action={connect}/>
            </div>

          ) : (
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
          )}

      </main>
    </div>
  );
}
