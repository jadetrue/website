import React from "react";
import SocialIcons from "./SocialIcons";

const Footer = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <div>
                    <h3 className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-xl font-bold text-transparent">
                        Say hi!
                    </h3>
                </div>
                <SocialIcons type="footer" />
            </div>
            <div className="flex justify-center pb-8">
                <p className="text-md">
                    Jade True © {new Date().getUTCFullYear()}
                </p>
            </div>
        </div>
    );
};

export default Footer;
