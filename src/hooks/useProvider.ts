import React, { useEffect, useRef } from "react";
import {
  ethers,
  AbstractProvider,
  BrowserProvider,
  JsonRpcSigner,
  JsonRpcProvider,
} from "ethers";

interface ProviderHookResult {
  provider: BrowserProvider | AbstractProvider;
  signer: JsonRpcSigner | null;
}

const useProvider = (): ProviderHookResult => {
  const provider = useRef<BrowserProvider | AbstractProvider>(
    ethers.getDefaultProvider()
  );
  const signer = useRef<JsonRpcSigner | null>(null);
  console.log("signer", signer);

  useEffect(() => {
    // provider.current = new ethers.JsonRpcProvider();
    // (provider.current as JsonRpcProvider).getSigner().then((res) => {
    //   signer.current = res;
    // });
    // return;
    if (window.ethereum == null) {
      // If MetaMask is not installed, we use the default provider,
      // which is backed by a variety of third-party services (such
      // as INFURA). They do not have private keys installed,
      // so they only have read-only access
      console.log("MetaMask not installed; using read-only defaults");
      provider.current = ethers.getDefaultProvider();
    } else {
      // Connect to the MetaMask EIP-1193 object. This is a standard
      // protocol that allows Ethers access to make all read-only
      // requests through MetaMask.
      provider.current = new ethers.BrowserProvider(window.ethereum);

      // It also provides an opportunity to request access to write
      // operations, which will be performed by the private key
      // that MetaMask manages for the user.
      (provider.current as BrowserProvider)
        .getSigner()
        .then((res) => {
          console.log("res", res);
          signer.current = res;
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  }, []);

  return { provider: provider.current, signer: signer.current };
};

export default useProvider;
