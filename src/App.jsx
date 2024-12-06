import { GithubIcon } from "lucide-react";
import { supabase } from "./lib/helper/supabaseClient";

export default function App() {
  const login = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };
  return (
    <>
      <main className="flex justify-center items-center text-center bg-gray-900 w-screen h-screen">
        <section>
          <div className="font-bold text-4xl mb-4">
            Basic Supabase Authentication
          </div>

          <p className="text-xs text-neutral-500 mb-4">Sign in with</p>

          <div>
            <button
              onClick={login}
              className="px-4 py-1 rounded-lg bg-slate-950 hover:border-slate-500 transition ease-in duration-300"
            >
              <GithubIcon size={24} className="inline-block mr-2" />
              Github
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
