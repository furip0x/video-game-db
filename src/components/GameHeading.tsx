import { Heading } from "@chakra-ui/react"
import { IGameQuery } from "../App"

interface Props {
  gameQuery: IGameQuery
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`

  return (
    <Heading as="h1" fontSize="5xl" marginBottom={5}>
      {heading}
    </Heading>
  )
}

export default GameHeading
