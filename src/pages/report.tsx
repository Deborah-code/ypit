import React from 'react';
import Image, {StaticImageData} from 'next/image';
import Problem from '../../public/Problem solving-amico 1.svg';

function report() {
  return (
    <>
     <main className='bg-purple-100  w-full h-full px-14 font-sans  max-sm:px-0'>
        <section className='flex flex-col'>
            <div className='flex items-center justify-between px-10 mb-[15px] max-sm:flex-col max-sm:px-[10px] max-sm:items-start max-sm:justify-start'>
           <div>
           <h2 className='text-left text-white text-4xl mb-[5px] font-semibold  max-sm:pt-[12px]'>Your career report is ready</h2>
            <p className='text-left text-white text-[16px] font-light  ml-[10px] max-sm:ml-0 max-sm:mb-[10px] '>Based on your interests, skills and personality traits</p>
           
          </div>
          <button className='border-[1px] border-[#EEE6F9] text-[#EEE6F9] rounded-3xl px-[15px] flex items-center justify-center gap-[10px] py-[10px]'>Download 
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15" stroke="#EEE6F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#EEE6F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </button>
            </div>
           <div className='bg-[#ECECEC] text-black-70 pb-[15px]  flex items-center justify-center gap-16 mx-[25px] max-sm:mx-[8px] max-sm:flex-col max-sm:gap-6 rounded-xl'>
                <div className='flex flex-col items-start justify-start mx-5 max-sm:mx-[10px]'>

<div className='flex items-center justify-center mt-[20px]  gap-[20px]'>
<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 0.5H32V8.5H24V0.5ZM16 8.5H0V16.5H10.8333L5.89665 22.4814C5.3756 23.1129 4.72137 23.6213 3.9808 23.9703C3.24023 24.3193 2.43165 24.5001 1.61297 24.5H0V32.5H2.85059C6.11114 32.5 9.20216 31.0436 11.2778 28.5285L16 22.8075V32.5H24V8.5H16Z" fill="#5100BF" />
          </svg>
<h2 className=' text-2xl mb-[10px] '>
          Summary</h2>
</div>
 

<p className='text-left text-[16px] ml-[3.2rem] max-sm:ml-0'>
Based on your assessment results, you show strong potential for technology-focused roles 
that combine 
analytical thinking with creative problem-solving. Your profile indicates:
</p>
<div className='flex items-start justify-center ml-[55px] mt-[10px] max-sm:ml-[10px]'>
<svg className=' mt-[6px] max-sm:w-[30px] max-sm:h-[30px] max-sm:-mt-[3px]' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="12" height="12" rx="6" fill="#5100BF" fill-opacity="0.4"/>
<rect x="3" y="3" width="6" height="6" rx="3" fill="#5100BF"/>
</svg>

    <p className='text-[16px] text-left ml-[8px]'>
        <span className='font-[400] font-semibold'>
        Primary strength: 
        </span>
       You have exceptional analytical 
        thinking and technical aptitude, suggesting a natural fit for data-driven roles.
    </p>
</div>
<div className='flex items-start justify-center ml-[55px] mt-[10px] max-sm:ml-[10px]'>
<svg className='w-[17px] mt-[6px] max-sm:w-[45px] max-sm:h-[45px] max-sm:-mt-[3px]' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="12" height="12" rx="6" fill="#5100BF" fill-opacity="0.4"/>
<rect x="3" y="3" width="6" height="6" rx="3" fill="#5100BF"/>
</svg>

    <p className='text-left text-[16px] ml-[8px]'>
        <span className='font-semibold '>
        Career direction:        </span>
        Highest compatibility with Data Science (92% match)
         and UX Design (88% match), both offering strong growth potential and competitive compensation. </p>
</div>
<div className='flex items-start justify-center ml-[55px] mb-[10px] mt-[10px] max-sm:ml-[10px]'>
<svg className='mt-[6px] max-sm:w-[30px] max-sm:h-[30px] max-sm:-mt-[3px]' 
width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="12" height="12" rx="6" fill="#5100BF" fill-opacity="0.4"/>
<rect x="3" y="3" width="6" height="6" rx="3" fill="#5100BF"/>
</svg>

    <p className='text-left text-[16px] ml-[8px]'>
        <span className='font-semibold '>
        Development Areas:         </span>
        Consider strengthening your communication
         skills to complement your technical abilities.</p>
</div>
<div className='flex items-start justify-start ml-[55px] mb-[10px] max-sm:ml-[10px]'>
<svg className='mt-[6px] max-sm:w-[30px] max-sm:h-[30px] max-sm:-mt-[3px]' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="12" height="12" rx="6" fill="#5100BF" fill-opacity="0.4"/>
<rect x="3" y="3" width="6" height="6" rx="3" fill="#5100BF"/>
</svg>

    <p className='text-left text-[16px] ml-[8px]'>
        <span className='font-semibold '>
        Next step:        </span>
        Focus on the recommended 
        learning paths in data science fundamentals or UX design to align with your top career matches.  </p>
</div>
                </div>
                <Image src={Problem as StaticImageData} alt="Hero Image" className="mr-4 max-sm:mr-0" />

            </div>
            <div className='bg-[#ECECEC] text-black-70 mt-[70px] flex-col items-start justify-center gap-16 mx-[25px] px-10 rounded-xl max-sm:mx-[8px] max-sm:px-[5px]'>
            <div className='flex items-start justify-start mt-[40px]  gap-[20px] max-sm:gap-[15px]'>
<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 0.5H32V8.5H24V0.5ZM16 8.5H0V16.5H10.8333L5.89665 22.4814C5.3756 23.1129 4.72137 23.6213 3.9808 23.9703C3.24023 24.3193 2.43165 24.5001 1.61297 24.5H0V32.5H2.85059C6.11114 32.5 9.20216 31.0436 11.2778 28.5285L16 22.8075V32.5H24V8.5H16Z" fill="#5100BF" />
          </svg>
<h2 className=' text-2xl mb-[10px] font-[700]'>
          Top career matches</h2>
</div>
           <div className='flex flex-col items-start justify-center ml-[56px] max-sm:ml-[10px]'>
     
<h2 className='flex items-center justify-center gap-[15px] text-xl font-[600]'>Data Scientist <span className="bg-gray-150/20 px-[10px] py-[5px] rounded-lg text-xs font-[400]">92% match</span></h2>
<p className='text-[17px] text-left leading-[30px] mb-[10px]'>
Combines statistics, programming, and domain expertise to extract meaningful<br/> insights from data.
</p>
<p className='text-gray-70 text-[14px] mb-[15px]'> Top Skills required</p>
<ul className='flex items-center justify-center gap-[10px]  mb-[20px]'>
  <li className='bg-gray-75 px-[15px] rounded-lg py-[5px] text-xs text-black-70'>Python</li>
  <li className='bg-gray-75 px-[15px] rounded-lg py-[5px] text-xs text-black-70'> Statistics</li>
  <li className='bg-gray-75 px-[15px] rounded-lg py-[5px] text-xs text-black-70'>Machine Learning</li>
  <li className='bg-gray-75 px-[15px] rounded-lg py-[5px] text-xs text-black-70'>SQL</li>
</ul>

<h2  className='flex items-center justify-center gap-[15px] text-xl font-[600] mt-[30px]'>UX Designer <span  className="bg-gray-150/20 px-[10px] py-[5px] rounded-lg text-xs font-[400]">80% match</span></h2>
<p className='text-[17px] text-left leading-[30px] mb-[10px]'>
Creates user-centered digital experiences through research, design, and<br/> testing.
</p>
<p className='text-gray-70 text-[14px] mb-[15px]'> Top Skills required</p>
<ul  className='flex items-center justify-center gap-[10px] mb-[20px] max-sm:gap-[5px]'>
  <li className='bg-gray-75 px-[15px] rounded-lg py-[5px] text-xs'>User research</li>
  <li className='bg-gray-75 px-[15px] rounded-lg py-[5px] text-xs'>Wireframing</li>
  <li className='bg-gray-75 px-[15px] rounded-lg py-[5px] text-xs'>Prototype</li>
  <li className='bg-gray-75 px-[15px] rounded-lg py-[5px] text-xs'>Visual design</li>
</ul>
           </div>
  
              </div>
              <div className='bg-[#ECECEC] text-black-70 mt-[70px] mb-[50px] flex-col items-start justify-center gap-16 mx-[25px] px-10 rounded-xl max-sm:mx-[8px] max-sm:px-[5px]'>
            <div className='flex items-start justify-start mt-[40px]  gap-[20px] max-sm:gap-[10px]'>
<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 0.5H32V8.5H24V0.5ZM16 8.5H0V16.5H10.8333L5.89665 22.4814C5.3756 23.1129 4.72137 23.6213 3.9808 23.9703C3.24023 24.3193 2.43165 24.5001 1.61297 24.5H0V32.5H2.85059C6.11114 32.5 9.20216 31.0436 11.2778 28.5285L16 22.8075V32.5H24V8.5H16Z" fill="#5100BF" />
          </svg>
<h2 className=' text-2xl mb-[10px] font-[700] '>
          Recommended Learning Paths</h2>
</div>
           <div className='flex flex-col items-start justify-center ml-[50px] max-sm:ml-0'>
     
<h2 className='flex items-center justify-center gap-[15px] text-xl font-[600]'>Introduction to Data Science <span className="bg-gray-150/20 px-[10px] py-[5px] rounded-lg text-xs font-[400]">Course</span></h2>
<p className='text-[16px] text-left leading-[30px] mb-[20px]'>
Comprehensive overview of data science fundamentals
</p>

<h2 className='flex items-center justify-center gap-[15px] text-xl font-[600] mb-[20px] max-sm:gap-[2px] max-sm:text-left'>Google UX Design Certificate <span className="bg-gray-150/20 px-[10px] py-[5px] rounded-lg text-xs font-[400]">Certificate</span></h2>
<p className='text-[16px] text-left leading-[30px] mb-[20px]'>
Comprehensive overview of data science fundamentals
</p>
<p className='text-gray-70 text-[16px] mb-[3px] italic '>Looking for more learning resources?</p>
<p className='mb-[40px] text-left'>Explore additional courses on Coursera, edX, and<br/> other leading platforms</p>



           </div>
  
              </div>
               </section>

     </main>
     <p className="flex gap-[5px] mt-[20px] text-[#8E8D8D] text-[18px]">
          Made with
          <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.1889 0.533325C4.96487 0.533254 3.76831 0.896167 2.75054 1.57617C1.73278 2.25617 0.939522 3.22271 0.471097 4.35356C0.00267194 5.48441 -0.119882 6.72877 0.118933 7.92928C0.357749 9.12978 0.947208 10.2325 1.81276 11.098L10.9576 20.2428C11.0288 20.3142 11.1134 20.3708 11.2065 20.4095C11.2997 20.4481 11.3995 20.468 11.5004 20.468C11.6012 20.468 11.7011 20.4481 11.7942 20.4095C11.8873 20.3708 11.9719 20.3142 12.0432 20.2428L21.188 11.0965C22.3172 9.92964 22.9425 8.36577 22.9292 6.74209C22.9159 5.1184 22.265 3.56498 21.1169 2.41682C19.9687 1.26867 18.4153 0.617753 16.7916 0.604453C15.1679 0.591152 13.604 1.21653 12.4372 2.34573L11.5004 3.28106L10.565 2.34573C9.99015 1.7709 9.30765 1.31497 8.55651 1.00399C7.80538 0.693011 7.00186 0.533077 6.1889 0.533325Z" fill="#8E8D8D" />
          </svg>
          by the YPIT Innovation Hub
        </p>
    </>
  )
}

export default report
