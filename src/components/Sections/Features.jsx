import infoImg from "../../assets/features/Group.svg";
import paymentImg from "../../assets/features/Payment.svg";
import unionImg from "../../assets/features/Union.svg";

const FeatureCard = ({ features }) => {
  console.log(features.img);
  return (
    <>
      <article className="my-6 mx-4 p-1 rounded-md bg-gradient-to-b from-neutral-200 to-gradient max-w-sm">
        <div className="bg-bg-1 p-8 rounded-md flex flex-col justify-start items-center">
          <div className="py-4">
            <img src={features.img} alt={features.altText} />
          </div>
          <div className="text-xl font-semibold my-2">
            {features.featureTitle}
          </div>
          <div className="pt-2 max-w-xs text-neutral-200 text-center">
            {features.featureDesc}
          </div>
        </div>
      </article>
    </>
  );
};

function Features() {
  const features = [
    {
      img: infoImg,
      altText: "market info",
      featureTitle: "Market Updated",
      featureDesc:
        "The most accurate and trusted source for market cap, valuation, and cryptocurrency information",
    },
    {
      img: paymentImg,
      altText: "payment info",
      featureTitle: "Payment Options",
      featureDesc:
        "Flexible payment of methods with Visa, Mastercard, Paypal, bank transfer",
    },
    {
      img: unionImg,
      altText: "security info",
      featureTitle: "Strong Security",
      featureDesc:
        "Secure transaction and record information with 2-factor authentication (2FA)",
    },
  ];
  return (
    <article className="mt-4 pt-10 flex flex-col items-center lg:grid lg:grid-cols-3 lg:my-24">
      {features.map((items) => {
        return <FeatureCard features={items} key={items.featureTitle} />;
      })}
    </article>
  );
}

export default Features;
