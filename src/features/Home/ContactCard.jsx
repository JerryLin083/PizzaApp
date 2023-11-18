const ContactCard = ({ info }) => {
  return (
    <li className="mt-4">
      <span className="flexCenter font-semibold text-xl">
        {info.icon}: {info.title}
      </span>
      <span className="text-stone-400">{info.subText}</span>
    </li>
  );
};

export default ContactCard;
