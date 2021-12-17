import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
    const { user } = useMoralis();
    return (
        <div>
            <div className="text-pink-500">
                <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid ">
                    <Image
                        src="/static/images/login-logo.jpeg"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                    />
                </div>

                <div>
                    <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-4 rounded-full">
                        <Avatar logoutOnPress />
                    </div>

                    <h1 className="text-3xl">WELCOME TO THE METAVERSE</h1>

                    <h2 className="text-5-xl font-bold truncate">{user.getUsername()}</h2>

                    <ChangeUsername />
                </div>
            </div>
        </div>
    );
}

export default Header;
