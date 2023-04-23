const Home = () => {
  return (
    <>
      <div className="home-wrap">
        <h1>Upcoming Certifications</h1>
        <div className="cetificaiton">
          <div className="single-cetificaiton">
            <div className="sc-sub div1">
              <img src="assets\Data-Analysis.png" alt="" />
              <div className="wrap-cetif">
                <div className="heading-cetif">
                  <p>CERTIFICATION</p>
                  <p>|</p>
                  <p>ATTEMPT 1</p>
                </div>
                <div className="body-cetif">
                  <h3>DATA ANALYSYS CERTIFICATION</h3>
                </div>
                <div className="footer-cetif">
                  <p>COMPLETED</p>
                  <p>|</p>
                  <p>21 MAR 2022</p>
                </div>
              </div>
            </div>
            <div className="sc-sub div2">
              <div  >
                
                <p>Exam Structure</p>
              </div>
              <div className="round-wrap">
                <p>Round 1</p> <button>MCQS</button> <button>CODING</button>
              </div>

              <div  className="round-wrap2">
                <p>Round 2</p> <button>RROJECT</button>
              </div>
            </div>
            <div className="sc-sub div3">
              <button>VIEW EXAM DETAILS</button>
            </div>
          </div>
        </div>
        <h1>Continue Learning</h1>
        <div className="learing-wrap"></div>
      </div>
    </>
  );
};

export default Home;
