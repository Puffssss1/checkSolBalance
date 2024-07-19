import {Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL} from '@solana/web3.js'

const url = clusterApiUrl('devnet')


const connection = new Connection(clusterApiUrl('devnet'))

//PublicKey or Wallet Address
const wallet = new PublicKey('G3bSDXPzchkMDtbCEgZxddfpykmjXweLbm3wSG625goo')


async function main() {
    const balance = await connection.getBalance(wallet)
    console.log('Balance is', balance/LAMPORTS_PER_SOL)
}

main()