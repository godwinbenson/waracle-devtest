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
import {
  getFavoriteAction,
  getImagesAction,
  getVoteScoreAction,
} from "../store/images/thunks";
import RequestStatus from "../store/RequestStatus";
import { VoteScore } from "../types";
import { CatCard } from "../views/CatCard";

export const Home: React.FC = () => {
  const {
    imageList: images,
    voteScore,
    favorites,
    getImagesError,
    getVoteScoreError,
    getFavoriteError,
    getImagesState,
  } = useSelector((state: RootState) => state.images);
  const dispatch = useDispatch();

  React.useEffect(() => {
    (async () => {
      dispatch(getImagesAction());
      dispatch(getFavoriteAction());
      dispatch(getVoteScoreAction());
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex py={5} justify="center" direction="column" maxW="1400px" mx="auto">
      <Box className="images__container" fontSize="xl">
        {images.length === 0 && getImagesState === RequestStatus.Success && (
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
        )}

        {images.length === 0 && getImagesState === RequestStatus.Requested && (
          <div>Loading images...</div>
        )}

        <Text mb={8} fontWeight="bold">
          My Cat Gallery
        </Text>

        {getImagesError && (
          <Alert data-testid="error-message" status="error">
            <AlertIcon />
            <AlertTitle fontSize="sm" mr={2}>
              {getImagesError.message}
            </AlertTitle>
            <Button onClick={() => dispatch(getImagesAction())}>
              Try Again
            </Button>
          </Alert>
        )}

        {getFavoriteError && (
          <Alert data-testid="error-message" status="error">
            <AlertIcon />
            <AlertTitle fontSize="sm" mr={2}>
              {getFavoriteError.message}
            </AlertTitle>
            <Button onClick={() => dispatch(getFavoriteAction())}>
              Try Again
            </Button>
          </Alert>
        )}

        {getVoteScoreError && (
          <Alert data-testid="error-message" status="error">
            <AlertIcon />
            <AlertTitle fontSize="sm" mr={2}>
              {getVoteScoreError.message}
            </AlertTitle>
            <Button onClick={() => dispatch(getVoteScoreAction())}>
              Try Again
            </Button>
          </Alert>
        )}

        {images.length > 0 && (
          <SimpleGrid columns={[1, 4]} spacing={6} px={[5, 6]}>
            {images.map((image) => {
              const voteCount = getVoteCount(image.id, voteScore);
              const getFavorite = favorites.find(
                (fav) => fav.image_id === image.id
              );

              return (
                <CatCard
                  favorite_id={getFavorite?.id}
                  key={image.id}
                  image={image}
                  voteCount={voteCount}
                />
              );
            })}
          </SimpleGrid>
        )}
      </Box>
    </Flex>
  );
};

const getVoteCount = (image_id: string, votes: VoteScore[]) => {
  const upVotes = votes.filter(
    (vote) => vote.image_id === image_id && vote.value === 1
  );

  const downVotes = votes.filter(
    (vote) => vote.image_id === image_id && vote.value === 0
  );

  return upVotes.length - downVotes.length;
};
