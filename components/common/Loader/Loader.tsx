import React, { FC } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { getLoading } from "@/state/selectors/common/commonSelectors";
import { useAppSelector } from "@/lib/hooks/useAppSelector";

import * as S from "./Styled";

const Loader: FC = () => {
  const loading = useAppSelector(getLoading);

  return (
    <Dialog.Root open={loading}>
      <Dialog.Portal>
        <S.Overlay />
        <S.ModalContent>
          <S.Ellipsis>
            <div />
            <div />
            <div />
            <div />
          </S.Ellipsis>
        </S.ModalContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Loader;
