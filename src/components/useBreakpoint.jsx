import { useEffect, useState } from "react";

const useBreakpoint = () => {
    const [breakpoint, setBreakpoint] = useState("lg");

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth < 768) setBreakpoint("sm");
        else if (window.innerWidth < 1024) setBreakpoint("md");
        else setBreakpoint("lg");
        };

        handleResize(); // initial run
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return breakpoint;
};

export default useBreakpoint;