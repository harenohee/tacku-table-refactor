import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import defaultImg from "../../public/images/test1.png";
import useGetUserProfileNickName from "@/hooks/useGetUserProfileNickName";

interface PostProp {
  post: TCommunity;
}

const Post = ({ post }: PostProp) => {
  const [isLoading, setIsLoading] = useState(true);

  const writterUid = post.writterUid;

  const { userNickName: writterNickname } =
    useGetUserProfileNickName(writterUid);

  useEffect(() => {
    if (writterNickname) {
      setIsLoading(false);
    }
  });
  if (isLoading) {
    return <></>;
  }

  return (
    <div className="border-b border-mono60 py-4 px-5 flex text-sm h-[85px] sm:h-auto">
      <Link legacyBehavior href={`/community/${post.id}`}>
        {post.thumbnail === "" ? (
          <Image
            className="object-cover object-center aspect-[4/3] rounded-md cursor-pointer w-7/4"
            src={defaultImg}
            placeholder="blur"
            width={70}
            height={41}
            alt="community-thumbnail-default"
          />
        ) : (
          <Image
            className="object-cover object-center aspect-[4/3] rounded-md cursor-pointer w-7/4"
            src={post?.thumbnail as string}
            loader={({ src }) => src}
            width={70}
            height={41}
            alt="community-thumbnail"
          />
        )}
      </Link>
      <div className="pl-5">
        <Link legacyBehavior href={`/community/${post.id}`}>
          <a>{post.title}</a>
        </Link>
        <div className="flex mt-3 text-mono70">
          <div className="border-r border-mono60 pr-3">{post.category}</div>
          <div className="border-r border-mono60 px-1 sm:px-3 w-[147px]">
            {post.writtenDate}
          </div>
          <Link legacyBehavior href={`/profile/${post.writterUid}`}>
            <span className="pl-3 cursor-pointer hover:font-semibold hover:text-mono80">
              {writterNickname}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
