import { Typewriter } from "react-simple-typewriter";
export const About = () => {
  return (
    <>
      <main>
        <div className="container-fluid d-flex justify-content-center mt-5">
          <div className="row">
            <div className="col-12">
              <h2 className="code-title">
                <span className="code-brace">{"{"}</span>
                <span className="code-key">
                  <Typewriter
                    words={[" sobreMi "]}
                    loop={0}
                    cursor
                    cursorStyle="_"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
                <span className="code-brace">{"}"}</span>
              </h2>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
