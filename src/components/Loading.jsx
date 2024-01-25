import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./StyledElements";
import gif from "../assets/padlock-animation.mp4";

export default function LoadingPage() {
  const navigate = useNavigate();

  return (
    <Container $center="true">
      <div className="rounded-full p-3 md:p-6 border-2 mb-6">
        <video
          autoPlay
          loop
          muted
          className="w-[30px] md:w-[50px]"
          height="auto"
        >
          <source src={gif} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <h2 className="text-[2rem] text-center text-black">
        Give us a few, we're securing your link
      </h2>
    </Container>
  );
}
