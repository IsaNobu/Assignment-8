import PropTypes from "prop-types";

const Tags = ({ tag }) => {
  return (
    <div className="bg-[#23BE0A0D] text-[#23BE0A] px-4 rounded-2xl text-center">
      {tag}
    </div>
  );
};

Tags.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default Tags;
