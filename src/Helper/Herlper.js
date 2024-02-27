export const ViewDescription = ({ description }) => {
    return <div dangerouslySetInnerHTML={{ __html: description }} />;
  };
  