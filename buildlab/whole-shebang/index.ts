import { exec, spawn } from 'child_process';
import fs from "fs";

export const PSY_EUROS_PROGRAM_ID = "Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS"
export const PYTH_PROGRAM_ID = "FsJ3A3u2vn5cTVofAjvy6y5kwABJAqYWpe4975bi2epH"
export const AOB_PROGRAM_ID = "aaobKniTtDGvCZces7GH5UReLYP671bBkB96ahr9x3e"

!fs.existsSync(`./logs/`) && fs.mkdirSync(`./logs/`, { recursive: true });

// Start a local Solana blockchain with the Psy Euros, Pyth, and AOB deployed
const logStream = fs.createWriteStream('./logs/solana_test_validator.log', {
  flags: 'w',
});
const runChainProc = exec(`solana-test-validator --bpf-program ${PSY_EUROS_PROGRAM_ID} ./buildlab/protocol_dependencies/psy_euros.so --bpf-program ${PYTH_PROGRAM_ID} ./buildlab/protocol_dependencies/pyth.so --bpf-program ${AOB_PROGRAM_ID} ./buildlab/protocol_dependencies/agnostic_orderbook.so`, {
  cwd: process.cwd(),
  env: {
    PATH: process.env.PATH,
    HOME: process.env.HOME,
  },
});
if (!runChainProc) {
  throw new Error("no run chain process");
}
runChainProc?.stdout?.pipe(logStream);
runChainProc?.stderr?.pipe(logStream);

runChainProc.on('close', (code) => {
  console.log('Solana test validator closed');
});
// TODO: Store the IDL locally and generate a anchor Program
