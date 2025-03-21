"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { parseEther, parseUnits } from "ethers";
import useProvider from "@hooks/useProvider";
import { bigintToExponential } from "@/lib/utils";
interface Props {}

const Blockchain: React.FC<Props> = () => {
  const { provider, signer } = useProvider();
  console.log("signer", signer);
  console.log("provider", provider);
  const [blockNumber, setBlockNumber] = useState(0);
  const [balance, setBalance] = useState<bigint | null>(null);
  const [loading, setLoading] = useState(false);
  const timer = useRef<NodeJS.Timer | null>(null);

  const getBlockCount = () => {
    provider
      ?.getBlockNumber()
      .then((res) => {
        console.log("get block number success: ", res);
        setBlockNumber(res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const getBalance = () => {
    console.log("provider", provider);
    provider?.getBalance(signer!.address).then((res) => {
      console.log("get balance success: ", bigintToExponential(res));
      setBalance(res);
    });
  };

  useEffect(() => {
    getBlockCount();
    timer.current = setInterval(getBlockCount, 20000);
    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
    const a = parseEther("1.0");
    console.log("a", a);
  }, []);

  return (
    <div className="p-6 flex flex-col gap-4">
      <h2>Blockchain</h2>
      <button onClick={getBlockCount} className="btn-primary">
        Get Block Count
      </button>
      <h3>
        Current block number is:{" "}
        <span className="font-bold text-yellow-600">{blockNumber}</span>
      </h3>
      <button onClick={getBalance} className="btn-primary">
        Get Balance
      </button>
      <h3>current Balance is: {balance}</h3>
      <h3>
        parseEther: Convert user-provided strings in ether to wei for a bigint
        value <br />
        eth = parseEther("1.0")：
        {bigintToExponential(parseEther("1.0"))}
      </h3>
      <button
        onClick={() => {
          setLoading((prev) => !prev);
        }}
        className="btn-primary"
      >
        Re-Render
      </button>
    </div>
  );
};

export default Blockchain;
