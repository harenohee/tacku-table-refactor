import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { VscEye } from "react-icons/vsc";
import { Warn } from "../toastify/Alert";

const RecipeListData = ({ item }: { item: TypeRecipe }) => {
  const [storageCurrentUser, setStorageCurrentUser] = useState("");
  // 상세페이지이동
  const router = useRouter();
  const goToDetail = (item: TypeRecipe) => {
    item.displayStatus === "회원 공개" && storageCurrentUser === "guest"
      ? Warn("멤버공개 레시피글입니다. 로그인을 진행해주세요.")
      : router.push(`/detailRecipe/${item.id}`);
  };

  useEffect(() => {
    const user = sessionStorage.getItem("User") || "";
    if (user) {
      const parseUser = JSON.parse(user);
      return setStorageCurrentUser(parseUser.uid);
    }
    setStorageCurrentUser("guest");
  }, [storageCurrentUser]);

  return (
    <div key={item.id} className="aspect-[1/0.7]">
      <div className="w-full aspect-[1/0.65] overflow-hidden mx-auto relative">
        <img
          src={`${item.thumbnail}`}
          className="aspect-[1/0.65] object-cover rounded-sm w-auto h-auto cursor-pointer"
          alt="recipe_picture"
          onClick={() => {
            goToDetail(item);
          }}
        />
        {item.displayStatus === "회원 공개" && (
          <>
            <div
              className="w-full aspect-[1/0.65] bg-black opacity-40 absolute top-0 left-0 cursor-pointer"
              onClick={() => {
                goToDetail(item);
              }}
            ></div>
            <p className="absolute bottom-4 right-10 text-white text-sm">
              회원전용
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 absolute bottom-4 right-4 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </>
        )}
      </div>
      <div className="text-sm text-slate-500 mt-1 flex justify-between">
        <div className="flex">
          <p className="text-blue100 ml-2">
            &#35;{item.animationTitle!.slice(0, 8)}
            {item.animationTitle!.length > 8 && "..."}
          </p>
          <p className="ml-4">&#35;{item.cookingTime}</p>
        </div>
        <p className="flex justify-center items-center gap-x-1 ml-4 mr-1">
          <VscEye></VscEye>
          {item.viewCount}
        </p>
      </div>
      <p
        className="text-lg text-slate-900 font-semibold cursor-pointer inline-block ml-2"
        onClick={() => {
          goToDetail(item);
        }}
      >
        {item.foodTitle}
      </p>
    </div>
  );
};

export default RecipeListData;
