"use client";

import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useSearchParams, useRouter } from "next/navigation";

const LogIn = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [progress, setProgress] = useState("");

  const { isLoaded, signIn, setActive } = useSignIn();

  async function logIn(e) {
    setLogin(true);
    e.preventDefault();
    setProgress("");
    if (username === "") {
      setProgress("blankUsername");
      setLogin(false);
    } else {
      await signIn
        .create({
          identifier: username,
          password,
        })
        .then(async (result) => {
          if (result.status === "complete") {
            setActive({
              session: result.createdSessionId,
              beforeEmit: () => {
                if (searchParams.get("redirect_url"))
                  router.push(searchParams.get("redirect_url"));
                else router.push("/");
              },
            });
          }
        })
        .catch((err) => {
          if (username === "") {
            setProgress("blankUsername");
            setLogin(false);
          } else {
            setProgress(err.errors[0].message);
            setLogin(false);
          }
        });
    }
  }

  return (
    <div className="flex flex-col p-[20px] gap-[20px] w-full h-full items-center justify-center">
      <div
        id="login"
        className="w-64 h-80 bg-indigo-50 rounded shadow flex flex-col justify-between p-3"
      >
        <h2 className="text-center text-black">SCEI</h2>
        <form className="text-indigo-500" onSubmit={logIn}>
          <fieldset className="border-4 border-dotted border-indigo-500 p-5">
            <legend className="px-2 italic -mx-2">Welcome back! </legend>
            <div className="flex flex-col gap-2">
              <label
                className="text-xs font-bold after:content-['*'] after:text-red-400"
                htmlFor="username"
              >
                Tên đăng nhập
              </label>
              <input
                id="username"
                autoComplete="off"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Nhập tên đăng nhập"
              />
              {progress === "blankUsername" && (
                <p className="text-red-500 text-sm">
                  Vui lòng nhập tên đăng nhập!
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-xs font-bold after:content-['*'] after:text-red-400"
                htmlFor="password"
              >
                Mật khẩu
              </label>
              <input
                id="password"
                autoComplete="off"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Nhập mật khẩu"
              />
              {progress === "Enter password." && username !== "" && (
                <p className="text-red-500 text-sm">Vui lòng nhập mật khẩu!</p>
              )}
            </div>
            <div>
              {!isLoaded || login ? (
                <button>
                  <span className="loading loading-spinner loading-sm bg-primary"></span>
                </button>
              ) : (
                <button className="w-full rounded bg-indigo-500 text-indigo-50 p-2 text-center font-bold hover:bg-indigo-400">
                  Đăng nhập
                </button>
              )}
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
