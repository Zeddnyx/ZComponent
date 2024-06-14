import File from "@/components/form/input-file/file";
import FileMultiple from "@/components/form/input-file/file-multiple";
import UploadImage from "@/components/form/input-file/image";
import UploadImageMultiple from "@/components/form/input-file/image-multiple";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";
import Pagination from "@/components/ui/Pagination";

import { ROUTES } from "@/configs/routes";

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
      <Pagination
        prev={ROUTES.formUrl("input-dynamic")}
        next={ROUTES.formUrl("input-textarea")}
      />
    </div>
  );
}
