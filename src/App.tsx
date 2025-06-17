import React, { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "./components/ui/input-otp";
import { Separator } from "./components/ui/separator";

export const App = (): JSX.Element => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  // Email data
  const emailData = {
    email: "john@smith.com",
    resendTime: 52,
  };

  // Footer links
  const footerLinks = [
    { title: "Help", url: "#" },
    { title: "Terms", url: "#" },
    { title: "Privacy", url: "#" },
  ];

  return (
    <div
      className={`bg-[#f6f6f6] flex flex-row justify-center w-full min-h-screen ${
        showAnimation ? 'animate-fade-in' : 'opacity-0'
      }`}
    >
      <div className="bg-[#f6f6f6] overflow-hidden w-full max-w-[1440px] h-[1024px] relative">
        {/* Background graphics */}
        <div className="absolute w-full h-full overflow-hidden col-span-2">
          <div className="relative w-[2712px] h-[2250px] top-[-599px] left-[94px]">
            <div className="absolute w-[2494px] h-[2250px] top-0 left-[218px]">
              <div className="relative w-[1105px] h-[1024px] top-[599px] left-[23px]">
                <img
                  className="absolute w-[837px] h-[1024px] top-0 left-0"
                  alt="Vector"
                  src="https://c.animaapp.com/gtymHpez/img/vector.svg"
                />
                <img
                  className="absolute w-[958px] h-[1024px] top-0 left-[147px]"
                  alt="Group"
                  src="https://c.animaapp.com/gtymHpez/img/group-2.png"
                />
                <img
                  className="absolute w-[789px] h-[1024px] top-0 left-[316px]"
                  alt="Vector"
                  src="https://c.animaapp.com/gtymHpez/img/vector-1.svg"
                />
              </div>
            </div>
            <img
              className="absolute w-[1096px] h-[937px] top-[599px] left-[250px]"
              alt="Group"
              src="https://c.animaapp.com/gtymHpez/img/group-5.png"
            />
          </div>
        </div>

        {/* Login verification card */}
        <div className="absolute top-1/2 left-[20%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-[50px] p-2.5 z-10">
          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="flex flex-col items-center gap-[25px] pt-6">
              {/* Logo and heading */}
              <div className="flex flex-col items-center gap-2.5">
                <img
                  className="w-[58.18px] h-[58.36px]"
                  alt="Rbyte spline"
                  src="https://c.animaapp.com/gtymHpez/img/rbyte-spline-1@2x.png"
                />
                <h1 className="font-medium text-variable-collection-dark-main text-[32px] text-center tracking-[-0.64px] leading-[35.2px] font-helvetica-medium animate-slide-left">
                  Check your email
                </h1>
              </div>

              {/* Email verification content */}
              <div className="flex flex-col items-center justify-center gap-[15px] w-full">
                {/* Email message */}
                <p className="w-[299.02px] font-helvetica-regular font-normal text-center tracking-[-0.32px] leading-[22.4px] text-base">
                  <span className="text-variable-collection-gray-secondary tracking-[-0.05px]">
                    We sent an email to
                  </span>
                  <span className="text-[#101213] tracking-[-0.05px]">
                    &nbsp;
                  </span>
                  <span className="font-helvetica-medium font-medium text-[#101213] tracking-[-0.05px]">
                    {emailData.email}
                  </span>
                  <span className="text-variable-collection-gray-secondary tracking-[-0.05px]">
                    {" "}
                    It has a link that will sign you up
                  </span>
                </p>

                {/* Divider */}
                <div className="flex items-center w-full gap-2.5">
                  <Separator className="flex-1" />
                  <span className="text-variable-collection-gray-secondary text-xs text-center tracking-[-0.24px] leading-[13.2px] font-helvetica-regular">
                    or
                  </span>
                  <Separator className="flex-1" />
                </div>

                {/* Code entry section */}
                <div className="flex flex-col items-center gap-[15px] w-full">
                  <p className="w-full text-variable-collection-dark-main text-sm text-center tracking-[-0.28px] leading-[15.4px] font-helvetica-regular">
                    Enter the code instead
                  </p>

                  {/* OTP Input */}
                  <InputOTP maxLength={6} className="gap-1">
                    <InputOTPGroup>
                      <InputOTPSlot
                        index={0}
                        className="w-[55px] h-14 rounded-md border border-gray-300"
                      />
                      <InputOTPSlot
                        index={1}
                        className="w-[55px] h-14 rounded-md border border-gray-300"
                      />
                      <InputOTPSlot
                        index={2}
                        className="w-[55px] h-14 rounded-md border border-gray-300"
                      />
                      <InputOTPSlot
                        index={3}
                        className="w-[55px] h-14 rounded-md border border-gray-300"
                      />
                      <InputOTPSlot
                        index={4}
                        className="w-[55px] h-14 rounded-md border border-gray-300"
                      />
                      <InputOTPSlot
                        index={5}
                        className="w-[55px] h-14 rounded-md border border-gray-300"
                      />
                    </InputOTPGroup>
                  </InputOTP>

                  {/* Continue button */}
                  <Button className="w-[350px] h-[55px] rounded-[18px] text-white text-sm font-helvetica-regular shadow-small-btn-drop border border-solid border-[#57555f] bg-gradient-to-r from-[rgba(31,31,33,0.77)] via-[rgba(62,61,76,0.77)] to-[rgba(31,31,33,0.77)] hover:opacity-90 transition-opacity">
                    Continue
                  </Button>

                  {/* Resend option */}
                  <p className="w-full text-variable-collection-gray-secondary text-sm text-center tracking-[-0.28px] leading-[15.4px] font-helvetica-regular">
                    <span className="tracking-[-0.04px]">
                      Didn&apos;t get the email?{" "}
                    </span>
                    <span className="tracking-[-0.04px] underline cursor-pointer hover:text-variable-collection-dark-main transition-colors">
                      Resend
                    </span>
                    <span className="tracking-[-0.04px]">
                      {" "}
                      in {emailData.resendTime} seconds
                    </span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer links */}
          <div className="flex items-center justify-center gap-2.5">
            {footerLinks.map((link, index) => (
              <React.Fragment key={link.title}>
                <a
                  href={link.url}
                  className="text-variable-collection-gray-text text-sm text-center tracking-[-0.28px] leading-[15.4px] font-helvetica-regular hover:text-variable-collection-dark-main transition-colors"
                >
                  {link.title}
                </a>
                {index < footerLinks.length - 1 && (
                  <div className="w-1 h-1 bg-variable-collection-gray-text rounded-sm" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;