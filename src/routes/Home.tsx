import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Flex,
  Grid,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../store";
import { getImagesAction, getVoteScoreAction } from "../store/images/thunks";
import RequestStatus from "../store/RequestStatus";
import { VoteScore } from "../types";
import { CatCard } from "../views/CatCard";

export const Home: React.FC = () => {
  const {
    imageList: images,
    voteScore,
    getImagesError,
    getImagesState,
  } = useSelector((state: RootState) => state.images);
  const dispatch = useDispatch();

  React.useEffect(() => {
    (async () => {
      dispatch(getImagesAction());
      dispatch(getVoteScoreAction());
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex justify="center" direction="column" maxW="1200px" mx="auto">
      <Box className="images__container" fontSize="xl">
        {images.length === 0 && getImagesState === RequestStatus.Success ? (
          <Grid minH="100vh" p={3}>
            <VStack spacing={6}>
              <Text>You have not uploaded any cats yet.</Text>

              <Link to="/upload">
                <Button colorScheme="red" size="lg">
                  Upload a cat
                </Button>
              </Link>
            </VStack>
          </Grid>
        ) : null}

        {images.length === 0 && getImagesState === RequestStatus.Requested ? (
          <div>Loading images...</div>
        ) : null}

        {getImagesError && (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle fontSize="sm" mr={2}>
              {getImagesError.message}
            </AlertTitle>
            <Button onClick={() => dispatch(getImagesAction())}>
              Try Again
            </Button>
          </Alert>
        )}

        <Text mb={8} fontWeight="bold">
          My Cat Gallery
        </Text>

        {images.length > 0 && (
          <SimpleGrid column={[1, 3]} spacing={6} px={[5, 6]}>
            {images.map((image) => {
              const voteCount = getVoteCount(image.sub_id, voteScore);
              return (
                <CatCard key={image.id} image={image} voteCount={voteCount} />
              );
            })}
          </SimpleGrid>
        )}
      </Box>
    </Flex>
  );
};

export const getVoteCount = (sub_id: string, votes: VoteScore[]) => {
  const upVotes = votes.filter(
    (vote) => vote.sub_id === sub_id && vote.value === 1
  );

  const downVotes = votes.filter(
    (vote) => vote.sub_id === sub_id && vote.value === 0
  );

  return upVotes.length - downVotes.length;
};
