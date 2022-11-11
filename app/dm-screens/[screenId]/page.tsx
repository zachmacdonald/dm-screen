type Props = {
  params?: {
    screenId?: string;
  };
};

const Screen = ({ params }: Props) => {
  return <p>Screen: {params?.screenId}</p>;
};

export default Screen;
