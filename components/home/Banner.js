import React from "react";
import { useRouter } from "next/router";

const Banner = () => {
  const router = useRouter();

  return (
    <div className="h-[75vh] backgroundImage flex flex-col text-center">
      <div className="max-w-full mt-[200px]    bg-white bg-opacity-60">
        <h2
          className="text-[20px] my-[10px] lg:px-[400px] font-bold text-center"
          style={{ color: "#050F3E" }}
        >
          Treat-Well® ensures your success in preoperative medicine.
        </h2>
        <p
          className="text-[10px] font-medium  lg:px-[350px] "
          style={{ color: "#434248" }}
        >
          It treats to improve the quality of education and research around
          preoperative medicine practice for physicians to help patients achieve
          the best outcome.
        </p>
        <button
          onClick={() => router.push("/signup")}
          className="px-[15px] m-5 md:px-[60px] md:py-[5px] rounded-[5px] text-[14px] md:text-[16px] inter font-medium text-white md:mt-[20px] lg:my-[30px]"
          style={{ backgroundColor: "#071555" }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;
