// import Naivgation from "./Navigation";
import Footer from "./Footer";

const Layout: React.FC = ({children}) => {
    return (
        <>
            <div className="min-h-screen p-5 selection:bg-cyan-500 selection:text-white md:min-h-full">
                {/* <Naivgation /> */}
                <main className="m-auto flex max-w-6xl flex-col justify-center py-8 text-center">
                    {children}
                </main>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
