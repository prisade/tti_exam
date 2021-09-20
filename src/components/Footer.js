import React from 'react'
import './Navbar.css';

const Footer =  () => {
    return (
        <div>
<footer className="page-footer font-small blue pt-4 footStyle">
  <div className="container-fluid text-center text-md-left">
    <div className="row">
      <div className="col-md-6 mt-md-0 mt-3">
        <h2 className="text-uppercase">Explore TTI</h2>
        <p>Techtronic Industries Company Limited (the “Company”, the “Group” or “TTI”) is a fast-growing world leader in Power Tools, Accessories, Hand Tools, Outdoor Power Equipment, and Floorcare for Do-It-Yourself (DIY), professional and industrial users in the home improvement, repair, maintenance, construction and infrastructure industries. The Company is committed to accelerating the transformation of these industries through superior environmentally friendly cordless technology. The TTI brands like MILWAUKEE, RYOBI and HOOVER are recognized worldwide for their deep heritage and cordless product platforms of superior quality, outstanding performance, safety, productivity and compelling innovation.
Founded in 1985 and listed on the Stock Exchange of Hong Kong (“SEHK”) in 1990, TTI is included in the Hang Seng Index as one of their constituent stocks. The Company maintains a powerful brand portfolio, global manufacturing and product development footprint, healthy financial position with record 2020 worldwide sales of US$9.8 billion and over 48,000 employees.</p>
      </div>
      <hr className="clearfix w-100 d-md-none pb-3" />
      <div className="col-md-6 mb-md-0 mb-3">
        <h5 className="text-uppercase">Links</h5>
        <ul className="list-unstyled">
          <li>
            <a href="#!">Link 1</a>
          </li>
          <li>
            <a href="#!">Link 2</a>
          </li>
          <li>
            <a href="#!">Link 3</a>
          </li>
          <li>
            <a href="#!">Link 4</a>
          </li>
        </ul>
      </div>
    </div>

  </div>
  <div className="footer-copyright text-center py-3">© 2021 Copyright:
    <a target="_blank" href="https://www.ttigroup.com/"> TTI</a>
  </div>
</footer>
        </div>
    )
}

export default Footer
