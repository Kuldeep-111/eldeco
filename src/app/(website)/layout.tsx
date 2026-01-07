import AnimationProvider from "@/components/website/AnimationProvider";
import Footer from "@/components/website/common/footer/Footer";
import Header from "@/components/website/common/header/Header";
import SmoothScroller from "@/components/website/common/SmoothScroller";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Header/>
    <SmoothScroller>
      <AnimationProvider>
      <div className="relative bg-white">
      {children}
      </div>
      </AnimationProvider>
    </SmoothScroller>
    <Footer/>
    </>
  );
};

export default Layout;
