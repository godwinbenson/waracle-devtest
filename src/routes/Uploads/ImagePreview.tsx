import { Box, Image, Progress } from "@chakra-ui/react";
import * as React from "react";

const defaultPlaceHolder =
  "https://www.austinpetsalive.org/assets/placeholder/cat-placeholder-lg.svg";

type ImagePreviewProp = {
  image?: File & { preview: string };
  progress?: number;
  [key: string]: any;
};

export const ImagePreview: React.FC<ImagePreviewProp> = ({
  image,
  progress,
  ...rest
}) => {
  return (
    <Box height="2xs" width="100%" overflow="hidden" rounded="md" {...rest}>
      <Image
        height="100%"
        width="100%"
        src={image?.preview || defaultPlaceHolder}
        objectFit="cover"
      />
      {progress && <Progress colorScheme="green" size="sm" value={progress} />}
    </Box>
  );
};
