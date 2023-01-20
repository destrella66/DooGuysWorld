import { ConnectWallet, useAddress, useContract, useContractRead, Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { utils } from "ethers";

const Home: NextPage = () => {

  const contractAddress = "0x647BbFe8B3E4fA81Bb01C158428Caf1DaB6986b2";
  const address = useAddress();
  const [quantity, setQuantity] = useState("0");
  const { contract } = useContract(contractAddress);
  const { data: price, isLoading } = useContractRead(contract, "priceForAddress", address, quantity);

  console.log(price?.toString())

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.mainContainer}>

          <h1 className={styles.title}>
            Welcome to <a href="#">DooGuys World</a>!
          </h1>

          <p className={styles.description}>
            Mint now and start your journey!
          </p>

          <div className={styles.gif}>

          </div>

          <div>
            <label>
              Quantity:
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </label>
          </div>

          <div className={styles.connect}>
            <Web3Button
              contractAddress={contractAddress}
              action={(contract) => {
                contract.call('claim', address, quantity);
              }}
            >
              claim
            </Web3Button>
            Mint ({price ? `(price)` })
          </div>
        </section>
        <section className={styles.aboutContainer}>
          <div className={styles.aboutBox}>
            <h2>About DooGuys World</h2>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit porro debitis quis officiis, harum fugiat dolorem magni quo, temporibus modi facere reiciendis accusamus consequatur.
            </p>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit porro debitis quis officiis, harum fugiat dolorem magni quo.
            </p>

          </div>
          <div className={styles.gifBox}>
            <p className={styles.imgsmall}></p>
          </div>
        </section>

        <section className={styles.linkContainer}>
          <a href="#">Opensea</a>
          <a href="#">Twitter</a>
          <a href="#">Discord</a>
          <a href="#">Etherscam</a>
        </section>
      </main>
    </div>
  );
};

export default Home;
