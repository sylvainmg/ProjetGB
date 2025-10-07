import { faker } from "@faker-js/faker";
import React, { useState } from "react";

const initialDatas = Array.from({ length: 500 }, () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
}));

function Clients() {
  const [datas, setDatas] = useState(initialDatas);

  const [search, setSearch] = useState("");
  const [searchOptions, setSearchOptions] = useState("name");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (search === "") setDatas(initialDatas);
    setSearch(e.target.value);
    setDatas(
      initialDatas.filter((data) =>
        searchOptions === "name"
          ? data.name.toLowerCase().includes(e.target.value.toLowerCase())
          : searchOptions === "id"
            ? data.id.toLowerCase().includes(e.target.value.toLowerCase())
            : data.email.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <React.Fragment>
      <div className="mb-3 flex flex-row items-center gap-3">
        <div className="text-white">Rechercher par</div>
        <select
          className="text-white bg-gray-800 outline-none p-2.5"
          value={searchOptions}
          onChange={(e) => setSearchOptions(e.target.value)}
        >
          <option value="name">Nom</option>
          <option value="id">UUID</option>
          <option value="email">E-mail</option>
        </select>
      </div>
      <input
        type="text"
        className="mb-3 text-white p-1 border-2 rounded-lg border-white placeholder:italic focus:border-emerald-400 outline-none"
        placeholder="Rechercher un client..."
        value={search}
        onChange={handleChange}
      />
      <div className="grid grid-cols-3 text-white font-bold mb-7 border-b-2 p-4 bg-gray-400/10 rounded-t-xl">
        <div className="col-span-1 text-center">UUID</div>
        <div className="col-span-1 text-center">Nom</div>
        <div className="col-span-1 text-center">E-mail</div>
      </div>
      <div className="text-white">
        {datas.length} {datas.length > 1 ? "Résultats" : "Résultat"}
      </div>
      <div className="text-white overflow-auto h-[65vh] scrollbar-custom">
        {datas[0] ? (
          datas.map((data) => (
            <div
              className="col-span-3 grid grid-cols-3 gap-12 hover:bg-blue-400/20 transition-colors duration-300 py-5"
              key={data.id}
            >
              <div className="col-span-1">{data.id}</div>
              <div className="col-span-1">{data.name}</div>
              <div className="col-span-1">{data.email}</div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center">Aucun résultat.</div>
        )}
      </div>
    </React.Fragment>
  );
}

export default Clients;
