import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const [ searchFilter, setSearchFilter ] = useState({
        title: "",
        location: "",
    });
  const [isSerached, setIsSearched] = useState(false);
  
  const [jobs, setJobs] = useState([]);

  const [showRecruiterLogin, setShowRecruiterLogin] = useState(false);

  // Function to fetch jobs 
  const fetchJobs = async () => { 
    setJobs(jobsData);
  }

  useEffect(() => {
    fetchJobs();
  })
    const value = {
      searchFilter,
      setSearchFilter,
      isSerached,
      setIsSearched,
      jobs,
      setJobs,
      showRecruiterLogin,
      setShowRecruiterLogin,
    };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
export default  AppContextProvider ;
