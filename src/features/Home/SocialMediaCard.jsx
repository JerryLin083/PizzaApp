import Button from "../ui/Button";

const SocialMediaCard = ({ media }) => {
  const openNewWindow = () => {
    window.open(media.url, "_blank");
  };

  return (
    <li className="hover:text-orange-600 px-1">
      <Button onClick={openNewWindow}>{media.icon}</Button>
    </li>
  );
};

export default SocialMediaCard;
