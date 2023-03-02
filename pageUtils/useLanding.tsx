import { useState, useRef, useEffect } from "react";
import Smooth from "smooth-scrolling"






export default function () {
    const [auth, setAuth] = useState<null | string>(null)
    const animationDurations = 1000

    useEffect(() => {
        const observers: IntersectionObserver[] = [];


        setHeroObserver()
        setServicesObserver()
        setMissionsObserver()


        function setHeroObserver() {
            const heroSection = document.getElementById("heroSection")
            const options: IntersectionObserverInit = {
                threshold: getThresholdArr(10)
            }
            const callback: IntersectionObserverCallback = (entries, observer) => {
                const scale = (2 - entries[0].intersectionRatio).toFixed(2)
                const heroBg = document.getElementById("backgroundImage")
                if (!heroBg) return
                heroBg.style.transform = `scale(${scale})`
            }
            let heroObserver = new IntersectionObserver(callback, options)
            observers.push(heroObserver)

            if (heroSection) heroObserver.observe(heroSection)

        }
        function setServicesObserver() {
            const servicesSection = document.getElementById("services")
            let ranCallback = false
            if (!servicesSection) return
            const options: IntersectionObserverInit = {
                rootMargin: "0% 0% -40% 0%",
                threshold: 0.0
            }
            const callback: IntersectionObserverCallback = (entries, observer) => {
                if (!entries[0].isIntersecting) return
                if (entries[0].boundingClientRect.y < 0) return
                if (ranCallback) return
                ranCallback = true
                const cards = document.querySelectorAll(".card")
                for (let i = 0; i < cards.length; i++) {
                    const card = cards[i];
                    const cardDelay = getDelay(card)
                    card.animate([
                        { opacity: "0", transform: "translateY(100%) scale(0.7)" },
                        { opacity: "1", transform: "translateY(0%) scale(1)" },
                    ], {
                        duration: animationDurations,
                        fill: "forwards",
                        easing: "ease-out",
                        delay: cardDelay
                    })
                }
                function getDelay(card: Element) {
                    const thisCard = card as unknown as { dataset: { delay: string } }
                    return parseInt(thisCard.dataset.delay)
                }
            }
            let servicesObserver = new IntersectionObserver(callback, options)
            observers.push(servicesObserver)
            if (servicesObserver) servicesObserver.observe(servicesSection)
        }
        function setMissionsObserver() {
            const missionSection = document.getElementById("mission")
            let ranCallback = false
            const options: IntersectionObserverInit = {
                rootMargin: "0% 0% -40% 0%",
                threshold: 0.0
            }
            const callback: IntersectionObserverCallback = (entries) => {
                if (!entries[0].isIntersecting) return
                if (entries[0].boundingClientRect.y < 0) return
                if (ranCallback) return
                ranCallback = true

                const points = document.querySelectorAll(".point")

                for (let i = 0; i < points.length; i++) {
                    const point = points[i];
                    point.animate([
                        { transform: "translate(-50% , 50px)", opacity: "0" },
                        { transform: "translate(0,0)", opacity: "1" }
                    ], {
                        duration: animationDurations,
                        fill: "forwards",
                        easing: "ease-out",
                        delay: getDelay(point)
                    })
                }
                function getDelay(point: Element) {
                    const thisCard = point as unknown as { dataset: { delay: string } }
                    return parseInt(thisCard.dataset.delay)
                }
            }
            const missionObserver = new IntersectionObserver(callback, options)
            observers.push(missionObserver)

            missionObserver.observe(missionSection)
        }


        function getThresholdArr(numSteps: number) {
            let thresholds = [];

            for (let i = 1.0; i <= numSteps; i++) {
                let ratio = i / numSteps;
                thresholds.push(ratio);
            }

            thresholds.push(0);
            return thresholds;
        }


        return () => {
            observers.forEach(observer => observer.disconnect())
        }

    }, [])

    return { auth, closeAuth, openSignUp, openLogIn, introduceHeroSection }

    function closeAuth() {
        setAuth(null)
    }
    function openSignUp() {
        setAuth("signUp")
    }
    function openLogIn() {
        setAuth("logIn")
    }
    function introduceHeroSection() {
        animateLogo()
        animateHeader()
        animateLead()
        animateCTA()
        animateBackground()
        make_page_scrollable_after_animations()

    }
    function animateLogo() {
        const logo = document.getElementById("logo")
        if (!logo) return
        logo.animate([
            { top: "-72px" },
            { top: "24px" }
        ], {
            duration: animationDurations,
            fill: "forwards",
            easing: "ease-in"
        })
    }
    function animateHeader() {
        const header = document.getElementById("header")
        if (!header) return
        header.animate([
            { opacity: "0", transform: "translateX(-100%)" },
            { opacity: "1", transform: "translateY(0%)" }
        ], {
            duration: animationDurations,
            fill: "forwards",
            easing: "linear"
        })
    }
    function animateLead() {
        const lead = document.getElementById("lead")
        if (!lead) return
        lead.animate([
            { opacity: "0", transform: "translateX(100%)" },
            { opacity: "1", transform: "translateY(0%)" }
        ], {
            duration: animationDurations,
            fill: "forwards",
            easing: "linear"
        })
    }
    function animateCTA() {
        const cta = document.getElementById("cta")
        if (!cta) return
        cta.animate([
            { opacity: "0", transform: "translateX(-100%)" },
            { opacity: "1", transform: "translateY(0%)" }
        ], {
            duration: animationDurations,
            fill: "forwards",
            easing: "linear"
        })
    }
    function animateBackground() {
        const bg = document.getElementById("backgroundImage")
        if (!bg) return
        bg.animate([
            { opacity: 0 },
            { opacity: 1 }
        ], {
            duration: animationDurations,
            fill: "forwards",
            delay: animationDurations
        })
    }
    function make_page_scrollable_after_animations() {
        const homepage = document.getElementById("homepage")
        if (!homepage) return
        setTimeout(() => {
            homepage.style.height = "fit-content"
        }, 2000);
    }
}