import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react"
import useGenres from "../hooks/UseGenres"
import getCroppedImageUrl from "../services/image-url"
import GenreSkeleton from "./Skeletons/GenreSkeleton"

const GenreList = () => {
  const { data, isLoading, error } = useGenres()

  if (error) return null

  if (isLoading) return <GenreSkeleton />

  return (
    <>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius="8px"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default GenreList