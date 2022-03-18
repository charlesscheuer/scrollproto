import * as React from "react";
// import "./styles.css";
import lottie from "lottie-web";
import animationData from "./gmail.json";
// import animationData from "./emailios.json";
const LottieControl = () => {
  const lottieRef = React.useRef<HTMLDivElement>(null);
  // comitt

  React.useEffect(() => {
    var animDuration = 500;
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
      // console.log(frame, "was frame")
      if (frame < 0) {
        anim.goToAndStop(1, true);
      } else if (frame > maxFrames) {
        anim.goToAndStop(maxFrames, true);
      } else {
        anim.goToAndStop(frame, true);
      }

      
    }
    const onScroll = () => {
      animatebodymovin(animDuration);
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      anim.destroy();
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <div style={{ width: "100%", height: "auto",  }} ref={lottieRef}></div>;
};

export default LottieControl;
