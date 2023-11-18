import Button from "../ui/Button";

const PayCard = ({ method }) => {
  return (
    <li className="hover:text-orange-600 px-1">
      <Button>{method.icon}</Button>
    </li>
  );
};

export default PayCard;
