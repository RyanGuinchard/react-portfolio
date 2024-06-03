const Button = ({ href, children }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-block px-4 py-2 mt-4
          text-sm font-medium text-white
          bg-[#5C469C] border border-white border-opacity-[.08]
          rounded-full
          transition-colors duration-200
          hover:bg-[#D4ADFC] hover:text-[#5C469C]
        "
      >
        {children}
      </a>
    );
  };
  
  export default Button;