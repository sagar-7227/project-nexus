import { Button, Container, HStack, Heading, Input, Stack, Text, VStack, Image } from '@chakra-ui/react'
import React, { useState } from 'react'

const ContentPage = () => {
  const [keyword, setKeyword] = useState("")
  const [category, setCategory] = useState("")
  const addToCarTHandler = (id) => {

    console.log(id)
  }

  const categories = ["All", "Vegetarian", "Non Vegetarian", "Continental", "Chinese", "Indian", "Italian", "Desserts"]
  const Courses = ({ title, imageSrc, id, addToCarTHandler, description }) => {
    return (
      <VStack className="items" alignItems={['center', 'flex-start']}>
        <Image src={imageSrc} boxSize="60" objectFit={"contain"} />
        <Heading textAlign={['center', 'left']} size={'sm'} maxW={'200px'} fontFamily={'sans-serif'} noOfLines={3} children={title} />
        <Text noOfLines={2} children={description} />

        <Button variant={'ghost'} colorScheme='yellow' onClick={
          () => addToCarTHandler(id)}>
          Add To Cart
        </Button>
      </VStack>
    )
  }

  return (
    <Container minH={"95vh"} maxW={"container.lg"} paddingY={"8"} >
      <Heading children="All Recipes" m={"8"} />
      <Input value={keyword} onChange={e => setKeyword(e.target.value)} placeholder='Search a Recipe...' type='text' focusBorderColor='yellow.500' />

      <HStack overflowX={"auto"} paddingY={"8"} css={{
        '&::-webkit-scrollbar': {
          display: 'none'
        }
      }}>
        {
          categories.map((item, index) => (
            <Button key={index} onClick={() => setCategory(item)} minW={"60"}>
              <Text children={item} />
            </Button>
          ))
        }
      </HStack>
      <Stack
        direction={['column', 'row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}>

        <Courses
          title={"Title of the Dish"}
          description={'Description of the Dish'}
          imageSrc={'https://imgs.search.brave.com/-IoU_90Ljwd1Kmg4enVDQoG4FyLwDYBqFQ5n3wTQP0A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9waWNz/dW0ucGhvdG9zLzY0/MC80ODAvP2ltYWdl/PTc3Ng'}
          id={'id1'}
          addToCarTHandler={addToCarTHandler} />
      </Stack>

    </Container>
  )
}

export default ContentPage