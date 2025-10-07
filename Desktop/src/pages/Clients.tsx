import React, { useEffect, useState } from "react";
import type { ClientsProps } from "../utils/Interfaces";
import { rootUrl } from "../utils/Routes";

function Clients() {
  const [datas, setDatas] = useState<ClientsProps[]>([]);
  const [initialDatas, setInitialDatas] = useState<ClientsProps[]>([]);

  const [search, setSearch] = useState("");
  const [searchOptions, setSearchOptions] = useState("id");

  useEffect(() => {
    (async () => {
      const response = await fetch(rootUrl);
      const data = (await response.json()) as ClientsProps[];
      setInitialDatas(data);
      setDatas(data);
    })();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setDatas(initialDatas);
      setSearch("");
      return;
    }

    setSearch(e.target.value);
    setDatas(() =>
      initialDatas.filter((data) =>
        searchOptions === "nom"
          ? data.nom.toLowerCase().includes(e.target.value.toLowerCase())
          : searchOptions === "prenom"
            ? data.prenom.toLowerCase().includes(e.target.value.toLowerCase())
            : searchOptions === "id"
              ? data.id_client === Number(e.target.value)
              : searchOptions === "adresse"
                ? data.adresse
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
                : data.contact
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
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
          <option value="id">Identifiant</option>
          <option value="nom">Nom</option>
          <option value="prenom">Prénoms</option>
          <option value="contact">Contact</option>
          <option value="adresse">Adresse</option>
        </select>
      </div>
      <input
        type="text"
        className="mb-3 text-white p-1 border-2 rounded-lg border-white placeholder:italic focus:border-emerald-400 outline-none"
        placeholder="Rechercher un client..."
        value={search}
        onChange={handleChange}
      />
      <div className="grid grid-cols-5 gap-12 text-white font-bold mb-7 border-b-2 p-4 bg-gray-400/10 rounded-t-xl">
        <div className="col-span-1 text-center">Identifiant</div>
        <div className="col-span-2 text-center">Nom et prénoms</div>
        <div className="col-span-1 text-center">Adresse</div>
        <div className="col-span-1 text-center">Contact</div>
      </div>

      <div className="text-white overflow-auto h-[50vh] scrollbar-custom">
        {datas[0] ? (
          datas.map((data) => (
            <div
              className="grid grid-cols-5 gap-12 hover:bg-blue-400/20 transition-colors duration-300 py-5"
              key={data.id_client}
            >
              <div className="col-span-1 text-center">{data.id_client}</div>
              <div className="col-span-2 text-center">
                {data.nom} {data.prenom}
              </div>
              <div className="col-span-1 text-center">{data.adresse}</div>
              <div className="col-span-1 text-center">{data.contact}</div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center">Aucun résultat.</div>
        )}
      </div>
      <div className="text-white text-center bg-gray-100/10">
        {datas.length > 0 ? `${datas.length} ` : ""}
        {datas.length > 1 ? "Résultats" : datas.length === 1 ? "Résultat" : ""}
      </div>
    </React.Fragment>
  );
}

export default Clients;
