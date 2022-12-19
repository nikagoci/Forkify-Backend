import { Stack } from '@mui/system'
import React from 'react'
import SingleResult from './SingleResult'

const fakeData = [
  {
    id: 1,
    title: "Best Pizza Dough",
    publisher: "101 CookBooks",
    img: "https://i.picsum.photos/id/875/300/300.jpg?hmac=vI1mfJvGwCfmVYbeELV2nza6yKuBj-xrizdXka6vMyo"
  },
  {
    id: 2,
    title: "Pizza Dip",
    publisher: "Closet Cooking",
    img: "https://i.picsum.photos/id/731/300/300.jpg?hmac=4_3jlsewTHgqjDYM8OHOcI6OUv6lbjnSE13is8wP7Vc"
  },
  {
    id: 3,
    title: "Pizza Queen",
    publisher: "Two peas and chips",
    img: "https://i.picsum.photos/id/803/300/300.jpg?hmac=RxRVHr297bEBgsyMjedp2txAkfwP9rnG3ppj38qMwQc"
  },
  {
    id: 4,
    title: "sweet potato",
    publisher: "yummy potato",
    img: "https://i.picsum.photos/id/568/300/300.jpg?hmac=6YWFLd12RA4T3UCwkfpmy34JFtt6eCzJDTVBVWCEh5A"
  },
  {
    id: 5,
    title: "best pizza",
    publisher: "pizza lover",
    img: "https://i.picsum.photos/id/767/300/300.jpg?hmac=rB66ZMECHOCnIoIexwBxTm2NvjXv9JkHTLYxfmPbPfY"
  },
];

const ResultSide = () => {
  return (
    <Stack flexBasis='25%' backgroundColor='#fff' padding='40px 0'>
        {fakeData.map((item) => (
          <SingleResult
            key={item.id} 
            title={item.title}
            publisher={item.publisher}
            img={item.img}
          />
        ))}
    </Stack>
  )
}

export default ResultSide