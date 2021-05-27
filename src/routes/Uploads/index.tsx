import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Stack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import * as React from "react";
import { FiUploadCloud } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../../store";
import { postImageUploadAction } from "../../store/images/thunks";
import RequestStatus from "../../store/RequestStatus";
import { ImagePreview } from "./ImagePreview";
import { Upload } from "./Upload";
import { v4 as uuidv4 } from "uuid";

type Preview = File & { preview: string };

function UserId() {
  return uuidv4();
}

export const Uploads: React.FC = () => {
  const { postImageError, postImageState } = useSelector(
    (state: RootState) => state.images
  );
  const dispatch = useDispatch();
  const [file, setFile] = React.useState<string | Blob>();
  const [sub_id, setSub_id] = React.useState("");
  const [previewPhoto, setPreviewPhoto] = React.useState<Preview>();
  const [hasFormError, setHasFormError] = React.useState(false);
  const [progress, setProgress] = React.useState<number>();
  const { push } = useHistory();
  const toast = useToast();

  const progressCallBack = (percent: number) => {
    setProgress(percent);
  };

  const handleUpload = (acceptedFiles: File[]) => {
    const newFile = acceptedFiles[0];
    const image = Object.assign(newFile, {
      preview: URL.createObjectURL(newFile),
    });
    setPreviewPhoto(image);
    setFile(newFile);
  };

  const handleSaveClick = () => {
    if (sub_id && file) {
      setHasFormError(false);
      dispatch(postImageUploadAction(file, sub_id, progressCallBack));
    } else setHasFormError(true);
  };

  const handleInputChange = (e: any) => {
    setSub_id(e.target.value + UserId());
    if (sub_id) setHasFormError(false);
  };

  React.useEffect(() => {
    if (postImageState === RequestStatus.Success) {
      toast({
        title: "Image uploaded",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postImageState]);

  return (
    <Box>
      <VStack maxW="1200px">
        <Stack
          p={6}
          spacing={5}
          borderWidth={["none", "thin"]}
          borderColor="pink"
          rounded="lg"
          width={["100%", "35%"]}
        >
          <Text>Show us your amazing cat!</Text>
          <ImagePreview image={previewPhoto} progress={progress} />

          {postImageError && (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle fontSize="sm" mr={2}>
                {postImageError.message}
                <Upload onDrop={handleUpload}>
                  <Button variant="link" colorScheme="blue">
                    Try Again
                  </Button>
                </Upload>
              </AlertTitle>
            </Alert>
          )}

          {!previewPhoto && (
            <Upload onDrop={handleUpload}>
              <Button
                aria-label="Select Photo Button"
                isFullWidth
                leftIcon={<FiUploadCloud />}
                colorScheme="pink"
                size="lg"
              >
                Upload a cat image
              </Button>
            </Upload>
          )}

          {previewPhoto && (
            <FormControl isInvalid={hasFormError}>
              <Input
                aria-label="Cat Name"
                onChange={(e) => handleInputChange(e)}
                value={sub_id}
                variant="flushed"
                focusBorderColor="pink.500"
                placeContent="flex-start"
                placeholder="What's your cat's name?"
              />
              <FormErrorMessage>Please enter a name here</FormErrorMessage>
            </FormControl>
          )}

          {previewPhoto && (
            <Button
              isFullWidth
              onClick={handleSaveClick}
              aria-label="Upload Photo Button"
              isLoading={
                postImageState === RequestStatus.Requested ? true : false
              }
              loadingText="Saving image"
              colorScheme="pink"
              size="lg"
            >
              Upload photo
            </Button>
          )}
        </Stack>
      </VStack>
    </Box>
  );
};
