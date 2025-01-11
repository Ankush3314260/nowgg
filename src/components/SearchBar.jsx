import { useContext, useEffect } from "react";
import { PersonIdContext } from "../contexts/Personcontext";

const SearchBar = () => {
  const {  setSearchText } = useContext(PersonIdContext);
  useEffect(() => {}, []);
  const handleInputSearch = () => {
    // console.log(searchText);
  };
  const handleSearch = () => {
    document
      .querySelector("#searchcont")
      .classList.replace("w-[20%]", "w-[80%]");

    document
      .querySelector("#inputcont")
      .classList.replace("opacity-0", "opacity-100");

    document.querySelector("#inputcont").classList.add("mx-[2.5%]");
  };
  return (
    <div className="text-[0.5em]  ">
      <div
        id="searchcont"
        className="rounded-full border-[1px] border-[#afafaf]  p-[0.1em]  justify-between bg-white flex items-center  transition-all duration-500 w-[20%] max-sm:w-full"
        onClick={handleSearch}
      >
        <span
          className="w-[80%] opacity-0 transition-all duration-1000 "
          id="inputcont"
        >
          <input
            type="text"
            placeholder="Search"
            className="focus:outline-none text-[0.5em] font-[300] block w-full bg-white"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </span>
        <span
          className="w-[0.7em]  flex justify-end mx-[1%] cursor-pointer "
          id="searchiconcont"
          onClick={handleInputSearch}
        >
          <svg
            className=" "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            fill="#4285F4"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
