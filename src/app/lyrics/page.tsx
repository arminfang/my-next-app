"use client";
import React, { useState } from "react";
import Drawer from "@/app/components/drawer";
import { songList } from "./consts";

const Lyrics: React.FC = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(-1);
  const [visible, setVisible] = useState<boolean>(false);

  const handleSongClick = (index: number) => {
    setCurrentSongIndex(index);
    setVisible(false);
  };

  return (
    <>
      <div className="min-h-100vh-56 bg-zinc-900 p-6">
        <div className="mb-4">
          <button className="btn-primary" onClick={() => setVisible(true)}>
            CLICK ME
          </button>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-bold mb-2 text-center pr-3 pl-3">
            {songList[currentSongIndex]?.title}
          </h3>
          <pre className="whitespace-pre-line text-center">
            {songList[currentSongIndex]?.lyrics}
          </pre>
        </div>
      </div>
      <Drawer
        visible={visible}
        mask
        onClose={() => {
          setVisible(false);
        }}
        placement="left"
      >
        <div>
          <div className="space-y-2">
            {songList.map((song, index) => (
              <div
                key={index}
                onClick={() => handleSongClick(index)}
                className={`cursor-pointer p-2 rounded ${
                  currentSongIndex === index
                    ? "bg-blue-500 text-white"
                    : "hover:bg-blue-400 bg-slate-600"
                }`}
              >
                {song.title}
              </div>
            ))}
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Lyrics;
