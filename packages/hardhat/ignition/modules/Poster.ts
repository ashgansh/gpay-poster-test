import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'

const PosterModule = buildModule('PosterModule', (m) => {
  const poster = m.contract('Poster')
  return { poster }
})

export default PosterModule
