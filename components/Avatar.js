import Image from "next/image";
import { useMoralis } from "react-moralis";

function Avatar({ username, logoutOnPress }) {
    const { user, logout } = useMoralis();
    return (
        <Image
        className="transition duration-500 ease-in-out rounded-full cursor-pointer hover:opacity-75 transform hover:scale-110 hover:-translate-y-1"
            src={`http://avatars.dicebear.com/api/pixel-art/${
                username || user.get("username")
            }.svg`}
            onClick={() => logoutOnPress && logout()}
            layout="fill"
        />
    );
}

export default Avatar;
