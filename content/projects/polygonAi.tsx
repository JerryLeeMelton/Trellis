"use client"
export default function PolygonAiContent() {
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1200"
      data-aos-delay="100"
      className="container"
    >
      <div className="jlm_portfolio">
        <div className="jlm_title">
          <div className="title_flex">
            <div className="left">
              <h3 className="marg-bottom-one-and-half">Polygon AI</h3>
              <img
                src="assets/img/casestudies/polygon/polygon_casestudy_hero_cropped.webp"
                alt="Polygon Main"
                className="marg-bottom-one-and-half"
              />
              {/* <h6>Challenge:</h6> */}
              <p className="marg-bottom-one-and-half">
                <span
                  className="text-bold"
                  style={{
                    backgroundColor: "transparent",
                    marginBottom: "0",
                    marginRight: "0.5rem",
                    padding: "0",
                  }}
                >
                  Challenge:
                </span>
                {"  "}
                Pipsqueak Pro, now known as Polygon AI, offered powerful but
                highly technical and niche capabilities. However, its potential
                was hampered by an unfocused user interface design.
              </p>
              {/* <h6>Solution: </h6> */}
              <p className="marg-bottom-three">
                <span
                  className="text-bold background-transparent"
                  style={{
                    backgroundColor: "transparent",
                    marginBottom: "0",
                    marginRight: "0.5rem",
                    padding: "0",
                  }}
                >
                  Solution:
                </span>
                {"  "}A rebranding and interface redesign to clarify UI
                sections, providing a more focused and cohesive user experience.
              </p>
              <h4 className="marg-bottom-half">Original State</h4>
              <p className="marg-bottom-one-and-half">
                Initially, Pipsqueak Pro featured three panels with various
                nested functions, lacking a clear workflow for users. Features
                were not intuitively grouped, and the absence of a dedicated
                designer prior to my hiring led to unfocused visual styling,
                further contributing to user confusion.
              </p>
              <img
                src="assets/img/casestudies/polygon/pipsqueakpro_main_screen.webp"
                alt="Pipsqueak Pro Main Screen"
              />
              <div className="case-study-image-caption marg-bottom-one-and-half">
                Pipsqueak Pro main interface screen before I joined the team
              </div>
              <h4 className="marg-bottom-one-and-half">Redesign Process</h4>
              <h6 className="marg-bottom-half">Name and Logo</h6>
              <p className="marg-bottom-one-and-half">
                The team chose the name Polygon AI to better reflect the
                software's capabilities, which involve annotating images with
                shapes known as regions of interest (R.O.I.s), and to align with
                the company's AI-focused direction. As the newly hired designer,
                I had the opportunity to lead the redesign process, which began
                with the application's logo.
              </p>
              <img
                src="assets/img/casestudies/polygon/pip_vs_poly_logos.webp"
                alt="Polygon vs Pipsqueak Logos"
              />
              <div className="case-study-image-caption marg-bottom-one-and-half">
                Old Pipsqueak Pro logo vs new Polygon AI logo
              </div>
              <p className="marg-bottom-three">
                After numerous sketches and iterations, we settled on a sleeker,
                edgier logo compared to the previous Pipsqueak Pro design. The
                angular logo aligned with the cutting-edge aesthetic we aimed
                for and set the creative direction for the interface design.
              </p>
              <h6 className="marg-bottom-one-and-half">Interface Redesign</h6>
              <img
                src="assets/img/casestudies/polygon/polygon_wireframes.webp"
                alt="Polygon Wireframes"
              />
              <div className="case-study-image-caption marg-bottom-one-and-half">
                Wireframe sketches for the Polygon AI interface redesign
              </div>
              <p>
                When approaching the redesign of the interface for Polygon, one
                of the significant challenges was the non-linear user workflow.
                Users frequently moved between sections, completing tasks in
                their unique order. It was crucial to maintain this flexibility
                while improving visual organization.
              </p>
              <p className="marg-bottom-three">
                We retained the three-panel design but introduced icon-based
                buttons along the app’s left and right borders for navigation.
                This created clear sections within the app while preserving a
                familiar layout for existing users.
              </p>
              <h4 className="marg-bottom-one-and-half">Additional Features</h4>
              <h6 className="marg-bottom-half">Color Themes</h6>
              <p className="marg-bottom-one-and-half">
                As part of the improvements to the user interface, I was also
                responsible for adding color themes to Polygon AI. This not only
                polished the app but also allowed users to personalize the
                appearance according to their preferences. The implementation
                was extensible, paving the way for additional themes in the
                future.
              </p>
              <h6 className="marg-bottom-half">In-App Tutorials</h6>
              <p className="marg-bottom-one-and-half">
                Recognizing the need for direct guidance on specialized
                features, I developed a series of guided in-app tutorials. These
                tutorials improved usability and user retention, which directly
                translated into increased revenue for the company.
              </p>
              <h6 className="marg-bottom-half">Analytics</h6>
              <p className="marg-bottom-three">
                Another important feature that I created for Polygon was the
                ability to track user analytics data. This helped the team to
                better understand user behavior and any potential pain points in
                the user experience.
              </p>
              <h4 className="marg-bottom-one-and-half">Final Product</h4>
              <img
                src="assets/img/casestudies/polygon/polygon_main_screen.webp"
                alt="Polygon Main"
              />
              <div className="case-study-image-caption marg-bottom-one-and-half">
                Current Polygon AI main user interface
              </div>
              <p className="marg-bottom-one-and-half">
                Joining Rewire early in its development allowed me to make
                significant and impactful contributions to Polygon AI. I am
                extremely proud of my achievements with Polygon and am eager to
                apply the lessons learned to future projects.
              </p>

              <div className="jlm_button">
                <button
                  className="ib-button"
                  onClick={(e) => {
                    e.preventDefault()
                    window.open("https://rewire.ai/", "_blank")
                  }}
                >
                  Rewire Website
                </button>
                <button
                  className="ib-button"
                  // onClick={backButtonClick}
                >
                  Back To Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
