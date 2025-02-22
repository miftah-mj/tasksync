const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
            <aside>
                <p>
                    Copyright &copy; {new Date().getFullYear()} - All right
                    reservedby QuizTime
                </p>
            </aside>
        </footer>
    );
};

export default Footer;
