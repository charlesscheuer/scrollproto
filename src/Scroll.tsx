import * as React from "react";
// import "./styles.css";
import lottie from "lottie-web";
import animationData from "./SCROLL.json";
const LottieControl = () => {
  const lottieRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    var animDuration = 2000;
    const anim = lottie.loadAnimation({
      container: lottieRef.current!,
      renderer: "svg",
      loop: false,
      autoplay: false,

      animationData
    });

    function animatebodymovin(duration: number) {
      const scrollPosition = window.scrollY;
      const maxFrames = anim.totalFrames;

      const frame = (maxFrames / 100) * (scrollPosition / (duration / 100));
      console.log(frame, "was frame")
      if (frame < 0) {
        anim.goToAndStop(1, true);
      } else {
        anim.goToAndStop(frame, true);
      }

      
    }
    const onScroll = () => {
      console.log("Scrolling");
      animatebodymovin(animDuration);
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      anim.destroy();
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <div style={{ position: "fixed", width: "100%", height: "auto" }} ref={lottieRef}></div>;
};

export default LottieControl;
