import React, { useRef } from 'react';
import OpenAI from 'openai';
import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";  // Assuming languageConstants is imported
import openai from "../utils/OpenAI";
import OpenAIKey from "../utils/Constants";


const GptComponent = () => {
  const searchKey = useSelector((store) => store.config.lang);

  const searchText = useRef(null);

  console.log('searchkey', searchKey)

  const handleSubmit = (e) => { return e.preventDefault(); }

  // const handlechange = async () => {

  //   console.log(searchText.current.value, 'curreet obj')

  //     const gptQuery = "act as a movie recommendation system:" + searchText.current.value + "only give two names"

  //     const chatCompletion = await openai.chat.completions.create({
  //       messages: [{ role: 'user', content: gptQuery }],
  //       model: 'gpt-4o',
  //     });

  //     console.log(chatCompletion,'reschat')

  // }
  const handlechange = async () => {
    console.log(searchText.current.value, 'curreet obj')

    const gptQuery = "act as a movie recommendation system:" + searchText.current.value + "only give two names";

    try {
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-4o',
      });

      console.log(chatCompletion, 'reschat');
    } catch (error) {
      if (error.response && error.response.status === 429) {
        // You can provide a message to the user about the quota being exceeded
        console.log('You have exceeded your API quota, please try again later.');
      } else {
        console.error('An error occurred:', error);
      }
    }
  }


  return (
    <div className='flex justify-center'>
      <form className='grid-col-12' onSubmit={handleSubmit}>
        {/* Using optional chaining to avoid undefined errors */}
        <input
          ref={searchText}
          type='text'
          className='border border-gray-300 rounded-lg p-5 mt-40 w-100 col-span-9'
          placeholder={lang.SPANISH.gptsearchPlaceholder}></input>
        <button className='text-white bg-red-800 hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700' onClick={handlechange}>
          {lang.ENGLISH.search}
        </button>
      </form>
    </div>
  );
};

export default GptComponent;
