import heroImg from "../../assets/hero/4.png";
import FormInput from "../FormInput";

function CryptoForm() {
  const formFields = [
    {
      placeholder: "Receiver Address",
      onChange: () => {
        console.log("ra");
      },
    },
    {
      placeholder: "Amount (ETH)",
      onChange: () => {
        console.log("aeth");
      },
    },
    {
      placeholder: "Enter GIF Link",
      onChange: () => {
        console.log("gif");
      },
    },
    {
      placeholder: "Enter Message",
      onChange: () => {
        console.log("message");
      },
    },
  ];

  return (
    <article className="my-4 flex flex-col items-center">
      <img src={heroImg} alt="coins" />
      <div className="bg-bg-2 p-6 mx-4 rounded-lg max-w-xl">
        <form>
          {formFields.map((items) => {
            return (
              <FormInput
                placeholder={items.placeholder}
                key={items.placeholder}
                onChange={items.onChange}
              />
            );
          })}
          <button className="bg-primary w-full p-4 text-neutral-900 mt-2 rounded-lg">
            Send Now
          </button>
        </form>
      </div>
    </article>
  );
}

export default CryptoForm;
