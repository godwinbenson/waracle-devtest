import { Box } from "@chakra-ui/react";
import * as React from "react";
import Dropzone from "react-dropzone";

type UploadProps = {
  onDrop: (acceptedFiles: File[]) => void;
  accept?: string;
  maxSize?: number;
  minSize?: number;
  [key: string]: any;
  children?: any;
};

export const Upload: React.FC<UploadProps> = ({
  accept = "image/*",
  maxSize,
  minSize,
  children,
  onDrop,
  ...rest
}) => {
  return (
    <Dropzone {...{ accept, minSize, maxSize }} onDrop={onDrop}>
      {({ getRootProps, getInputProps }) => {
        return (
          <Box as="span" {...rest} {...getRootProps()}>
            <input {...getInputProps()} />
            {children}
          </Box>
        );
      }}
    </Dropzone>
  );
};
