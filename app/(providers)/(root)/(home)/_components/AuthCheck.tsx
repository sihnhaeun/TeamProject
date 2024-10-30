"use client";

import { useAuthStore } from "@/zustand/auth.store";
import MyPets from "./MyPets";
import RecentDiary from "./RecentDiary";

function AuthCheck() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <div className="flex flex-wrap justify-between h-[66vh] w-[68%] gap-5">
          <div className="rounded-2xl bg-whitePoint p-5 w-[47%] h-full">
            이달의 인기 일기
            {/* <PopularDiaries /> */}
          </div>
          <div className="w-[47%] h-full flex flex-col gap-7">
            <div className="rounded-2xl bg-whitePoint p-5 h-72">
              OO과(와) 함께 한지
            </div>
            <div className="rounded-2xl bg-whitePoint p-5 h-72">OO의 생일</div>
            <div className="rounded-2xl bg-whitePoint p-5 h-full overflow-y-hidden">
              <h2 className="fixed">나의 반려동물</h2>
              <MyPets />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap justify-between h-[66vh] w-[68%] gap-5">
          <div className="rounded-2xl bg-whitePoint p-5 w-[47%] h-full">
            이달의 인기 일기
          </div>
          <div className="rounded-2xl bg-whitePoint p-5 w-[47%] h-full overflow-y-auto max-h-[66vh]">
            <h2>현재 뜨고 있는 최신 일기</h2>
            <RecentDiary />
          </div>
        </div>
      )}
    </>
  );
}

export default AuthCheck;
