import { useContext, useEffect, useState } from "react";
import { PersonIdContext } from "../contexts/Personcontext";
import axios from "axios";
import Loader from "./Loader";

const Popup = () => {
  const { personId } = useContext(PersonIdContext);
  const [selectedPerson, setSelectedPerson] = useState({});
  const [loading, setLoading] = useState(true);
  //console.log(personId);
  const getPersonInfo = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/person/${personId}?language=en-US&api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      //console.log(data);
      setSelectedPerson(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    if (personId != 0) {
      getPersonInfo();
    }
  }, [personId]);
  const handleClose = () => {
    document.querySelector("body").style.overflow = "auto";
    document.querySelector("#popupcontainer").classList.toggle("hidden");
  };
  return (
    <div className="  relative h-svh flex items-center justify-center">
      <button onClick={handleClose}>
        <svg
          className="w-[5%] min-w-[20px] absolute top-[2%] max-sm:top-[5%] right-[2%] hover:rotate-180 transition-all duration-200 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          fill="#000000"
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      </button>
      <div className="w-4/5 max-sm:w-[100%]  h-[90vh]  sm:flex sm:items-center m-auto  ">
        {loading && <Loader />}
        {!loading && (
          <div className="flex justify-between max-sm:flex-wrap bg-white max-sm:min-h-[90vh]">

            <img
              className="w-1/5  max-xs:min-w-[150px] max-sm:min-w-[100px] max-xs:m-auto max-xs:rounded-sm  object-cover "
              src={`https://image.tmdb.org/t/p/w500/${selectedPerson.profile_path}`}
              alt="person_Image"
            />
            <div className="w-[75%] max-xs:w-full min-w-[50px] max-sm:text-[1.35em]">
               <h2 className="text-[0.6em] font-[300] text-slate-900 border-b-2 w-4/5 p-1  ">{selectedPerson.name} <span className="text-[0.6em]"> ({selectedPerson.known_for_department})</span></h2>
               <p className="text-[0.25em] font-[400] p-1">{selectedPerson.biography.split(" ").slice(0,50).join(" ")}...</p>
               <p className="text-[0.25em] font-[400] p-1">Born : {selectedPerson.birthday}</p>
               <p className="text-[0.25em] font-[400] p-1">Birth Place: {selectedPerson.place_of_birth}</p>
               <p></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
