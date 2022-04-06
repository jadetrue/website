import Naivgation from "./Navigation";
import Footer from "./Footer";

const Layout: React.FC = ({children}) => {
    return (
        <>
            <div className="min-h-screen md:min-h-full">
                <Naivgation />
                <main className="flex flex-col justify-center text-center m-auto max-w-6xl py-8">
                    {children}
                </main>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
