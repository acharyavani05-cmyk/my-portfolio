/* =========================================================
   AVANI ACHARYA PORTFOLIO
   INTERACTIONS
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* =================================================
           MOBILE MENU
        ================================================= */

        const menuButton =
            document.querySelector(
                ".menu-button"
            );


        const mobileMenu =
            document.querySelector(
                ".mobile-menu"
            );


        if (
            menuButton &&
            mobileMenu
        ) {

            menuButton.addEventListener(
                "click",
                () => {

                    const isOpen =
                        mobileMenu.classList.toggle(
                            "active"
                        );


                    menuButton.classList.toggle(
                        "active",
                        isOpen
                    );


                    menuButton.setAttribute(
                        "aria-expanded",
                        String(isOpen)
                    );

                }
            );


            mobileMenu
                .querySelectorAll("a")
                .forEach(
                    link => {

                        link.addEventListener(
                            "click",
                            () => {

                                mobileMenu.classList.remove(
                                    "active"
                                );


                                menuButton.classList.remove(
                                    "active"
                                );


                                menuButton.setAttribute(
                                    "aria-expanded",
                                    "false"
                                );

                            }
                        );

                    }
                );

        }



        /* =================================================
           SCROLL REVEAL
        ================================================= */

        const revealItems =
            document.querySelectorAll(
                ".reveal"
            );


        const revealObserver =
            new IntersectionObserver(
                (
                    entries,
                    observer
                ) => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );


                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        revealItems.forEach(
            item =>
                revealObserver.observe(
                    item
                )
        );



        /* =================================================
           ACCORDION / PROJECT DROPDOWNS
        ================================================= */

        const accordions =
            document.querySelectorAll(
                ".accordion"
            );


        accordions.forEach(
            accordion => {

                const trigger =
                    accordion.querySelector(
                        ".accordion-trigger"
                    );


                if (!trigger) {
                    return;
                }


                trigger.setAttribute(
                    "aria-expanded",
                    "false"
                );


                trigger.addEventListener(
                    "click",
                    () => {

                        const wasOpen =
                            accordion.classList.contains(
                                "open"
                            );


                        const parent =
                            accordion.parentElement;


                        /*
                           Close every other dropdown
                           in the same group.
                        */

                        parent
                            .querySelectorAll(
                                ":scope > .accordion"
                            )
                            .forEach(
                                other => {

                                    if (
                                        other !== accordion
                                    ) {

                                        other.classList.remove(
                                            "open"
                                        );


                                        const otherTrigger =
                                            other.querySelector(
                                                ".accordion-trigger"
                                            );


                                        if (
                                            otherTrigger
                                        ) {

                                            otherTrigger.setAttribute(
                                                "aria-expanded",
                                                "false"
                                            );

                                        }

                                    }

                                }
                            );


                        /*
                           Toggle current dropdown.
                        */

                        accordion.classList.toggle(
                            "open",
                            !wasOpen
                        );


                        trigger.setAttribute(
                            "aria-expanded",
                            String(!wasOpen)
                        );

                    }
                );


                /*
                   Keyboard support.
                */

                trigger.addEventListener(
                    "keydown",
                    event => {

                        if (
                            event.key === "Enter" ||
                            event.key === " "
                        ) {

                            event.preventDefault();

                            trigger.click();

                        }

                    }
                );

            }
        );



        /* =================================================
           ACTIVE NAVIGATION
        ================================================= */

        const sections =
            document.querySelectorAll(
                "main section[id]"
            );


        const navLinks =
            document.querySelectorAll(
                ".desktop-nav .nav-link"
            );


        const navObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                !entry.isIntersecting
                            ) {

                                return;

                            }


                            navLinks.forEach(
                                link => {

                                    link.classList.toggle(
                                        "active",
                                        link.getAttribute(
                                            "href"
                                        ) ===
                                        `#${entry.target.id}`
                                    );

                                }
                            );

                        }
                    );

                },
                {
                    rootMargin:
                        "-30% 0px -60% 0px"
                }
            );


        sections.forEach(
            section =>
                navObserver.observe(
                    section
                )
        );



        /* =================================================
           BACK TO TOP
        ================================================= */

        const backTop =
            document.querySelector(
                ".back-top"
            );


        if (backTop) {

            window.addEventListener(
                "scroll",
                () => {

                    backTop.classList.toggle(
                        "visible",
                        window.scrollY > 500
                    );

                },
                {
                    passive: true
                }
            );


            backTop.addEventListener(
                "click",
                () => {

                    window.scrollTo(
                        {
                            top: 0,
                            behavior: "smooth"
                        }
                    );

                }
            );

        }



        /* =================================================
           PROFILE PHOTO PARALLAX
        ================================================= */

        const photo =
            document.querySelector(
                ".photo-wrapper"
            );


        if (
            photo &&
            window.innerWidth > 1000 &&
            !window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches
        ) {

            window.addEventListener(
                "mousemove",
                event => {

                    const x =
                        (
                            window.innerWidth / 2 -
                            event.clientX
                        ) / 130;


                    const y =
                        (
                            window.innerHeight / 2 -
                            event.clientY
                        ) / 130;


                    photo.style.transform =
                        `translate3d(${x}px, ${y}px, 0)`;

                },
                {
                    passive: true
                }
            );

        }



        /* =================================================
           HOBBY INTERACTION
        ================================================= */

        const hobbyCards =
            document.querySelectorAll(
                ".hobby-card"
            );


        hobbyCards.forEach(
            card => {

                card.addEventListener(
                    "click",
                    () => {

                        const hobby =
                            card.querySelector(
                                "strong"
                            )?.textContent;


                        if (hobby) {

                            showToast(
                                `${hobby} selected`
                            );

                        }

                    }
                );

            }
        );



        /* =================================================
           PROJECT INTERACTION
        ================================================= */

        const projectCards =
            document.querySelectorAll(
                ".project"
            );


        projectCards.forEach(
            project => {

                project.addEventListener(
                    "mouseenter",
                    () => {

                        project.classList.add(
                            "project-hover"
                        );

                    }
                );


                project.addEventListener(
                    "mouseleave",
                    () => {

                        project.classList.remove(
                            "project-hover"
                        );

                    }
                );

            }
        );



        /* =================================================
           LOGO SECRET INTERACTION
        ================================================= */

        const logo =
            document.getElementById(
                "logo"
            );


        let logoClicks = 0;

        let logoTimer;


        if (logo) {

            logo.addEventListener(
                "click",
                event => {

                    logoClicks++;


                    clearTimeout(
                        logoTimer
                    );


                    logoTimer =
                        setTimeout(
                            () => {

                                logoClicks = 0;

                            },
                            1200
                        );


                    if (
                        logoClicks === 5
                    ) {

                        event.preventDefault();


                        showToast(
                            "You found a tiny portfolio secret."
                        );


                        logoClicks = 0;

                    }

                }
            );

        }



        /* =================================================
           CURRENT YEAR
        ================================================= */

        const year =
            document.getElementById(
                "year"
            );


        if (year) {

            year.textContent =
                new Date().getFullYear();

        }



        /* =================================================
           SMOOTH NAVIGATION
        ================================================= */

        document
            .querySelectorAll(
                'a[href^="#"]'
            )
            .forEach(
                link => {

                    link.addEventListener(
                        "click",
                        event => {

                            const targetId =
                                link.getAttribute(
                                    "href"
                                );


                            if (
                                !targetId ||
                                targetId === "#"
                            ) {

                                return;

                            }


                            const target =
                                document.querySelector(
                                    targetId
                                );


                            if (target) {

                                event.preventDefault();


                                const header =
                                    document.querySelector(
                                        ".header"
                                    );


                                const headerHeight =
                                    header
                                        ? header.offsetHeight
                                        : 0;


                                const top =
                                    target
                                        .getBoundingClientRect()
                                        .top +
                                    window.scrollY -
                                    headerHeight;


                                window.scrollTo(
                                    {
                                        top,
                                        behavior: "smooth"
                                    }
                                );

                            }

                        }
                    );

                }
            );



        /* =================================================
           ESCAPE KEY
        ================================================= */

        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Escape"
                ) {

                    if (mobileMenu) {

                        mobileMenu.classList.remove(
                            "active"
                        );

                    }


                    if (menuButton) {

                        menuButton.classList.remove(
                            "active"
                        );


                        menuButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

                }

            }
        );



        /* =================================================
           TOAST
        ================================================= */

        function showToast(
            message
        ) {

            const toast =
                document.getElementById(
                    "toast"
                );


            if (!toast) {

                return;

            }


            toast.textContent =
                message;


            toast.classList.add(
                "show"
            );


            clearTimeout(
                window.toastTimer
            );


            window.toastTimer =
                setTimeout(
                    () => {

                        toast.classList.remove(
                            "show"
                        );

                    },
                    1800
                );

        }



        /* =================================================
           RESIZE HANDLING
        ================================================= */

        window.addEventListener(
            "resize",
            () => {

                if (
                    window.innerWidth > 1050
                ) {

                    if (mobileMenu) {

                        mobileMenu.classList.remove(
                            "active"
                        );

                    }


                    if (menuButton) {

                        menuButton.classList.remove(
                            "active"
                        );


                        menuButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

                }

            }
        );

    }
);