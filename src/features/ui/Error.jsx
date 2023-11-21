import { useNavigate, useRouteError } from "react-router-dom";
import SectionContainer from "./SectionContainer";
import Title from "./Title";
import Message from "./Message";
import Button from "./Button";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <main className="mt-28">
      <SectionContainer>
        <Title>Error 🙄</Title>
        <Message message={error.message} />

        <div className="mt-12">
          <Button type="primary" onClick={() => navigate("/")}>
            &larr; Go Back
          </Button>
        </div>
      </SectionContainer>
    </main>
  );
};

export default Error;
