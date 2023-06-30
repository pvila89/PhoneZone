import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const MobileCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default MobileCardSkeleton;
