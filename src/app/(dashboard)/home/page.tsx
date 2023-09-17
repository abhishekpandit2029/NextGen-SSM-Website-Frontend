import React from "react";
import Image from "next/image";
import sm from "@/components/Stuff/sm1 (3).svg";

function Homepage() {
    return (
        <div className="px-16 flex items-center">
            <div>
                <div className="font-[900]">
                    <p className="text-[4rem] text-teal-700">Content <span className="text-[3rem] text-black">for</span>   </p>
                    <p className="text-[3rem]">your <span className="text-[3.5rem] text-teal-700">Profile's</span>  </p>
                    <p className="text-[3rem]">crafted by <span className="text-[3.5rem] whitespace-nowrap text-teal-700">Creative minds.</span></p>
                </div>
                <p className="mt-2">
                    Nextgen is a premier short-form content agency. We make content that
                    customers and algorithms love.
                </p>
            </div>
            <div>
                <Image src={sm} className="min-w-full" alt="Logo" />
            </div>
        </div>
    );
}

export default Homepage;
