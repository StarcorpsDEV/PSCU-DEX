"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

       
export default function Swapper() {

    return <Card className="">
            <CardHeader>
                <CardTitle>Swap Fluids tokens for DMF</CardTitle>
            </CardHeader>
            <CardContent className="">
            <div>
              <p className="text-slate-700">Trade Fluids tokens from the Badgers liquidity pools contracts.</p>
            </div>
            </CardContent>
            <CardContent className="">
            <div className="text-slate-500">
                <a target = "_blank" 
                href = "https://app.paraswap.io/#/0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359-0xd5bd4BeEf25b5952a1462e92C73CF8dc5870D683/3/BUY?version=6.2&network=polygon">
                    To trade DMF you should use a liquidity aggregator like Paraswap.
                </a>
            </div>
            </CardContent>
            <CardContent className="">
            <div className="text-slate-500">
                <a target = "_blank" 
                href = "https://badgerscollectif.com">
                    Mint the Collectif NFTs from the drop contract and stake them to get Fluids tokens.
                </a>
            </div>
            </CardContent>
    </Card>

}
