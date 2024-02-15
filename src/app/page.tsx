"use client";
import Popup, { useClosePopup } from "react-popupkit";

export default function Home() {
  const closePopup = useClosePopup();
  const handleClose = ()=> {
    closePopup();
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Popup className="w-fit h-fit relative">
        <Popup.Button className="text-white font-semibold px-4 py-2 border rounded-md">
          Menu
        </Popup.Button>
        <Popup.Body className="bg-slate-400 border rounded-md p-4 absolute left-full">
          <ul className="whitespace-nowrap">
            <Popup.TriggerClose>
              <li>List 1</li>
            </Popup.TriggerClose>
            <li className="py-5">List 2</li>
            <li onClick={handleClose}>List 3</li>
          </ul>
        </Popup.Body>
      </Popup>
      <div className="mt-20">
      <Popup className="w-fit h-fit relative">
        <Popup.Button className="text-white font-semibold px-4 py-2 border rounded-md">
          Menu
        </Popup.Button>
        <Popup.Body className="bg-slate-400 border rounded-md p-4 absolute left-full">
          <ul className="whitespace-nowrap">
            <Popup.TriggerClose>
              <li>List 1</li>
            </Popup.TriggerClose>
            <li className="py-5">List 2</li>
            <li onClick={handleClose}>List 3</li>
          </ul>
        </Popup.Body>
      </Popup>
      </div>
    </main>
  );
}
