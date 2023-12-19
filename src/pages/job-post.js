import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { DollarSign } from 'react-feather';
import { useState } from 'react';

export default function JobPost() {
    const [showJobDetails, setShowJobDetails] = useState(false);
    const [showSkillExperience, setShowSkillExperience] = useState(false);
    const [showAddress, setShowAddress] = useState(false);

    const toggleSection = (section) => {
        switch (section) {
            case 'jobDetails':
                setShowJobDetails(!showJobDetails);
                setShowSkillExperience(false);
                setShowAddress(false);
                break;
            case 'skillExperience':
                setShowSkillExperience(!showSkillExperience);
                setShowJobDetails(false);
                setShowAddress(false);
                break;
            case 'address':
                setShowAddress(!showAddress);
                setShowJobDetails(false);
                setShowSkillExperience(false);
                break;
            default:
                break;
        }
    };
 
    return (
        <>
            <Navbar navClass="justify-end nav-light" />
            <section className="relative w-full py-36 bg-[url('../../assets/images/hero/bg.jpg')] bg-top bg-no-repeat bg-cover">
                {/* ... (previous code) */}
                <div className="absolute inset-0 bg-emerald-900/90"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">Job Post</h3>
                    </div>
                </div>
                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/index">Homepage</Link></li>
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white" aria-current="page">Job Post</li>
                    </ul>
                </div>
            </section>

            <div className="relative">
                <div className="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-slate-50 dark:text-slate-800">
                    <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <section className="relative bg-slate-50 dark:bg-slate-800 lg:py-24 py-16">
                <div className="container">
                    <div className="lg:flex justify-center">
                        <div className="lg:w-2/3">
                            <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                <form className="text-left">
                                    <div className="grid grid-cols-1">
                            

                                        {/* <h5 className="text-lg font-semibold">Job Details:</h5> */}
                                    </div>

                                    <div className="grid grid-cols-12 gap-4 mt-4">
                                    
                                    
                                        {/* ... Your job details form elements ... */}
                                    </div>

                                    <div className="grid grid-cols-1 mt-8">
                                        <h5 className="text-lg font-semibold cursor-pointer" onClick={() => toggleSection('jobDetails')}>
                                            Job Details
                                        </h5>
                                    </div>
                                    {showJobDetails && (
                                        <div className="grid grid-cols-12 gap-4 mt-4">

                                        <div className="col-span-12 ltr:text-left rtl:text-right">
                                            <label className="font-semibold" htmlFor="RegisterName">Job Title:</label>
                                            <input id="RegisterName" type="text" className="form-input border border-slate-100 dark:border-slate-800 mt-1" placeholder="Web Developer" />
                                        </div>
                                        <div className="col-span-12 ltr:text-left rtl:text-right">
                                            <label htmlFor="comments" className="font-semibold">Job Description:</label>
                                            <textarea name="comments" id="comments" className="form-input border border-slate-100 dark:border-slate-800 mt-1 textarea" placeholder="Write Job Description :"></textarea>
                                        </div>

                                        <div className="md:col-span-6 col-span-12 ltr:text-left rtl:text-right">
                                            <label className="font-semibold">Categories:</label>
                                            <select className="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
                                                <option value="WD">Web Designer</option>
                                                <option value="WD">Web Developer</option>
                                                <option value="UI">UI / UX Desinger</option>
                                            </select>

                                        </div>
                                               
                                        <div className="md:col-span-6 col-span-12 ltr:text-left rtl:text-right">
                                            <label className="font-semibold">Job Type:</label>
                                            <select className="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
                                                <option value="1">Full Time</option>
                                                <option value="2">Part Time</option>
                                                <option value="3">Freelancer</option>
                                                <option value="4">Remote Work</option>
                                                <option value="5">Office Work</option>
                                            </select>

                                        </div>
                                        <div className="md:col-span-6 col-span-12 ltr:text-left rtl:text-right">
                                            <label className="font-semibold">Salary:</label>
                                            <select className="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
                                                <option value="H">Hourly</option>
                                                <option value="M">Monthly</option>
                                            </select>

                                        </div>

                                        <div className="md:col-span-3 col-span-12 ltr:text-left rtl:text-right">
                                            <label className="font-semibold md:invisible md:block hidden">Min:</label>
                                            <div className="relative mt-1">
                                                <span className="w-10 h-10 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-800 absolute top-0 start-0 overflow-hidden rounded">
                                                    <DollarSign className="w-4 h-4 absolute top-3 start-3"></DollarSign>
                                                </span>
                                                <input type="number" className="form-input border border-slate-100 dark:border-slate-800 ps-12" placeholder="min" name="minsalary" />
                                            </div>
                                        </div>

                                        <div className="md:col-span-3 col-span-12 ltr:text-left rtl:text-right">
                                            <label className="font-semibold md:invisible md:block hidden">Max:</label>
                                            <div className="relative mt-1">
                                                <span className="w-10 h-10 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-800 absolute top-0 start-0 overflow-hidden rounded">
                                                    <DollarSign className="w-4 h-4 absolute top-3 start-3"></DollarSign>
                                                </span>
                                                <input type="number" className="form-input border border-slate-100 dark:border-slate-800 ps-12" placeholder="max" name="maxsalary" />
                                            </div>
                                        </div>
                                            {/* ... Your job details form elements ... */}
                                        </div>
                                    )}
                                    <div className="grid grid-cols-1 mt-8">
                                        <button
                                            className={`btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white ${showJobDetails && 'mb-4'}`}
                                            onClick={() => toggleSection('jobDetails')}
                                        >
                                            Toggle Job Details
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 mt-8">
                                        <h5 className="text-lg font-semibold">Skill & Experience:</h5>
                                    </div>
                                    <div className="grid grid-cols-12 gap-4 mt-4">
                                        {/* ... Your skill and experience form elements ... */}
                                    </div>
                                    <div className="grid grid-cols-1 mt-8">
                                        <button
                                            className={`btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white ${showSkillExperience && 'mb-4'}`}
                                            onClick={() => toggleSection('skillExperience')}
                                        >
                                            Toggle Skill & Experience
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 mt-8">
                                        <h5 className="text-lg font-semibold cursor-pointer" onClick={() => toggleSection('address')}>
                                            Address
                                        </h5>
                                    </div>
                                    {showAddress && (
                                        <div className="grid grid-cols-12 gap-4 mt-4">
                                            {/* ... Your address form elements ... */}
                                        </div>
                                    )}
                                    <div className="grid grid-cols-1 mt-8">
                                        <button
                                            className={`btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white ${showAddress && 'mb-4'}`}
                                            onClick={() => toggleSection('address')}
                                        >
                                            Toggle Address
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 mt-4">
                                        <div>
                                            <button
                                                type="submit"
                                                id="submit"
                                                name="send"
                                                className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white"
                                            >
                                                Post Now
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}