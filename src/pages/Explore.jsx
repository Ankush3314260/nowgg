import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Popup from "../components/Popup";
import { PersonIdContext } from "../contexts/Personcontext";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router";
const Explore = () => {
  const [photos, setPhotos] = useState([]);
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [maleData, setMaledata] = useState([]);
  const [femaleData, setFemaledata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [countPage, setCountpage] = useState(2);
  const { setPersonid } = useContext(PersonIdContext);

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/person/popular?language=en-US&page=${countPage}&api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setPhotos([...photos, ...data.results]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handlePopUp = (id) => {
    setPersonid(id);
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector("#popupcontainer").classList.toggle("hidden");
  };
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 10 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setCountpage((prev) => prev + 1);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    getData();
  }, [countPage]);
  useEffect(() => {
    if (male == true) {
      let temp = photos.filter((items) => {
        if (items.gender == 2) {
          return items;
        }
      });
      setMaledata(temp);
      // console.log(temp);
    }

    if (female == true) {
      let temp = photos.filter((items) => {
        if (items.gender == 1) {
          return items;
        }
      });
      setFemaledata(temp);
      // console.log(temp);
    }
  }, [male, female, countPage]);
  return (
    <div>
      <h1 className="text-center">WELCOME, to now.gg</h1>
      <div className=" mx-[5%] flex justify-between items-center ">
        <div className="w-1/2 ">
          <SearchBar />
        </div>
        <div className="w-1/2 flex items-center  space-x-2">
          <div className="w-2/5 flex items-center justify-end   border-r-[1px]">
            <span className="w-[0.5em] rounded-full p-2 max-sm:p-[2px] block mx-[5%] bg-indigo-600 ">
              <svg
                className="w-full "
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 -28.5 256 256"
                version="1.1"
                preserveAspectRatio="xMidYMid"
              >
                <g>
                  <path
                    d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                    fill="#FFFFFF"
                    fillRule="nonzero"
                  ></path>
                </g>
              </svg>
            </span>
          </div>
          <div className="flex items-center gap-[0.1em]">
            <label className="switch relative  w-[0.6em] h-[0.3em] flex ">
              <input type="checkbox" className="input1" />
              <span
                className="slider rounded-full "
                onClick={() => {
                  setFemale((prev) => {
                    // console.log(prev, "+");
                    return !prev;
                  });
                }}
              ></span>
            </label>
            <span className="text-[0.2em] font-[300]">Female Artist</span>
          </div>
          <div className="flex items-center gap-[0.1em]">
            <label className="switch relative  w-[0.6em] h-[0.3em] flex ">
              <input type="checkbox" className="input2" />
              <span
                className="slider rounded-full cursor-pointer"
                onClick={() => {
                  setMale((prev) => {
                    // console.log(prev);
                    return !prev;
                  });
                }}
              ></span>
            </label>
            <span className="text-[0.2em] font-[300]">Male Artist</span>
          </div>
        </div>
      </div>
      <h1 className="font-[300] text-[0.5em]">Explore Page</h1>
      <div
        id="popupcontainer"
        className="hidden  fixed left-0 right-0 top-0 bottom-0 min-h-svh   bg-black/5 backdrop-blur-sm z-10"
      >
        <Popup />
      </div>
      <div className="">
        {photos.length != 0 &&
        ((male == false && female == false) ||
          (male == true && female == true)) ? (
          <div className="grid grid-cols-5 max-lg:grid-cols-4 max-sm:grid-cols-3 max-xs:grid-cols-2  max-sm:gap-[0.5%] text-[0.25em]">
            {photos.map((photo, index) => {
              return (
                <div key={index}>
                  <Link to={`/details/${photo.name}&acting=${photo.id}`}>
                    <div className=" w-[90%]  border-2 border-white hover:border-indigo-700 transition-all duration-1000 p-2 rounded-xl cursor-pointer mt-[0.2em]">
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
                        <h1 className="font-[500] text-indigo-950  ">
                          {photo.name}
                        </h1>
                        <p className="font-[300] text-[0.7em]  ">
                          {photo.known_for[0].overview.substring(0, 60)}...
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
            {loading && <Loader />}
          </div>
        ) : (
          <div>
            {male == true && female == false ? (
              <div className="grid grid-cols-5 max-lg:grid-cols-4 max-sm:grid-cols-3 max-xs:grid-cols-2  max-sm:gap-[0.5%] text-[0.25em] mt-[0.3em]">
                {maleData.map((photo, index) => {
                  return (
                    <div key={index}>
                      <Link to={`/details/${photo.name}&acting=${photo.id}`}>
                        <div className=" w-[90%]  border-2 border-white hover:border-indigo-700 transition-all duration-1000 p-2 rounded-xl cursor-pointer mt-[0.2em]">
                          <img
                            className="w-4/5 rounded-xl m-auto"
                            src={`https://image.tmdb.org/t/p/w500/${photo.profile_path}`}
                            alt={`${photo.title}`}
                          />
                          <button
                            id="chatbutton"
                            onClick={(e) => {
                              e.preventDefault()
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
                            <h1 className="font-[500] text-indigo-950  ">
                              {photo.name}
                            </h1>
                            <p className="font-[300] text-[0.7em]  ">
                              {photo.known_for[0].overview.substring(0, 60)}...
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
                {loading && <Loader />}
              </div>
            ) : (
              <div className="grid grid-cols-5 max-lg:grid-cols-4 max-sm:grid-cols-3 max-xs:grid-cols-2  max-sm:gap-[0.5%] text-[0.25em] mt-[0.3em]">
                {femaleData.map((photo, index) => {
                  return (
                    <div key={index}>
                      <Link to={`/details/${photo.name}&acting=${photo.id}`}>
                        <div className=" w-[90%]  border-2 border-white hover:border-indigo-700 transition-all duration-1000 p-2 rounded-xl cursor-pointer mt-[0.2em]">
                          <img
                            className="w-4/5 rounded-xl m-auto"
                            src={`https://image.tmdb.org/t/p/w500/${photo.profile_path}`}
                            alt={`${photo.title}`}
                          />
                          <button
                            id="chatbutton"
                            onClick={(e) => {
                              e.preventDefault()
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
                            <h1 className="font-[500] text-indigo-950  ">
                              {photo.name}
                            </h1>
                            <p className="font-[300] text-[0.7em]  ">
                              {photo.known_for[0].overview.substring(0, 60)}...
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
                {loading && <Loader />}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
