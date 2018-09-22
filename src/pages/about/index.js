import React from 'react';

import AboutMenu from '../../components/AboutMenu';


const AboutUs = () => {
  return (
    <section className="section">
      <div className="container">
        <div id="about" className="columns">
          <div className="column is-2">
            <AboutMenu />
          </div>
          <div className="column is-7">
            <h2 className='title is-size-2 has-text-weight-bold is-bold-light'>
              About Us
            </h2>

            <p>
              The Educational Justice Institute @ MIT brings together two worlds: the world of academia with MIT's undergraduate and graduate students, faculty and staff, and the world of corrections through incarcerated populations and staff in Massachusetts correctional facilities.  Overseeing the program are two Co-directors whose experience spans both worlds.  Carole Cafferty is a 30 year veteran of Massachusetts corrections, a former superintendent of a Massachusetts Correctional facility, and an adjunct professor in criminal justice at UMass/Lowell.  Lee Perlman has taught philosophy and political philosophy at MIT, Harvard, Swarthmore and Brown for 34 years, and has been bringing classes into Massachusetts prisons since the 1980’s, and teaching credit bearing university courses in prison for 6 years.
            </p>

            Mission:
            To support the academic and personal development of MIT students and individuals that have been effected by the United States criminal justice system by incubating unconventional technical solutions that impact

            Vision:
            The Education Justice Institute @ MIT will serve as an extension of MIT dedicated to the development of students and criminal justice reform. In addition, the corrections research will help solidify best practices in criminal justice education.

            TEJI Objectives:
              -  Create diverse educational ecosystems where traditional and non-traditional students can share there experiences and grow.
              -  Serve as a resource for best practices in corrections education, criminal justice reform, and re-entry services.
              -  Drastically shift how technology is used in corrections by incubating and launching innovative programs and ventures.

            <p>
              Working in partnership with other Massachusetts colleges and universities in the Massachusetts Prison Education Consortium, TEJI has a humanities focus.  We believe that the humanities are humanizing, and that fostering philosophic, social, and literary discussion in prison helps the incarcerated to re-conceive their lives.  Data shows conclusively that post-secondary education in prison improves outcomes as crucial as recidivism, employment for inmates post-release, and conduct and culture in prison.
            </p>
            <p>
              TEJI seeks to do its part to attenuate mass incarceration and stratification of opportunity.  We provide a unique opportunity for MIT students to learn about parts of the human experience that are not commonly available to them, and to offer their skills in a way that makes Massachusetts safer and more educated.
            </p>
            <p>
              The program includes an ever expanding group of initiatives:
              1]  ‘Inside-out” (™) and other ‘blended university level classes where MIT and incarcerated students learn together
              2] Teaching, tutoring and TAing opportunities for MIT students in Massachusetts correctional institutions.
              3] Skill-based training programs such as Coders Beyond Bars, that provide the incarcerated with employment-ready skills
            </p>            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
