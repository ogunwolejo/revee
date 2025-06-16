import Image from "next/image";

export const CurrencyView = () => {
  return (
    <section
      className="min-h-screen h-full w-full px-12 md:px-16 lg:px-12 xl:px-24 py-6 md:py-0 bg-white relative"
      id="multi-currency-container bg-red-500"
    >
      <section
        id="multi-currency-content"
        className="flex flex-col md:flex-row justify-between xl:justify-start items-center w-full h-full 2xl:gap-48"
      >
        {/*************** Left side content ***************/}
        <div className="lg:h-[592px] lg:w-[400px] flex flex-col justify-center items-start p-2 gap-8 absolute bottom-0">
          <h2 className="text-3xl xl:text-5xl font-paytone text-black">
            Multi-currency Wallets
          </h2>
          <div className="flex flex-col justify-start items-start space-y-4 lg:space-y-6">
            <p className="font-normal font-dm-sans text-base text-black">
              Facilitate effortless management of multiple wallets, each
              dedicated to a specific currency, streamlining transactions and
              storage across various currencies.
            </p>
            <p className="font-normal font-dm-sans text-base text-black">
              Enhance user experience with tailored wallets for different
              currencies, empowering efficient financial management and
              flexibility in global transactions
            </p>
          </div>
        </div>

        {/*************** middle side content ***************/}
        <Image
          src="/svg/wallet-iphone.svg"
          alt="wallet-iphone"
          className="absolute bottom-0 left-[40%] hidden xl:block"
          width={432}
          height={836}
          priority
        />

        {/*************** end side content ***************/}
        <Image
          src="/png/shutterstock.png"
          alt="shutterstock"
          className="absolute bottom-[40%] lg:bottom-0 lg:right-[10%] xl:right-[2%] 2xl:right-[15%] xl:bottom-0"
          height={636}
          width={414}
        />
      </section>
    </section>
  );
};
