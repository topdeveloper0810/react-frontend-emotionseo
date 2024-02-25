import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
// import { useSelector, dispatch } from "../../../store";

// Set component module.
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
// import { checkUser } from "../../../store/reducers/memberinfo";
// import { LOGIN } from "../../../store/reducers/auth";
import { Toast } from "flowbite-react";

const AuthLogin = () => {
  // const auth = useSelector((state) => state.memberinfo)

  const navigate = useNavigate();

  // Hide and show password.
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const loginInfo = {
    username,
    password,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "") {
      showToast("Set yourself free."); // Show toast message
      return;
    }

    axios
      .post("http://138.201.123.93:8000/user/login/", loginInfo)
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          const access = res.data.tokens.access;
          localStorage.setItem("token", access);
          localStorage.setItem("access", access);
          navigate("/generateArticle");
          localStorage.setItem("isLogined", true);
        }
      })
      .catch((err) => {
        console.error(err);
        showToast("Check your information."); // Show toast message
      });
  };

  const showToast = (message) => {
    // Render the Toast component directly in the JSX
    return (
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
          {/* Add your custom content here */}
        </div>
        <div className="ml-3 text-sm font-normal">{message}</div>
        <Toast.Toggle />
      </Toast>
    );
  };

  return (
    <>
      <div className="w-[30rem] backdrop-blur-sm bg-black/30 p-14 rounded-3xl ">
        <img
          src="./loginLogo.png"
          alt="Emotion AI logo"
          className="h-[28vh] bg-gray-50 w-full rounded-5"
        />
        <p className="text-white text-center font-bold text-2xl pt-6 pb-1">
          Iniciar sesión en tu cuenta
        </p>
        <div class="relative z-0 w-full mb-3 group">
          <input
            type="text"
            name="floating_email"
            id="floating_email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            class="block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Correo
          </label>
        </div>
        <div class="relative z-0 w-full flex mb-3 group">
          <input
            type={type}
            name="floating_password"
            id="floating_password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            class="block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <span class="flex justify-center items-center" onClick={handleToggle}>
            <Icon
              class="absolute right-0 top- text-white"
              icon={icon}
              size={15}
            />
          </span>
          <label
            for="floating_password"
            class="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Contraseña
          </label>
        </div>
        <div class="flex items-center mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-checkbox"
            class="ms-2 text-lg font-medium text-gray-300 dark:text-gray-300"
          >
            Mantener sesión activa
          </label>
        </div>
        <div class="flex items-center mb-4">
          <label
            for="default-checkbox"
            class="ms-2 text-md font-medium text-gray-300 dark:text-gray-300"
          >
            ¿Has olvidado tu contraseña?&nbsp;
          </label>
          <Link className="text-blue-300 text-md" to="/forgot-password">
            Clic aquí
          </Link>
        </div>
        <div className="mb-4">
          <button
            className="bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white w-full hover:bg-gradient-to-r hover:from-fuchsia-700 hover:to-purple-700 text-[1.3rem] h-[3.5rem] rounded-2xl font-bold "
            onClick={handleSubmit}
          >
            Iniciar sesión
          </button>
        </div>
        <div className="mb-4">
          <button className="flex items-center justify-center bg-red-500 text-white w-full hover:bg-red-700 hover:text-white text-[1.3rem] h-[3.5rem] rounded-2xl font-bold ">
            <GoogleIcon sx={{ scale: "1.5" }} />
            &nbsp; Iniciar sesión con Google
          </button>
        </div>
        <div class="flex items-center">
          <label
            for="default-checkbox"
            class="ms-2 text-md font-medium text-gray-300 dark:text-gray-300"
          >
            ¿Todavía no tienes una cuenta?&nbsp;
          </label>
          <Link className="text-blue-300 text-md" to="/register">
            Regístrate aquí
          </Link>
        </div>
      </div>
    </>
  );
};

export default AuthLogin;
