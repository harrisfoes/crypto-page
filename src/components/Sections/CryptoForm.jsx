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

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <article className="my-4 flex flex-col items-center lg:flex-row lg:justify-around lg:items-around w-full max-w-[1440px]">
      <div>
        <img src={heroImg} alt="coins" />
      </div>
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
          <button
            className="bg-primary w-full p-4 text-neutral-900 mt-2 rounded-lg hover:bg-primary-hover font-semibold"
            onSubmit={handleSubmit}
          >
            Send Now
          </button>
        </form>
      </div>
    </article>
  );
}

export default CryptoForm;
