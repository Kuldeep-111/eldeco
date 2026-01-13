import AnimationProvider from "@/components/website/AnimationProvider";
import Footer from "@/components/website/common/footer/Footer";
import TopFooter from "@/components/website/common/footer/TopFooter";
import Header from "@/components/website/common/header/Header";
import SmoothScroller from "@/components/website/common/SmoothScroller";
import PageTransition from "@/components/website/transition/PageTransition";
import { TransitionProvider } from "@/components/website/transition/TransitionContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
     <TransitionProvider>
    <Header/>
    <PageTransition />
    <div id="fixed-components"></div>
    <SmoothScroller>
      <AnimationProvider>
      <div className="final relative bg-white">
      {children}
      </div>
      <TopFooter/>
      <div className="trigger-footer h-px w-full"/>
      </AnimationProvider>
    </SmoothScroller>
    <Footer/>
    </TransitionProvider>
  );
};

export default Layout;
