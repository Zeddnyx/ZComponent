import OTP from "@/components/form/otp";
import OtpDivide from "@/components/form/otp/OtpDivide";
import Pagination from "@/components/ui/Pagination";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";

import { ROUTES } from "@/configs/routes";

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
      <Pagination
        prev={ROUTES.formUrl("checkbox")}
        next={ROUTES.componentUrl("acordion")}
      />
    </div>
  );
}
