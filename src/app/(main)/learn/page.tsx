import { FeedWrapper } from "@/components/common/FeedWrapper";
import { StickyWrapper } from "@/components/common/StickyWrapper";
import React from "react";
import { Header } from "./_component/header";
import { UserProgress } from "./_component/user-progress";

const LearnPage = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: "Rust", imageSrc: "/rust.svg" }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="Rust" />
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
