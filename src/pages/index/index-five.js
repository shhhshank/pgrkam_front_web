import React, { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import Select, { components } from "react-select";
import { Link } from "react-router-dom";
import facebook_logo from "../../assets/images/company/facebook-logo.png";
import google_logo from "../../assets/images/company/google-logo.png";
import android from "../../assets/images/company/android.png";
import bg6 from "../../assets/images/hero/bg6.png";
import Bg5 from "../../assets/images/hero/bg5.jpg";

import Navbar from "../../components/Navbar";
import PopularCategories from "../../components/Popular-Categories";
import PopularJobsfour from "../../components/Popular-Jobs-four";
import BestCompanies from "../../components/Best-companies";
import Feature from "../../components/Feature";
import Card from "../../components/card";
import News from "../../components/News";
import Footer from "../../components/Footer";
import JobCounter from "../../components/Job-counter";
import { BiBriefcaseAlt2, BiCheckCircle } from "react-icons/bi";
import { PiMapPin } from "react-icons/pi";
// import { useHistory } from 'react-router-dom';
import ExploreJob from "../../components/Explore-job";
import MillionsJob from "../../components/Millions-job";
import JobBoardStatsSection from "../../components/jobboard";
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";

import {useSelector} from 'react-redux'

const options = [
  { value: "AF", label: "" },
  { value: "AZ", label: "" },
  { value: "BS", label: "Bahamas" },
  { value: "BH", label: "Bahrain" },
  { value: "CA", label: "Canada" },
  { value: "CV", label: "Cape Verde" },
  { value: "DK", label: "Denmark" },
  { value: "DJ", label: "Djibouti" },
  { value: "ER", label: "Eritrea" },
  { value: "EE", label: "Estonia" },
  { value: "GM", label: "Gambia" },
];
const optionsOne = [
  { value: "AF", label: "All Over Punjab" },
  { value: "AZ", label: " Amritsar" },
  { value: "BS", label: "Bathinda" },
  { value: "BH", label: "Hoshiarpur" },
  { value: "CA", label: "Gurdaspur" },
  { value: "CV", label: "Barnala" },
  { value: "DK", label: "Fridkot" },
  { value: "DJ", label: "Jalandhar" },
  { value: "ER", label: "Ludhiana" },
  { value: "EE", label: "Mansa" },
  { value: "GM", label: "Pathankot" },
];
const optionsTwo = [
  { value: "1", label: "Goverment" },
  { value: "2", label: "private" },
];
const optionThree = [
  { value: "1", label: "No Schooling" },
  { value: "2", label: "5th" },
  { value: "3", label: "8th" },
  { value: "4", label: "10th" },
  { value: "5", label: "12th" },
  { value: "6", label: "Diploma After 10th" },
  { value: "7", label: "Diploma After 12th" },
  { value: "8", label: "ITI" },
  { value: "9", label: "Graduate" },
  { value: "10", label: "PHD" },
];
const optionFour = [
  { value: "1", label: "No Experience" },
  { value: "2", label: "1 Experience" },
  { value: "3", label: "2 Experience" },
  { value: "4", label: "3 Experience" },
  { value: "5", label: "4 Experience" },
  { value: "6", label: "5 Experience" },
  { value: "7", label: "6 Experience" },
  { value: "8", label: "7 Experience" },
  { value: "9", label: "8 Experience" },
  { value: "10", label: "9 Experience" },
  { value: "11", label: "10 Experience" },
  { value: "12", label: "11 Experience" },
  { value: "13", label: "12 Experience" },
];
const optionFive = [
  { value: "1", label: "Back officer Executive" },
  { value: "2", label: "PHP Devloper" },
  { value: "3", label: "Sales Executive" },
  { value: "4", label: "Computer Operator" },
  { value: "5", label: "Assintant Manager" },
];

export default function IndexFive() {
  const [showChatBot, setShowChatBot] = useState(false);
  const userState = useSelector(state => state.user)
  const authState = useSelector(state => state.auth)


  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position and update showChatBot accordingly
      const scrollPosition = window.scrollY;

      // Set a threshold for when to show the ChatBot (adjust as needed)
      const threshold = 500;

      if (scrollPosition > threshold) {
        // setShowChatBot(true);
      } else {
        setShowChatBot(false);
      }
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isOpen, setOpen] = useState(false);
  const steps = [
    {
      id: "0",
      message: "Welcome to PGKRAM Website! i am Your Guide",
      trigger: "1",
    },
    {
      id: "1",
      message: "please enter your name ",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: "Hi {previousValue},How may can i help you",
      trigger: "4",
    },
    {
      id: "4",
      user: true,
      trigger: "5",
    },
    {
      id: "5",
      message:
        "you want to apply for  {previousValue},then you should tell me that you have ",
      trigger: "6",
    },
    {
      id: "6",
      options: [
        { value: "Login", label: "Login", trigger: "Login" },
        { value: "Singup", label: "Singup", trigger: "Singup" },
        { value: "Postjob", label: "Postjob", trigger: "Postjob" },
      ],
    },
    {
      id: "Postjob",
      component: (
        <div>
          To postt a job in <Link to="../job-post">Click Here</Link>.
        </div>
      ),
      end: true,
    },
    {
      id: "Login",
      component: (
        <div>
          To log in <Link to="../login">Click Here</Link>.
        </div>
      ),
      trigger: "7",
    },

    {
      id: "Singup",
      component: (
        <div>
          To Singup<Link to="../signup">Click Here</Link>.
        </div>
      ),
      end: true,
    },
    {
      id: "7",
      message: "hey you have succefully logged in go for applying job",
      end: true,
    },
  ];
  const [log, setlog] = useState(false);
  // const history = useHistory();
  const handleApplyJob = () => {
    // Check if the user is logged in (you need to implement your authentication logic)
    const isLoggedIn = true;

    // Redirect to the appropriate page based on the login status
    if (isLoggedIn) {
      setlog(true);
    } else {
      setlog(false);
    }
  };

  return (
    <>
      <Navbar navClass="justify-end nav-light" />
      <section className="relative flex py-36 md:h-screen h-auto items-center bg-[url('../../assets/images/hero/bg6.jpg')] bg-top bg-no-repeat bg-cover">
        <div className="absolute top-0 start-0 w-full h-full z-0 pointer-events-none overflow-hidden">
          <iframe
            title="iframe-1"
            src="https://player.vimeo.com/video/354421650?background=1&autoplay=1&loop=1&byline=0&title=0"
            className="absolute top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2  -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vw]"
          ></iframe>

          <iframe
            title="iframe-2"
            src="https://www.youtube.com/embed/JsNvHJsufhI?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1"
            className="absolute top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2  -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vw]"
          ></iframe>
        </div>
        <div className="absolute inset-0 bg-emerald-900/80"></div>
        <div className="container z-1">
          <div className="grid grid-cols-1 text-center mt-10 relative">
            <h4 className="lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold text-white">
              Got Talent ? <br /> Meet Opportunity
            </h4>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Fill Out The Form Given Below.
            </p>

            <div className="d-flex" id="reserve-form">
              <div className="md:w-5/6 mx-auto">
                <div className="lg:col-span-10 mt-8">
                  <div className="bg-white dark:bg-slate-900 border-0 shadow rounded-md p-3">
                    <form action="#">
                      <div className="registration-form text-dark text-start">
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                          <div className="filter-search-form relative filter-border">
                            <BiBriefcaseAlt2 className="icons" />
                            <Select
                              className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                              placeholder="Job Type"
                              options={optionsTwo}
                            />
                          </div>

                          <div className="filter-search-form relative filter-border">
                            <PiMapPin className="icons" />
                            <Select
                              className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                              placeholder="Location"
                              options={optionsOne}
                            />
                          </div>

                          <div className="filter-search-form relative filter-border">
                            <PiMapPin className="icons" />
                            <Select
                              className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                              placeholder="Qualification"
                              options={optionThree}
                            />
                           </div>
                          <div className="filter-search-form relative filter-border">
                            <PiMapPin className="icons" />
                            <Select
                              className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                              placeholder="Experience"
                              options={optionFour}
                            />
                          </div>
                        </div>
                        <p
                          style={{
                            textAlign: "center",
                            width: "100%",
                            marginTop: 10,
                            marginBottom: 10,
                          }}
                        >
                          Or
                        </p>
                        <div className="filter-search-form relative filter-border">
                          <PiMapPin className="icons" />
                          <Select
                            className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                            placeholder="Enter Job Title or Description"
                            options={optionFive}
                          />
                        </div>
                      </div>

                      <input
                        type="submit"
                        id="search"
                        name="search"
                        style={{ marginTop: 10 }}
                        className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white searchbtn submit-btn w-100"
                        value="Search"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <span className="text-white/60">
                <span className="text-white">Popular Searches :</span> Designer,
                Developer, Web, IOS, PHP Senior Engineer
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative md:py-24 py-16">
        <JobCounter />
        {/* <div className="right">
        <Segment floated="right">
         <ChatBot steps={steps}/>
        </Segment>
        </div> */}
        <div
          className="fixed bottom-0 right-0 p-4 z-50"
          style={{ right: "0", display: showChatBot ? "block" : "none" }}
        >
          <ChatBot steps={steps} />
        </div>

        <PopularCategories />
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="S_CGed6E610"
          onClose={() => setOpen(false)}
        />
        <section
          className="py-24 w-full table relative bg-center bg-no-repeat bg-cover jarallax"
          data-jarallax
          data-speed="0.5"
          style={{ backgroundImage: "url(../../assets/images/hero/bg5.jpg)" }}
        >
          <div className="absolute inset-0 bg-slate-900/40"></div>
          <div className="container relative">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px]">
              <div>
                <h5 className="text-xl font-semibold text-dark">
                  Register for Candidate or User
                </h5>

                <ul className="list-none text-dark/50 mt-4">
                  <li className="mb-1 flex items-center">
                    <BiCheckCircle className="text-dark text-xl me-2" /> It has
                    survived not only five centuries
                  </li>
                  <li className="mb-1 flex items-center">
                    <BiCheckCircle className="text-dark text-xl me-2" /> There
                    are many variations of passages
                  </li>
                </ul>

                <div className="mt-4" onClick={handleApplyJob}>
                  <Link
                    to={log ? "/job-apply" : "/login"}
                    className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-full"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>

              <div>
                <h5 className="text-xl font-semibold text-dark">
                  Register for Companies
                </h5>

                <ul className="list-none text-dark/50 mt-4">
                  <li className="mb-1 flex items-center">
                    <BiCheckCircle className="text-dark text-xl me-2" /> Many
                    desktop publishing packages
                  </li>
                  <li className="mb-1 flex items-center">
                    <BiCheckCircle className="text-dark text-xl me-2" />{" "}
                    Contrary to popular belief
                  </li>
                  <li className="mb-1 flex items-center">
                    <BiCheckCircle className="text-dark text-xl me-2" /> It is a
                    long established fact that a reader
                  </li>
                </ul>

                <div className="mt-4">
                  <Link
                    to="/job-post"
                    className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-full"
                  >
                    Post Jobs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="relative md:pb-24 pb-16 overflow-hidden">
        <PopularJobsfour />
        <BestCompanies />
        <Feature />
        <JobBoardStatsSection />
        <News />

        <ExploreJob />
      </section>
      <Footer />
    </>
  );
}
