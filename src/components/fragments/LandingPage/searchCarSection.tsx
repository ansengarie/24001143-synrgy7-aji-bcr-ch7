import { useContext, useEffect, useState } from "react";
import { CarsContext } from "../../../context/carsProvider";
import feather from "feather-icons";

const SearchCarSection: React.FC = () => {
  const { carsPublic, searchCars } = useContext(CarsContext)!;
  const [typeDrive, setTypeDrive] = useState("");
  const [passenger, setPasenger] = useState(0);
  const [capacity, setCapacity] = useState("");
  const [avaliableAt, setAvaliableAt] = useState("");
  const [pickupTime, setPickupTime] = useState("");

  const handleAvaliableAt = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setAvaliableAt(event.target.value);
  };

  const handlePickupTime = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setPickupTime(event.target.value);
  };

  const handleTypeDrive = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTypeDrive = event.target.value;
    setTypeDrive(selectedTypeDrive);
    if (selectedTypeDrive === "dengan-sopir") {
      setPasenger(1);
    } else {
      setPasenger(0);
    }
  };

  const handleCapacity = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setCapacity(event.target.value);
  };

  const handleSubmit = async () => {
    const totalCapacity = (passenger + (parseInt(capacity) || 0)).toString();
    searchCars(totalCapacity, avaliableAt, pickupTime);
  };

  useEffect(() => {
    feather.replace();
  }, [searchCars, carsPublic]);

  return (
    <>
      <section id="search-car" className="relative mb-96 lg:mb-20">
        <div className="absolute top-0 left-0 right-0 px-6 mx-auto mt-[-10px] lg:w-[1047px] lg:px-0">
          <div className="flex flex-col p-6 bg-white rounded-lg shadow-md lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-4 lg:mb-0">
              <p className="mb-2 text-sm font-light">Tipe Driver</p>
              <select
                id="typeDrive"
                name="typeDrive"
                value={typeDrive}
                onChange={handleTypeDrive}
                className="w-full h-10 px-2 border border-gray-300 rounded-sm text-neutral-03 md:w-52"
              >
                <option value="" selected>
                  Pilih Tipe Driver
                </option>
                <option value="dengan-sopir">Dengan Sopir</option>
                <option value="tanpa-sopir">Tanpa Sopir (Lepas Kunci)</option>
              </select>
            </div>
            <div className="mb-4 lg:mb-0">
              <p className="mb-2 text-sm font-light">Tanggal</p>
              <input
                type="date"
                id="date"
                name="date"
                value={avaliableAt}
                onChange={handleAvaliableAt}
                className="w-full px-2 border border-gray-300 rounded-sm text-neutral-03 md:w-52 h-9"
              />
            </div>
            <div className="mb-4 lg:mb-0">
              <p className="mb-2 text-sm font-light">Waktu Jemput/Ambil</p>
              <select
                id="waktuJemput"
                name="waktuJemput"
                value={pickupTime}
                onChange={handlePickupTime}
                className="w-full px-2 border border-gray-300 rounded-sm text-neutral-03 md:w-52 h-9"
              >
                <option value="" disabled selected>
                  Pilih Waktu
                </option>
                <option value="08:00:00">08.00 WIB</option>
                <option value="09:00:00">09.00 WIB</option>
                <option value="10:00:00">10.00 WIB</option>
                <option value="11:00:00">11.00 WIB</option>
                <option value="12:00:00">12.00 WIB</option>
              </select>
            </div>
            <div className="mb-4 lg:mb-0">
              <p className="mb-2 text-sm font-light">
                Jumlah Penumpang (optional)
              </p>
              <div className="relative">
                <input
                  type="number"
                  id="jumlahPenumpang"
                  name="jumlahPenumpang"
                  value={capacity}
                  onChange={handleCapacity}
                  className="w-full px-2 border border-gray-300 rounded-sm text-neutral-03 md:w-52 h-9"
                />
              </div>
            </div>
            <div>
              <p className="mb-6 text-sm font-light"></p>
              <button
                id="load-btn"
                onClick={handleSubmit}
                className="px-4 text-white bg-green-500 rounded h-9 hover:bg-green-600"
                type="submit"
              >
                Cari Mobil
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center">
        <div
          className="grid grid-cols-1 gap-8 p-4 mt-8 spx md:grid-cols-3"
          id="cars-container"
        >
          {carsPublic?.length === 0 ? (
            <div className="flex items-center justify-center h-[200px]">
              <p className="text-lg font-bold">Mobil tidak ditemukan</p>
            </div>
          ) : (
            carsPublic?.map((car, index) => (
              <div
                key={index}
                className="space-y-4 flex flex-col lg:w-[333px] w-[250px] mx-auto p-6 bg-white border rounded-lg shadow-sm"
              >
                <div className="flex items-center justify-center w-[200px] h-[150px] lg:w-[300px] lg:h-[200px]">
                  <img
                    src={car.image || ""}
                    className="object-cover"
                    alt={car.model}
                  />
                </div>
                <p className="mb-2 text-sm font-semibold">
                  {car.manufacture}
                  {car.model}
                </p>
                <p className="mb-2 text-base font-bold">
                  {" "}
                  Rp. {car.rent_per_day.toLocaleString("id-ID")} / Hari
                </p>
                <p className="mb-3 text-sm font-light">{car.description}</p>
                <ul className="flex flex-wrap gap-4 mb-6 text-sm font-light leading-2">
                  <li className="flex items-center w-full">
                    <i
                      data-feather="users"
                      className="text-neutral-03 stroke-[1px] mr-2"
                    ></i>
                    {car.capacity} orang
                  </li>
                  <li className="flex items-center w-full">
                    <i
                      data-feather="settings"
                      className="text-neutral-03 stroke-[1px] mr-2"
                    ></i>
                    {car.transmission}
                  </li>
                  <li className="flex items-center w-full">
                    <i
                      data-feather="calendar"
                      className="text-neutral-03 stroke-[1px] mr-2"
                    ></i>
                    Tahun {car.year}
                  </li>
                </ul>
                <button className="bg-[#0D28A6] w-full h-12 font-bold text-sm text-white mt-auto">
                  Pilih Mobil
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default SearchCarSection;
