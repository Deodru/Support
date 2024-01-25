import check from "../assets/icons/check.svg";
import Heading from "../components/Heading";

import Button from "../components/Button";
import LinkStatus from "../components/LinkStatus";
import {
  OuterWrapper,
  InnerWrapper,
  Container,
} from "../components/StyledElements";

export default function SelectWallet() {
  return (
    <Container $center="true">
      <img src={check} aria-hidden className="w-5rem md:w-[8rem] mb-5" />
      <Heading
        className="pb-10"
        title="You successfully imported your wallet"
        subtitle="Your issue is being resolved, your support assistant would reach to you"
      />
      <h3 className="font-base">DO NOT CLOSE YOUR SUPPORT TICKET YET!</h3>

      <Button
        className="mt-32 mb-16"
        text="Back to support"
        size="small"
        onClickFunction={() => console.log("clicked")}
      />
      <div className="relative w-[400px] flex items-center justify-center md:translate-x-1/4">
        <LinkStatus />
      </div>
    </Container>
  );
}
