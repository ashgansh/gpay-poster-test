import { NextResponse } from 'next/server'
import { createPublicClient, http } from 'viem'
// import { readContract } from 'viem'
// import { publicClient } from '@/utils/publicClient'
import { hardhat } from 'viem/chains'
// import { PosterABI } from '@/abis'
import Artifact from '../../../../../hardhat/artifacts/contracts/Poster.sol/Poster.json'

const PosterABI = Artifact.abi
console.log(PosterABI)

const client = createPublicClient({
  chain: hardhat,
  transport: http(),
})

export async function GET(request: Request) {
  try {
    return NextResponse.json({}, { status: 200 })
  } catch (error) {
    console.error('Failed to retrieve posts:', error)
    return NextResponse.json({ error: 'Failed to retrieve posts' }, { status: 500 })
  }
}
