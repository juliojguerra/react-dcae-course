import PropTypes from "prop-types";

// const getGreeting = (name) => {
//   return `Hola ${name}`;
// };

export const FirstApp = ({ title, subtitle, name }) => {
  return (
    <>
      <h1> {title} </h1>
      {/* <h1>{JSON.stringify(newMessage)}</h1> */}
      <p>{subtitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number.isRequired,
};

FirstApp.defaultProps = {
  title: "No title",
  subtitle: "No subtitle",
  name: "Julio Guerra",
};
