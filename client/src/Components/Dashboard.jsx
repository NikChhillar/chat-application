import React from "react";
import luffy from "../assets/luffy.png";
import Input from "./Input";

const Dashboard = () => {
  const contacts = [
    {
      name: "Kartik",
      status: "Available",
      img: luffy,
    },
    {
      name: "Kartik kun",
      status: "Available",
      img: luffy,
    },
    {
      name: "Kartik ",
      status: "Available",
      img: luffy,
    },
    {
      name: "Kartik kun",
      status: "Available",
      img: luffy,
    },
    {
      name: "Kartik ",
      status: "Available",
      img: luffy,
    },
  ];
  return (
    <div className="w-screen flex">
      <div className="w-[20%] h-screen bg-secondary overflow-scroll">
        <div className="flex items-center my-8 mx-14">
          <div>
            <img
              src={luffy}
              alt="avatar"
              width={75}
              height={75}
              className="border-[3px] border-gray-500 p-[2px] rounded-full"
            />
          </div>
          <div className="ml-8">
            <h3 className="text-2xl font-serif">Nikhil</h3>
            <p className="text-lg font-serif font-light">Profile</p>
          </div>
        </div>
        <hr />
        <div className="mx-14 mt-10">
          <div className="text-primary text-lg font-serif">Messages</div>
          <div>
            {contacts.map(({ name, status, img }) => {
              return (
                <div className="flex items-center py-8 border-b border-b-gray-300">
                  <div className="cursor-pointer flex items-center ">
                    <div>
                      <img
                        src={img}
                        alt="avatar"
                        width={60}
                        height={60}
                        className="border-[2px] border-gray-500 p-[2px] rounded-full"
                      />
                    </div>
                    <div className="ml-8">
                      <h3 className="text-lg font-serif">{name}</h3>
                      <p className="text-sm font-serif text-gray-600  font-light">
                        {status}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-[60%] h-screen bg-white flex flex-col items-center">
        <div className="w-[75%] bg-secondary h-[80px] my-14 rounded-full flex items-center px-14 py-2">
          <div className="cursor-pointer">
            <img
              src={luffy}
              width={60}
              height={60}
              className="rounded-full"
              alt=""
            />
          </div>
          <div className="ml-6 mr-auto">
            <h3 className="text-lg font-serif">Manish</h3>
            <p className="text-sm font-light text-gray-500">Online</p>
          </div>
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-phone-outgoing"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="black"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              <line x1="15" y1="9" x2="20" y2="4" />
              <polyline points="16 4 20 4 20 8" />
            </svg>
          </div>
        </div>
        <div className="h-[75%] w-full overflow-scroll shadow-sm">
          <div className="p-14">
            <>
              <div
                className={`max-w-[40%] rounded-b-xl p-4 mb-6 bg-primary text-white rounded-tl-xl ml-auto
                 `}
              >
                Hello Manish
              </div>
              <div
                className={`max-w-[40%] rounded-b-xl p-4 mb-6 bg-secondary rounded-tr-xl
                 `}
              >
                Haan kartik kun
              </div>
              <div
                className={`max-w-[40%] rounded-b-xl p-4 mb-6 bg-primary text-white rounded-tl-xl ml-auto
                 `}
              >
                Kab aavega
              </div>
              <div
                className={`max-w-[40%] rounded-b-xl p-4 mb-6 bg-secondary rounded-tr-xl
                 `}
              >
                M na aaun abb
              </div>
              <div
                className={`max-w-[40%] rounded-b-xl p-4 mb-6 bg-primary text-white rounded-tl-xl ml-auto
                 `}
              >
                kyu
              </div>
              <div
                className={`max-w-[40%] rounded-b-xl p-4 mb-6 bg-secondary rounded-tr-xl
                 `}
              >
                Meri mrzi
              </div>
              <div>...</div>
            </>
          </div>
        </div>
        <div className="p-14 w-full flex items-start">
          <Input
            placeholder="Type a message..."
            value={""}
            onChange={(e) => {}}
            className="w-[75%]"
            inputClassName="p-4 border-0 shadow-md rounded-full bg-light focus:ring-0 focus:border-0 outline-none"
          />
          <div
            className={`ml-4 p-2 cursor-pointer bg-light rounded-full pointer-events-none`}
            onClick={() => {}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-send"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="10" y1="14" x2="21" y2="3" />
              <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
            </svg>
          </div>
          <div
            className={`ml-4 p-2 cursor-pointer bg-light rounded-full pointer-events-none
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-circle-plus"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="9" />
              <line x1="9" y1="12" x2="15" y2="12" />
              <line x1="12" y1="9" x2="12" y2="15" />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-[20%] h-screen bg-light px-8 py-16 overflow-scroll"></div>
    </div>
  );
};

export default Dashboard;
