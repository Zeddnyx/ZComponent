"use client";
import { useState } from "react";
import OTP from "@/components/shared/form/OTP";

export default function Index() {
  const [otp, setOtp] = useState("");
  return (
    <div className="grid gap-5 md:px-29">
      <OTP  onChange={setOtp} />
      <OTP disabled  onChange={setOtp} />
      <OTP isCorrect onChange={setOtp} />
      <OTP isError  onChange={setOtp} />
    </div>
  );
}
