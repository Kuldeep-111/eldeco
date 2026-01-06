import Header from "@/components/website/common/header/Header";
import SmoothScroller from "@/components/website/common/SmoothScroller";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Header/>
    <SmoothScroller>
      {children}
    </SmoothScroller>
    </>
  );
};

export default Layout;
