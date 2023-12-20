import { useState } from "react";

export type TUseModalConf = {
  isModalVisible: boolean;
  setIsModalVisible: (value: boolean) => void;
};

export type TUseModalPayload = [TUseModalConf, () => void];

const useModal = (initialValue: boolean = false): TUseModalPayload => {
  const [isModalVisible, setIsModalVisible] = useState(initialValue);

  const toggle = () => {
    setIsModalVisible((actualValue) => !actualValue);
  };

  return [
    {
      isModalVisible,
      setIsModalVisible,
    },
    toggle,
  ];
};

export default useModal;
