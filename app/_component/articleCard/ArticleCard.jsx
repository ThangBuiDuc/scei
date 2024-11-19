import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Skeleton,
} from "@nextui-org/react";
import Link from "next/link";
import moment from 'moment';
import 'moment/locale/vi';

function CardSkeleton() {
  return (
    <Card className="w-[200px] space-y-5 p-4" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-24 rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">  
          <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Card>
  );
}

const ArticleCard = ({ article }) => {
  moment.locale('vi');
  if (!article) return null;
  // console.log(article)
  const createdAt = moment(article.created_at).format('ll');
  return (
    <Card
      className="py-4 md:m-4 w-full h-[95%]"
      as={Link}
      key={article.id}
      href={`/articles/${article.slug}`}
    >
      <CardBody className="w-full overflow-visible py-2">
        <img
         src={article.avatar_img}
         alt={article.slug}
          className="object-cover rounded-xl w-full"
        />
      </CardBody>
      <CardFooter className="w-full pb-0 pt-2 px-4 flex-col items-start text-left">
        <h4 className="font-bold text-large uppercase">
        {article.title} 
        </h4>
        <p className="text-base">
          {article.description}
        </p>
        <small className="text-default-500">{createdAt}</small>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
