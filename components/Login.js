import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
    const { authenticate } = useMoralis();

    return (
        <div className="bg-black relative">
            <h1>I am the login screen</h1>
            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
                <Image
                    className="object-cover rounded-full"
                    src="/static/images/login-logo.jpeg"
                    height={200}
                    width={200}
                />
                <button
                    onClick={authenticate}
                    className="bg-blue-500 hover:bg-blue-400 rounded-lg px-4 py-2 font-bold animate-pulse border-solid border-2 text-white inline-flex items-center space-x-2"
                >
                    <Image
                        src="/static/icons/metamask-icon.png"
                        height={30}
                        width={30}
                    />
                    <span>LOGIN WITH METAMASK</span>
                </button>
            </div>

            <div className="w-full h-screen">
                <Image
                    src="https://links.papareact.com/55n"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    );
}

export default Login;
