import React from "react";

export default class Form extends React.Component {

  render() {
    const {handleChange, form, onSubmit} = this.props
    return (
      <div className="flex justify-center items-center mt-5">
        <form className="w-1/4" onSubmit={onSubmit} method="POST">
          <div className="my-5">
            <h1 className="text-center text-lg font-bold text-red-800">
              Formulario
            </h1>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Nombre
            </label>
            <input
              type="text"
              placeholder="Digite su nombre"
              name="name"
              className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              onChange={handleChange}
              value={form.name}
            />
          </div>
          <div className="my-5">
            <label
              htmlFor="descri"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Descripción
            </label>
            <input
              type="text"
              placeholder="Digite una descripción"
              name="descri"
              className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              onChange={handleChange}
              value={form.descri}
            />
          </div>
          <div className="my-5">
            <label
              htmlFor="img"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Imagen
            </label>
            <input
              type="text"
              placeholder="Digite una descripción"
              name="img"
              className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              onChange={handleChange}
              value={form.img}
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              className="bg-red-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    );
  }
}
