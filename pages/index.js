import Head from "next/head";
import { useMoralis } from "react-moralis";
import Login from "../components/Login";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis()

    if (!isAuthenticated) return <Login />;
    return (
        <div className="h-screen">
            <Head>
                <title>Metaverse Chat App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Welcome to the app</h1>
            <button onClick={logout} className="border-solid border-2 border-black p-1 rounded-lg">Logout</button>
        </div>
    );
}
