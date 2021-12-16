import Image from "next/image";

function Login() {
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
                <button className="bg-blue-500 rounded-lg p-5 font-bold animate-pulse border-solid border-2 text-white">
                    Login to the METAVERSE
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
