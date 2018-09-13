import React, { Component } from 'react';


const Contact = () => {
  return (
    <section className="section">
      <div className="container">
        <div id="about" className="columns">
          <div className="column is-7">
            <h2 className='title is-size-2 has-text-weight-bold is-bold-light'>
              Contact Us
            </h2>
            <form
              className="contact-form"
              name="contact"
              method="post"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="field">
                <label className="label">Name</label>
                <div className="control has-icons-right">
                  <input
                    className="input"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Subject</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Message</label>
                <div className="control">
                  <textarea
                    name="message"
                    className="textarea"
                    placeholder="Your Message"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button
                    className="button is-link submit is-pulled-right"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// class Contact extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       email: '',
//       subject: '',
//       message: ''
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleChange(event) {
//     const name = event.target.name;
//     const value = event.target.value;
//     this.setState({
//       [name]: value
//     });
//   }
//
//   handleSubmit(event) {
//     event.preventDefault();
//
//     this.setState({
//       name: '',
//       email: '',
//       subject: '',
//       message: ''
//     });
//   }
//
//   render() {
//     return (
//       <section className="section">
//         <div className="container">
//           <div id="about" className="columns">
//             <div className="column is-7">
//               <h2 className='title is-size-2 has-text-weight-bold is-bold-light'>
//                 Contact Us
//               </h2>
//               <form
//                 className="contact-form"
//                 name="contact"
//                 onSubmit={this.handleSubmit}
//               >
//                 <div className="field">
//                   <label className="label">Name</label>
//                   <div className="control has-icons-right">
//                     <input
//                       className="input"
//                       type="text"
//                       name="name"
//                       placeholder="Your Name"
//                       value={this.state.name}
//                       onChange={this.handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="field">
//                   <label className="label">Email</label>
//                   <div className="control">
//                     <input
//                       className="input"
//                       type="email"
//                       name="email"
//                       placeholder="your@email.com"
//                       value={this.state.email}
//                       onChange={this.handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="field">
//                   <label className="label">Subject</label>
//                   <div className="control">
//                     <input
//                       className="input"
//                       type="text"
//                       name="subject"
//                       placeholder="Subject"
//                       value={this.state.subject}
//                       onChange={this.handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="field">
//                   <label className="label">Message</label>
//                   <div className="control">
//                     <textarea
//                       name="message"
//                       className="textarea"
//                       placeholder="Your Message"
//                       value={this.state.message}
//                       onChange={this.handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="field">
//                   <div className="control">
//                     <button
//                       className="button is-link submit is-pulled-right"
//                       type="submit"
//                     >
//                       Submit
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// };

export default Contact;
