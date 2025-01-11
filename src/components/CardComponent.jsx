import { useContext } from "react";
import { Link } from "react-router";
import PropTypes from "prop-types";
import { PersonIdContext } from "../contexts/Personcontext";

const CardComponent = ({ photo }) => {
  // console.log(photo);
  const { setPersonid } = useContext(PersonIdContext);
  const handlePopUp = (id) => {
    setPersonid(id);
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector("#popupcontainer").classList.toggle("hidden");
  };
  return (
    <div>
      <Link to={`/details/${photo.name}&acting=${photo.id}`}>
        <div className=" w-[90%]  border-2 border-white hover:border-indigo-700 hover:transition-all hover:duration-1000 p-2 rounded-xl cursor-pointer mt-[0.2em] ">
          <img
            className="w-4/5 rounded-xl m-auto"
            src={`https://image.tmdb.org/t/p/w500/${photo.profile_path}`}
            alt={`${photo.title}`}
          />
          <button
            id="chatbutton"
            onClick={(e) => {
              e.preventDefault();
              handlePopUp(photo.id);
            }}
            className="bg-indigo-700 relative overflow-hidden text-white  transition-all duration-200 font-[600] flex items-center justify-center space-x-1 px-[0.5em] py-[0.3em] rounded-full   -translate-y-1/2 m-auto w-3/5"
          >
            {" "}
            <span className="w-[30%] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="-5.0 -10.0 110.0 135.0"
              >
                <path
                  fill="#FFFFFF"
                  d="m64.805 4.9688c-0.082032-0.48047-0.77734-0.48047-0.85938 0-0.63281 3.6289-3.4727 6.4688-7.1016 7.1016-0.48047 0.082032-0.48047 0.77734 0 0.85938 3.6289 0.63281 6.4688 3.4727 7.1016 7.1016 0.082032 0.48047 0.77734 0.48047 0.85938 0 0.63281-3.6289 3.4727-6.4688 7.1016-7.1016 0.48047-0.082032 0.48047-0.77734 0-0.85938-3.6289-0.63281-6.4688-3.4727-7.1016-7.1016zm17.566 9.3516c0.14844-0.84375 1.3594-0.84375 1.5078 0 1.1055 6.3477 6.0781 11.32 12.426 12.426 0.84375 0.14844 0.84375 1.3594 0 1.5078-6.3477 1.1055-11.32 6.0781-12.426 12.426-0.14844 0.84375-1.3594 0.84375-1.5078 0-1.1055-6.3477-6.0781-11.32-12.426-12.426-0.84375-0.14844-0.84375-1.3594 0-1.5078 6.3477-1.1055 11.32-6.0781 12.426-12.426zm-28.621 13.18c0-1.0352-0.83984-1.875-1.875-1.875h-32.5c-5.1758 0-9.375 4.1992-9.375 9.375v31.25c0 5.1758 4.1992 9.375 9.375 9.375h27.5c1.7266 0 3.125 1.3984 3.125 3.125v6.875c0 3.6055 4.1172 5.6641 7 3.5l15.832-11.875c1.4062-1.0547 3.1172-1.625 4.875-1.625h6.668c5.1758 0 9.375-4.1992 9.375-9.375v-11.25c0-1.0352-0.83984-1.875-1.875-1.875s-1.875 0.83984-1.875 1.875v11.25c0 3.1055-2.5195 5.625-5.625 5.625h-6.668c-2.5664 0-5.0664 0.83203-7.125 2.375l-15.832 11.875c-0.41016 0.30859-1 0.015625-1-0.5v-6.875c0-3.7969-3.0781-6.875-6.875-6.875h-27.5c-3.1055 0-5.625-2.5195-5.625-5.625v-31.25c0-3.1055 2.5195-5.625 5.625-5.625h32.5c1.0352 0 1.875-0.83984 1.875-1.875z"
                  fillRule="evenodd"
                />
              </svg>
            </span>
            <span className="w-2/5 text-[0.85em] max-sm:text-[1.2em] ">
              Chat
            </span>
          </button>
          <div className="-translate-y-[20%] max-xs:-translate-y-[10%] mx-[5%] max-sm:text-[1.5em] max-xs:text-[1.8em]">
            <h1 className="font-[500] text-indigo-950  ">{photo.name}</h1>
            <p className="font-[300] text-[0.7em]  ">
              {photo.known_for[0].overview.substring(0, 60)}...
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
CardComponent.propTypes = {
  photo: PropTypes.shape({
    name: PropTypes.string,
    profile_path: PropTypes.string,
    overview: PropTypes.string,
    known_for: PropTypes.array,
    title: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
export default CardComponent;
