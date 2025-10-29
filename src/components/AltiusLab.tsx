"use client";

import { Zap, Grid, Plug } from "lucide-react";

const AltiusLab = () => {
  return (
    <div className="w-screen bg-white py-20 overscroll-none">
      <div className=" flex items-center justify-center">
        <div className="flex flex-col items-start justify-center max-w-[1200px] w-full">
          <div className="flex items-center justify-between gap-10 max-w-6xl py-20 w-full">
            <div className="flex flex-col items-start justify-between gap-4 flex-1">
              <h3 className="text-[2.8rem] text-black font-montserrat font-medium tracking-tight leading-tight">
                Altius instantly optimizes <br />
                your blockchain’s speed, <br />
                cost, storage, and more
              </h3>
              <p className="text-xl font-montserrat text-green-900">
                Meet Altius Labs
              </p>
              <p className="text-lg font-numans text-zinc-400 leading-relaxed max-w-xl">
                Faster execution. Smarter storage. Zero migrations. With
                parallel execution and memory-first sharding, Altius cuts infra
                costs and gives blockchains enterprise-grade performance without
                rewrites or hard forks.
              </p>
            <div className="flex items-center gap-4 mt-6">
              <button className="bg-emerald-900 hover:bg-orange-700 text-black px-6 py-3  font-montserrat font-medium transition">
                Integrate with Altius ↗
              </button>
              <button className="border border-zinc-500 hover:bg-zinc-800 text-black px-6 py-3  font-montserrat font-medium transition">
                Follow us on 𝕏
              </button>
            </div>
            </div>

            <div className="flex justify-center items-center flex-1">
              <img src="/logo_black.png" alt="" />
            </div>
          </div>

          <div className="flex gap-4 w-full text-black pb-20 font-numans">
            <div className="relative flex-1 border border-emerald-900 p-6 flex flex-col justify-between gap-8">
              <div className="absolute top-[-1px] left-[-1px] w-2 h-2">
                <div className="absolute top-0 left-0 w-2 h-[2px] bg-white"></div>
                <div className="absolute top-0 left-0 h-2 w-[2px] bg-white"></div>
              </div>

              <div className="absolute top-[-1px] right-[-1px] w-2 h-2">
                <div className="absolute top-0 right-0 w-2 h-[2px] bg-white"></div>
                <div className="absolute top-0 right-0 h-2 w-[2px] bg-white"></div>
              </div>

              <div className="absolute bottom-[-1px] left-[-1px] w-2 h-2">
                <div className="absolute bottom-0 left-0 w-2 h-[2px] bg-white"></div>
                <div className="absolute bottom-0 left-0 h-2 w-[2px] bg-white"></div>
              </div>

              <div className="absolute bottom-[-1px] right-[-1px] w-2 h-2">
                <div className="absolute bottom-0 right-0 w-2 h-[2px] bg-white"></div>
                <div className="absolute bottom-0 right-0 h-2 w-[2px] bg-white"></div>
              </div>

              <div>
                <div className="flex items-center justify-between text-black font-suse-mono ">
                  <span>01</span>
                  <Zap className="w-5 h-5" />
                </div>

                <h3 className="text-xl font-bold mt-2">
                  Accelerate your blockchain ecosystem growth
                </h3>
              </div>
              <p className="text-zinc-400 text-sm">
                Eliminate onchain performance issues and maximize revenue for
                your thriving ecosystem. Your app teams will thank you.
              </p>
            </div>

            <div className="relative flex-1 border border-emerald-900 p-6 flex flex-col justify-between gap-8">
              <div className="absolute top-[-1px] left-[-1px] w-2 h-2">
                <div className="absolute top-0 left-0 w-2 h-[2px] bg-white"></div>
                <div className="absolute top-0 left-0 h-2 w-[2px] bg-white"></div>
              </div>

              <div className="absolute top-[-1px] right-[-1px] w-2 h-2">
                <div className="absolute top-0 right-0 w-2 h-[2px] bg-white"></div>
                <div className="absolute top-0 right-0 h-2 w-[2px] bg-white"></div>
              </div>

              <div className="absolute bottom-[-1px] left-[-1px] w-2 h-2">
                <div className="absolute bottom-0 left-0 w-2 h-[2px] bg-white"></div>
                <div className="absolute bottom-0 left-0 h-2 w-[2px] bg-white"></div>
              </div>

              <div className="absolute bottom-[-1px] right-[-1px] w-2 h-2">
                <div className="absolute bottom-0 right-0 w-2 h-[2px] bg-white"></div>
                <div className="absolute bottom-0 right-0 h-2 w-[2px] bg-white"></div>
              </div>
              <div>
                <div className="flex items-center justify-between text-black font-suse-mono">
                  <span>02</span>
                  <Grid className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mt-2">
                  One execution layer. Any VM.
                </h3>
              </div>
              <p className="text-zinc-400 text-sm">
                From EVM to SVM to many more, Altius' system fits multi-chain
                apps, frictionless composability, and long-term ecosystem
                growth.
              </p>
            </div>

            <div className="relative flex-1 border border-emerald-900 p-6 flex flex-col justify-between gap-8">
              <div className="absolute top-[-1px] left-[-1px] w-2 h-2">
                <div className="absolute top-0 left-0 w-2 h-[2px] bg-white"></div>
                <div className="absolute top-0 left-0 h-2 w-[2px] bg-white"></div>
              </div>

              <div className="absolute top-[-1px] right-[-1px] w-2 h-2">
                <div className="absolute top-0 right-0 w-2 h-[2px] bg-white"></div>
                <div className="absolute top-0 right-0 h-2 w-[2px] bg-white"></div>
              </div>

              <div className="absolute bottom-[-1px] left-[-1px] w-2 h-2">
                <div className="absolute bottom-0 left-0 w-2 h-[2px] bg-white"></div>
                <div className="absolute bottom-0 left-0 h-2 w-[2px] bg-white"></div>
              </div>

              <div className="absolute bottom-[-1px] right-[-1px] w-2 h-2">
                <div className="absolute bottom-0 right-0 w-2 h-[2px] bg-white"></div>
                <div className="absolute bottom-0 right-0 h-2 w-[2px] bg-white"></div>
              </div>
              <div>
                <div className="flex items-center justify-between text-black font-suse-mono mb-2">
                  <span>03</span>
                  <Plug className="w-5 h-5" />
                </div>

                <h3 className="text-xl font-bold mt-2">
                  No migrations. No rewrites.
                </h3>
              </div>
              <p className="text-zinc-400 text-sm">
                Fast-track to mainnet: lightning-fast, production-ready
                blockchain in weeks, not months.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AltiusLab;
