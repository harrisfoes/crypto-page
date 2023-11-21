import heroImg from "../../assets/hero/4.png";
import ConnectWallet from "../ConnectWallet";
function Hero() {
  return (
    <>
      <article className="mt-6 flex flex-col items-center lg:grid lg:grid-cols-2 lg:grid-flow-row lg:justify-around lg:w-4/5 md:m-42 max-w-[1440px]">
        <div className="justify-self-end">
          <img src={heroImg} alt="crypto-image" />
        </div>

        <div className="flex flex-col items-center lg:items-start lg:row-start-1">
          <h1 className="text-3xl text-center lg:text-left lg:text-5xl font-bold">
            Start Sending Crypto Currency Easily
          </h1>
          <p className="pt-2 mt-4 text-sm text-neutral-200">
            Join the world's largest crypto exchange
          </p>
          <ConnectWallet />
        </div>
      </article>
    </>
  );
}

export default Hero;
