import heroImg from "../../assets/hero/4.png";
import ConnectWallet from "../ConnectWallet";
function Hero() {
  return (
    <>
      <article>
        <div className="mt-6 flex flex-col md:flex-row-reverse items-center md:mx-36 xl:gap-44">
          <div className="justify-self-end">
            <img src={heroImg} alt="crypto-image" />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-3xl text-center md:text-left lg:text-5xl font-bold lg:max-w-xl lg:leading-relaxed">
              Start Sending Crypto Currency Easily
            </h1>
            <p className="pt-2 mt-4 text-sm lg:text-lg text-neutral-200">
              Join the world's largest crypto exchange
            </p>
            <ConnectWallet />
          </div>
        </div>
      </article>
    </>
  );
}

export default Hero;
