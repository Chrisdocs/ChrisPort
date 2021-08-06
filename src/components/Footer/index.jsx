import React from 'react';
import '../../assets/css/footer.css';

function Footer(props) {

    return(
        <section className="footer-section fixed-bottom">
                <footer>


                    <a href="https://www.codewars.com/users/Chrisdocs">
                    <img className="footer-img" src={require('../../assets/img/codewars-icon.png').default}/>
                    </a>

                    <a href="https://github.com/Chrisdocs">
                    <img className="footer-img" src={require('../../assets/img/github-icon.png').default}/>
                    </a>

                    <a href="https://www.linkedin.com/in/christopher-wolfe-40762580/">
                    <img className="footer-img" src={require('../../assets/img/linkedin-icon.png').default}/>
                    </a>

                    <p className="footer-text col-12">designed and built by Christopher Wolfe <i className="fa fa-copyright" aria-hidden="true">©2021</i></p>

                </footer>
        </section>
    )
}

export default Footer;