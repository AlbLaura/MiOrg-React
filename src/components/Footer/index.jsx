import "./Footer.css";

const Footer = () => {
    return <footer className="footer" style={{backgroundImage: "url(/assets/footer.png)"}}>
        <div className="redes">
            <a href="https://www.facebook.com/laura.s.albornoz.3/">
                <img src="/assets/facebook.png" alt="facebook"/>
            </a>
            <a href="https://twitter.com/Alb_Laura_">
                <img src="/assets/twitter.png" alt="twitter"/>
            </a>
            <a href="https://www.instagram.com/alb_laura_/">
                <img src="/assets/instagram.png" alt="instagram"/>
            </a>
        </div>
        <img src="/assets/Logo.png" alt="org"/>
        <strong>Desarrollado por Alura</strong>
    </footer>
};

export default Footer;