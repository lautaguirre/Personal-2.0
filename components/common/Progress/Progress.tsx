import React from "react";

import * as S from "./Styled";

interface Props {
  percentage: number;
}

export const Progress = ({ percentage }: Props) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(percentage), 500);

    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <>
      <S.ProgressRoot value={percentage}>
        <S.ProgressIndicator
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      </S.ProgressRoot>
    </>
  );
};
