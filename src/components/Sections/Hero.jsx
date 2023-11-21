import heroImg from "../../assets/hero/4.png";

function Hero() {
  return (
    <>
      <article className="mt-6 flex flex-col items-center">
        <div>
          <img src={heroImg} alt="crypto-image" />
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-3xl text-center font-bold">
            Start Sending Crypto Currency Easily
          </h1>
          <p className="pt-2 mt-4 text-sm text-neutral-200">
            Join the world's largest crypto exchange
          </p>
          <button className="my-6 py-4 px-8 rounded-lg bg-primary text-neutral-900 font-medium active:bg-primary-hover hover:bg-primary-hover">
            Connect Wallet
          </button>
        </div>
      </article>
    </>
  );
}

export default Hero;
