import SectionContainer from "./SectionContainer";
import Title from "./Title";
import Message from "./Message";

const ErrorFallback = ({ error }) => {
  return (
    <main className="mt-28">
      <SectionContainer>
        <Title>Error 🙄</Title>
        <Message message={error.message} />
      </SectionContainer>
    </main>
  );
};

export default ErrorFallback;
