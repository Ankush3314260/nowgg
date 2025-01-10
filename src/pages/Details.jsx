import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Details = () => {
  const { Id } = useParams();
  const [personFulldetails, setPersonfulldetails] = useState({});
  const getDetails = async () => {
    let ID = Id.match(/(?<=acting=)\d+/)[0];
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/person/${ID}?language=en-US&api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setPersonfulldetails(data);
      //console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDetails();
  }, []);
 
  return (
    <div className="min-h-screen flex ">
      <div className="w-1/5  mt-[0.5em]">
        <img
          className="object-cover w-4/5 m-auto"
          src={`https://image.tmdb.org/t/p/w500/${personFulldetails.profile_path}`}
          alt="person_Image"
        />
      </div>
      <div className="text-[1em] font-[300] w-4/5 mt-[0.5em] border-l-[1px] p-1">
        <h1 className="text-[0.5em] font-[500] text-indigo-900">{personFulldetails.name}</h1>
         <p className="text-[0.4em]">ACTOR</p>
        <p className="text-[0.35em]">IMDB ID : {personFulldetails.imdb_id}</p>
        <h2 className="text-[0.35em]">Birthday : {personFulldetails.birthday}</h2>
        <p className="text-[0.35em]">Location : {personFulldetails.place_of_birth}</p>
         <p className="text-[0.35em]">  Biography : <span className="text-[0.7em]">{personFulldetails.biography}</span></p>
      </div>
    </div>
  );
};

export default Details;
