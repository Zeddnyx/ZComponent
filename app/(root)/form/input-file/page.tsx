import File from "@/components/form/input-file/file";
import FileMultiple from "@/components/form/input-file/file-multiple";
import UploadImage from "@/components/form/input-file/image";
import UploadImageMultiple from "@/components/form/input-file/image-multiple";
import Title from "@/components/shared/Title";
import Wrapper from "@/components/shared/Wrapper";

export default function Page() {
  return (
    <div>
      <Title title="Upload File" subtitle="Upload File" />
      <Wrapper>
        <File />
      </Wrapper>
      <Title subtitle="Upload File Multiple" />
      <Wrapper>
        <FileMultiple />
      </Wrapper>
      <Title subtitle="Upload Image" />
      <Wrapper>
        <UploadImage />
      </Wrapper>
      <Title subtitle="Upload Image Multiple" />
      <Wrapper>
        <UploadImageMultiple />
      </Wrapper>
    </div>
  );
}
