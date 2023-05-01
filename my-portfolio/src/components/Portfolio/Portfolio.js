import React from "react";
import { Link } from 'react-router-dom';

export default function Portfolio () {


  return (
    <div className="wrapperPortfolio">
      <div className="containerPortfolio">
          <div className="cases">
            <Link to="/portfolio/signup"className="portfolio"
            >
              SIGN UP
            </Link>
                {/* <Route path="/service-desk/statistics" component={Case 2} />
                <Route path="/service-desk/emails" component={Case 3} />
                <Route path="/service-desk/requests" component={Case 4} />
                <Route path="/service-desk/telegram" component={Case 5} />
                <Route path="/service-desk/organizations" component={Case 6} />
                <Route path="/service-desk/members" component={Case 7} />
                <Route path="/service-desk/settings" component={Case 8} />
                <Route path="/service-desk/answers" component={Case 9} />
                <Route path="/service-desk/answers" component={Case 10} /> */}
          </div>
      </div>
    </div>
  )
}