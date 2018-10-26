import React from 'react';
import Img from 'gatsby-image';
import Links from 'gatsby-link';

import AboutMenu from '../../components/AboutMenu';


const College = ({ data }) => {
  const { sizes } = data.img.childImageSharp;

  return (
    <section className="section">
      <div className="container">
        <div id="college" className="columns">
          <div className="column is-2">
            <div className="is-hidden-mobile is-hidden-tablet-only">
              <AboutMenu />
            </div>
            <div className="is-hidden-desktop">
              <Links to="/about/">&larr; About Us</Links>
              <span className="is-pulled-right">
                <Links to="/about/team/">Team &rarr;</Links>
              </span>
            </div>
          </div>
          <div className="column is-10">
            <h2 className='title is-size-2 has-text-weight-bold is-bold-light page-title'>
              Why give Prisoners College Classes?
            </h2>
            <Img sizes={sizes} />
            <br/>
            <p>
              In 1974, Robert Martinson published a report claiming that there was no evidence, from a meta-analysis he and his colleagues had conducted, that any rehabilitative program was effective in its aims. This report became, through the interpretations of policymakers, the foundation of the “nothing works” stance in correctional policy.
            </p>
            <h3 className="title is-size-3 section-title">“Nothing Works” is wrong.</h3>
            <ul className="college-benefits-list">
              <li className="college-benefits-item">
                  At the time of Lipton, Martinson, and Wilks (1975), the “appropriate analysis techniques” needed to evaluate the effectiveness of correctional education “had not been developed”
                  <ul>
                    <li>
                      Treated studies with varying levels of methodological precision as equal
                    </li>
                    <li>
                      Treated effect sizes of varying strengths as equal
                    </li>
                    <li>
                      Used very few studies to examine correctional education in particular
                    </li>
                  </ul>
              </li>
              <li className="college-benefits-item">
                Criminologists have also questioned the reliability of the studies review by Lipton and Colleagues given that these studies had difficulty properly implementing the programs in a way that could be analyzed, and were “weak or poorly defined programs”
              </li>
              <li className="college-benefits-item">
                More recent meta-analyses that address these problems, and use studies that were conducted after Lipton and colleagues published their research, have found consistent significant benefits of correctional education.
              </li>
              <li className="college-benefits-item">
                Furthermore, the popularity of Martinson’s article on rehabilitative programs engendered an active effort to improve these programs, making Lipton et al. (1975) not relevant to evaluating the usefulness of modern correctional education programs even if it had been conducted rigorously.
              </li>
            </ul>
            <h3 className="title is-size-3 section-title">The Benefits of Post-Secondary Education</h3>
            <h4 className="title is-size-4 subsection-title">
              Diverts Inmates away from future wrongdoing
            </h4>
            <ul className="college-benefits-list">
              <li className="college-benefits-item">
                According to the 11 most scientifically rigorous studies of correctional education, inmates who received any form of correctional education were 28% less likely to recidivate compared to inmates who received no education while incarcerated.
              </li>
              <li className="college-benefits-item">
                This translates to a 7.56% reduction in recidivism in the State of Massachusetts if every prisoner received at least the bare minimum in correctional education.
              </li>
              <li className="college-benefits-item">
                If 100 inmates receive one year of college classes in Massachusetts Prisons, and that one year is constitutive of the bare minimum in correctional education necessary to reduce recidivism, one would expect an overall net savings of $750,0000 as a result.
              </li>
              <li className="college-benefits-item">
                Inmates in Massachusetts prisons who received college education had a 14% lower re-arrest rate compared to characteristically similar Massachusetts Inmates who had a secondary degree prior to incarceration but did not receive a college education while incarcerated (Winterfield, Coggeshall, Burke-Storer, Correa, & Tidd, 2009)
              </li>
              <li className="college-benefits-item">
                On a national level, exposure to college should lead to a 5-8% statistically significant reduction in re-arrest or re-incarceration rates within 3 years of release from prison. This reduction is independent of most relevant demographic characteristics with the exception of whether individuals complete classes or withdraw partway through.(Kim & Clarke, 2013; Duwe & Clarke, 2014; Pompoco et al., 2017)
              </li>
              <li className="college-benefits-item">
                Among a sample of Ohio prisoners released between 1989 and 1992, those who received a college education were 62% less likely to recidivate after 13.5 years compared to those with no education. Compared to other forms of correctional education, only college education was related to a significantly lower likelihood of recidivism at the end of the 13.5 year period (Batiuk et al., 2005).
              </li>
            </ul>
            <h4 className="title is-size-4">
              Promotes Peaceful Behavior in Inmates
            </h4>
            <ul className="college-benefits-list">
              <li className="college-benefits-item">
                Inmates who completed college classes in Ohio had a 9% lower rate of violent misconduct in prison the year after taking classes compared to characteristically similar peers who didn’t take college classes (Pompoco, Wooldredge, Lugo, Sullivan, & Latessa, 2017)
              </li>
              <li className="college-benefits-item">
                Inmates, educational staff, and facility staff at four Correctional Institutions in New Mexico, Indiana, and Virginia unanimously agreed that being in enrolled in post-secondary programs motivated inmates to successfully stay away from conflicts (Winterfield, Coggeshall, Burke-Storer, Correa, & Tidd, 2009)
              </li>
              <li className="college-benefits-item">
                Inmates in minimum, medium, and maximum security prisons in Ohio, Kentucky, and Indiana who participated in college classes reported having ONE HALF as many disciplinary tickets compared to inmates who did not participate in college classes. This reduction was unrelated to demographics, nature of crime and sentence, or other types of education an inmate might have received in prison (Lahm, 2009)
              </li>
            </ul>
            <h4 className="title is-size-4">
              Gives Inmates Opportunities to be Productive Citizens
            </h4>
            <ul className="college-benefits-list">
              <li className="college-benefits-item">
                Compared to characteristically similar Minnesota inmates with secondary degrees, inmates who received post-secondary degrees in prison worked 176 more hours and earned an extra $2,649 in the immediate 1.5 years after release. The authors of the study theorized that college education offered ex-inmates access to “permanent positions that require higher levels of skill” (Duwe & Clark, 2014, p. 474).
              </li>
            </ul>
            <h4 className="title is-size-4">
              Provides Inmates with a sense of dignity
            </h4>
            <ul className="college-benefits-list">
              <li className="college-benefits-item">
                Incarcerated students in a variety of prison settings (reentry centers, medium security, maximum security), after taking an Inside-Out Prison Exchange college class, reported significantly higher levels of self-efficacy than they had indicated at the beginning of the 15 week course (Allred et al, 2013).
              </li>
              <li>
                Inmates and Educational Staff at four Correctional Institutions in New Mexico, Indiana, and Virginia unanimously agreed that being in enrolled in post-secondary programs increased inmates self-esteem (Winterfield et a, 2009)
              </li>
            </ul>
            <h4 className="title is-size-4">
              Nearby Post-Secondary Programs in Action
            </h4>
            <ul className="college-benefits-list">
              <li className="college-benefits-item">
                The first cohort of inmates in Wesleyan University’s Center for Prison Education had 187 combined disciplinary tickets prior to enrollment. This cohort did not receive a single ticket during the time period measured: first two years of their enrollment.
              </li>
              <li className="college-benefits-item">
                The Hudson Link for Higher Education reports having a 2% recidivism rate in its 20 year history. Hudson Link has granted over 600 degrees and has roughly 600 students at any one time.
              </li>
              <li className="college-benefits-item">
                The Bard Prison Initiative reports a 2.5% recidivism rate among the 485 graduates of its program over the last 20 years.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default College;


export const collegeImageQuery = graphql`
  query CollegeImageQuery {
      img: file(relativePath: { eq: "about/college.png" }) {
        childImageSharp {
          sizes(maxWidth: 1200) {
            ...GatsbyImageSharpSizes_noBase64
          }
        }
      }
  }
`
