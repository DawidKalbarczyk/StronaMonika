import React from 'react';
function AdminInfo() {
    return(
        <footer className="footer bg-colour">
            <div className="footer-content">
                <span>Administrator strony: <a href="mailto:k_kalbarczyk@o2.pl">k_kalbarczyk@o2.pl</a></span>
                <span className="separator">|</span>
                <span>Strona o charakterze informacyjnym</span>
                <span className="separator">|</span>
                <span>Wszelkie prawa zastrzeżone</span>
                <span className="separator">|</span>
                <span>© 2025 Dawid Kalbarczyk</span>
            </div>
        </footer>
    );
}
export default AdminInfo;