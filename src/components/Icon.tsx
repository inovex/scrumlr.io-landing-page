import { lazy, memo, Suspense } from "react";

type IconProps = {
  name: string;
};

const Icon = ({ name }: IconProps) => {
  const Svg = lazy(() => import(`../icons/${name}.tsx`));

  return (
    <Suspense>
      <Svg />
    </Suspense>
  );
};

export default memo(Icon);
