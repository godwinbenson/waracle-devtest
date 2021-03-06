import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  IconButton,
  Image as ChakraImage,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { useDispatch } from "react-redux";
import {
  deleteFavoriteAction,
  getFavoriteAction,
  getVoteScoreAction,
  postFavoriteAction,
  postVoteAction,
} from "../store/images/thunks";
import { Image } from "../types";

type CatCardProps = {
  image: Image;
  voteCount: number;
  favorite_id?: number | null;
};

export const CatCard: React.FC<CatCardProps> = ({
  image,
  favorite_id,
  voteCount,
}) => {
  const dispatch = useDispatch();

  const handleVoteClick = (value: number) => {
    (async () => {
      dispatch(postVoteAction(image.id, value, getVoteScoreAction));
    })();
  };

  const handleFavoriteClick = () => {
    (async () => {
      if (favorite_id) {
        dispatch(deleteFavoriteAction(favorite_id, getFavoriteAction));
      } else {
        dispatch(postFavoriteAction(image.id, image.sub_id, getFavoriteAction));
      }
    })();
  };

  return (
    <Box
      data-testid="cat-card"
      id="cat-card"
      position="relative"
      height="xs"
      width={["100%", "320px"]}
      borderWidth="thin"
      borderColor="pink"
      overflow="hidden"
      rounded="md"
    >
      <ChakraImage
        src={image.url}
        height="80%"
        width="100%"
        objectFit="cover"
      />
      <Flex py={3} px={5} direction="column" justify="center" align="center">
        <Stack isInline align="center">
          <IconButton
            icon={<FiThumbsUp />}
            onClick={() => handleVoteClick(1)}
            aria-label="upvote"
          />
          <Text width={16} fontWeight="medium">
            {voteCount}
          </Text>
          <IconButton
            icon={<FiThumbsDown />}
            onClick={() => handleVoteClick(0)}
            aria-label="downvote"
          />
        </Stack>
      </Flex>
      <IconButton
        position="absolute"
        variant="unstyled"
        onClick={handleFavoriteClick}
        color={favorite_id ? "red.500" : "inherit"}
        size="lg"
        top={0}
        left={0}
        icon={<StarIcon />}
        aria-label="favorite"
      />
    </Box>
  );
};
