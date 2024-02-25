import React from "react";
import {useNavigate} from "react-router-dom"

// Import page part.

const buttonProps = [
  { color: "#18e756", buttonName: "Comprar plan", path: "#" },
  { color: "#e78618", buttonName: "Editar forma de pago", path: "#" },
  { color: "#e73018", buttonName: "Cancelar suscripción", path: "#" },
  { color: "#e7d918", buttonName: "Historial de facturas", path: "#" },
];

const Profile = () => {

    const navigate = useNavigate();

  return (
    <div className="w-[70vw] min-h-[100vh] mt-16 flex flex-col gap-6 justify-center items-center">
      <div className="flex flex-col lg:flex-row w-full justify-between gap-6">
        <div className=" w-full lg:w-[27rem] min-h-[12rem] rounded-[1rem] p-7 bg-slate-900 ">
          <a href="#" className="flex flex-col justify-center gap-4">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-white">
              Palabras generadas
            </h5>
            <div class="w-full rounded-full h-2.5 bg-gray-700">
              <div
                class="bg-blue-600 h-2.5 rounded-full"
                style={{ width: "45%" }}
              ></div>
              <div className="flex flex-row justify-between text-white">
                <p>4.404</p>
                <p>20.000</p>
              </div>
            </div>
          </a>
        </div>
        <div className=" w-full lg:w-[27rem] min-h-[12rem] rounded-[1rem] p-7 bg-slate-900">
          <a href="#" className="flex flex-col justify-center gap-4">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-white">
              Palabras generadas
            </h5>
            <div class="w-full rounded-full h-2.5 bg-gray-700">
              <div
                class="bg-blue-600 h-2.5 rounded-full"
                style={{ width: "45%" }}
              ></div>
              <div className="flex flex-row justify-between text-white">
                <p>4.404</p>
                <p>20.000</p>
              </div>
            </div>
          </a>
        </div>
        <div className=" w-full lg:w-[27rem] min-h-[12rem] rounded-[1rem] p-7 bg-slate-900">
          <a href="#" className="flex flex-col justify-center gap-4">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-white">
              Palabras generadas
            </h5>
            <div class="w-full rounded-full h-2.5 bg-gray-700">
              <div
                class="bg-blue-600 h-2.5 rounded-full"
                style={{ width: "45%" }}
              ></div>
              <div className="flex flex-row justify-between text-white">
                <p>4.404</p>
                <p>20.000</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-6 w-full min-h-[20rem] rounded-[1rem] p-4 sm:p-10 bg-slate-900">
        <h1 className="text-white text-[2rem] text-center sm:text-left">Información personal</h1>
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-6">
          <img
            src="/avatar/avatar4.jpg"
            alt="avatar"
            className="w-[5rem] h-[5rem] rounded-[2.5rem]"
          />
          <div className="flex flex-col lg:flex-row float-right w-full gap-5">
            <div className="w-full flex flex-col">
              <label htmlFor="titleEnter" className="text-white font-mono">
                Nombre
              </label>
              <input
                type="text"
                name="titleEnter"
                placeholder="Enter article title"
                className="rounded-lg"
              />
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="titleEnter" className="text-white font-mono">
                Apellido
              </label>
              <input
                type="text"
                name="titleEnter"
                placeholder="Enter article title"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <button
          type="button"
          class="text-white font-mono bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center w-full lg:max-w-[15rem]"
        >
          Guardar cambios
        </button>
      </div>
      <div className="flex flex-col justify-center gap-6 w-full min-h-[20rem] rounded-[1rem] p-4 sm:p-10 bg-slate-900 text-center sm:text-left">
        <h1 className="text-white text-[2rem]">Suscripción cancelada</h1>
        <p className="text-slate-300">
          20.000 palabras con el plan <b className="text-white">Premium</b>
        </p>
        <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-3">
          {buttonProps.map((items) => (
            <button
              type="button"
              class="text-white hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              style={{ backgroundColor: `${items.color}` }}
              onClick={() => {navigate(`${items.path}`, { state: {data: ''} }); }}
            >
              {items.buttonName}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
