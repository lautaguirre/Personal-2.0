import React from "react";

import * as S from "./Styled";

interface Props {
  percentage: number;
}

export const Progress = ({ percentage }: Props) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(percentage), 600);

    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <S.ProgressRoot value={percentage}>
      <S.ProgressIndicator progress={progress} />
    </S.ProgressRoot>
  );
};
