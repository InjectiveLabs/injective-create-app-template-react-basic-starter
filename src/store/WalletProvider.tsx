import { createContext, useState } from "react";
import { getAddresses } from "../app/services/wallet";
import { getInjectiveAddress } from "@injectivelabs/sdk-ts";

type StoreState = {
  injectiveAddress: string;
  ethereumAddress: string;
  connectWallet: () => Promise<void>;
};

export const WalletContext = createContext<StoreState>({
  ethereumAddress: "",
  injectiveAddress: "",
  connectWallet: async () => {
    //
  },
});

type Props = {
  children: React.ReactNode;
};

const WalletStoreWrapper = (props: Props) => {
  const [injectiveAddress, setInjectiveAddress] = useState("");
  const [ethereumAddress, setEthereumAddress] = useState("");

  async function connectWallet() {
    if (injectiveAddress) {
      setEthereumAddress("");
      setInjectiveAddress("");
      return;
    }

    const [address] = await getAddresses();
    setEthereumAddress(address);
    setInjectiveAddress(getInjectiveAddress(address));
  }

  return (
    <WalletContext.Provider
      value={{ ethereumAddress, injectiveAddress, connectWallet }}
    >
      <div>{props.children}</div>
    </WalletContext.Provider>
  );
};

export default WalletStoreWrapper;
