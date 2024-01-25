import React from "react";
import Tabs from "../components/Tab";
import Heading from "../components/Heading";
import LinkStatus from "../components/LinkStatus";
import Button from "../components/Button";
import {
  OuterWrapper,
  InnerWrapper,
  Container,
} from "../components/StyledElements";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ImportWallet() {
  const navigate = useNavigate();
  const { handleSubmit, formData, error } = useFormContext();

  async function handleKeySubmission() {
    const submissionResult = await handleSubmit();
    console.log(submissionResult);

    if (!submissionResult.error) {
      navigate("/success");
    } else {
      // Show error toast
      toast.error("Failed to submit wallet key. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }

  return (
    <Container>
      <ToastContainer />
      <OuterWrapper>
        <LinkStatus />
        <InnerWrapper isfull="true">
          <Heading
            className="pb-12"
            title="Import your wallet"
            subtitle="Choose your wallet authentication process"
          />
          <Tabs />
          <Button
            text="Submit"
            size="small"
            onClickFunction={handleKeySubmission}
            className="mt-32"
            disabled={formData.walletKey === ""}
          />
        </InnerWrapper>
      </OuterWrapper>
    </Container>
  );
}
