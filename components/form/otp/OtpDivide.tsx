"use client";
import { useState } from "react";
import OTP from "@/components/ui/form/OTP";

export default function Index() {
  const [otp, setOtp] = useState("");
  return (
    <div className="grid gap-5 ">
      <OTP length={6} onChange={setOtp} className="!w-11" />
    </div>
  );
}
