import OTP from "@/components/form/otp";
import OtpDivide from "@/components/form/otp/OtpDivide";

import Title from "@/components/shared/Title";
import Wrapper from "@/components/shared/Wrapper";

export default function Page() {
  return (
    <div>
      <Title title="OTP" subtitle="Otp" />
      <Wrapper>
        <OTP />
      </Wrapper>
      <p className="description">The default length is 4</p>
      <Wrapper>
        <OtpDivide />
      </Wrapper>
      <p className="description">You can also inrease or decrease length</p>
    </div>
  );
}
