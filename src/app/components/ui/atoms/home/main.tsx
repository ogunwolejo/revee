import Image from "next/image";

export const HomeMainView = () => {
  return (
    <div id="send_receive_money_main" className="w-full h-full">
      <div className="w-full p-2 flex flex-col justify-start items-center gap-6 lg:gap-8 mt-6 lg:mt-8 xl:mt-12">
        <div
          id="image-container"
          className="w-[80%] lg:h-[493px] lg:w-[424px] rounded-3xl"
        >
          <Image
            src="/svg/home/couples.svg"
            alt="Send and Receive Money"
            height={493}
            width={424}
            className="object-cover h-full w-full rounded-3xl"
          />
        </div>
        <h3 className="text-3xl lg:text-5xl text-center text-black font-paytone font-normal w-[451px] mx-auto">
          Send and Receive Money
        </h3>
      </div>
    </div>
  );
};
