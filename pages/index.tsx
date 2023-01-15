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
  const backgroundPage = get("https://ipfs.io/ipfs/QmUpKAsrWEvp2CJBfs51tXKQa8CE6pgTQWCVGBpy34ZkND?filename=20230113_184459.gif"); 
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

        
        <img className={styles.gif} src={'https://ipfs.io/ipfs/QmUpKAsrWEvp2CJBfs51tXKQa8CE6pgTQWCVGBpy34ZkND?filename=20230113_184459.gif'} />
         

          <div>
            <label>
              Quantity:  
              <input
              type= "number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              />
            </label>
          </div>

    <div style={{ marginTop: "10px"}}>
    <Web3Button
      contractAddress={contractAddress}
      action={(contract) => {
        contract.call("claim", address, quantity, {
          value: price,
      });
      }}
      isDisabled={!quantity || parseInt(quantity) < 1 || isLoading}
      >
      Mint {price ? `(${price?.toString() === "0" ? "Free" : `${utils.formatEther(price)} ETH`})` : ''}
    </Web3Button>
          </div>


        </section>
        <section className={styles.aboutContainer}>
          <div className={styles.aboutBox}>
            <h2>About DooGuys World</h2>
            <p className={styles.description}>
            "DooGuys World" is a cool collection of 2500 Guys living into a  world on the Blockchain known as Ethereum. Every Guys has your own style, mood, life and everything we need to be happy and  motivated to battle against all BearMarket,  painting a colorful World. 
            </p>


            <p className={styles.description}>

Their World was born with a  power that showed itself after a colorful explosion on the Blockchain  💥. 
After that, the survivors Guys got the colors to be safe and keep their life happy like it was before. But now, it isn't Black & White, it's colored with more than the rainbow, it has an unique palette 🎨. 
            </p>


            <p className={styles.description}>
            You can live into DooGuys World after your buy a Guy on the Mint or Secondary Market. Don't miss your chance to go out of a bad life and turn it in a colorful World 🌈🌎
            </p>
          </div>
          <div className={styles.gifBox}>
         
        <img className={styles.gif} src={'https://ipfs.io/ipfs/QmVPiyCuCsWJxJAkbpEWFwYxSCDjb5KGhWbt19s5pc2qD8?filename=71.png'} />
 </div>
          
        </section>

        <section className={styles.linkContainer}>
        <div>
          <a target='_blank' href="https://opensea.io">Opensea</a>
          <a target='_blank' href="https://twitter.com/DooGuysEth">Twitter</a>
          <a target='_blank'  href="https://discord.gg/T2tdE73cRJ">Discord</a>
          <a target='_blank'  href="#">Etherscam</a>

        </div>
                  </section>
      </main>
    </div>
  );
};

export default Home;
