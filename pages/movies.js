import clientPromise from "@/util/mongodb";
import { Flex, Heading, Text, Button, Stack, Link } from '@chakra-ui/core';

export default function Movies({ movies }) {
    return (
      <div>
        <Heading>Top 2 Movies of All Time</Heading>
        <p>
          (According to Metacritic)
        </p>
        <ul>
          {movies.map((movie) => (
            <li>
              <Heading p={3}>{movie.title}</Heading>
              <Heading p={2} size="h3">{movie.metacritic}</Heading>
              <Text>{movie.plot}</Text>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  export async function getServerSideProps(req, res) {
    const client = await clientPromise
    const { fieldvalue } = req.query
    const database = client.db('sample_mflix');
    const movies = await database
      .collection("movies")
      .find({})
      .sort({ metacritic: -1 })
      .limit(2)
      .toArray();
    return {
      props: {
        movies: JSON.parse(JSON.stringify(movies)),
      },
    };
  }
