import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export const BackToTop = () => {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true);
            } else {
                setBackToTopButton(false);
            }
        });

        return () => {
            window.removeEventListener("scroll", () => {});
        };
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="AppBut">
            {backToTopButton && (
                <button className="buttonBack2Top" onClick={scrollUp}>
                    <FontAwesomeIcon icon={faArrowUp} />
                </button>
            )}
        </div>
    );
};
