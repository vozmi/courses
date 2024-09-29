import {SignIn} from "@/features/sign-in";

export default function Home() {
  return (
    <div>
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 32px",
        borderBottom: "1px solid #eee"
      }}>
        <h1>Firebase Learning App</h1>
        <SignIn/>
      </header>
    </div>
  );
}
