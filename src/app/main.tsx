import Text from "@/components/text";
function Main() {
  return (
    <div className="text-center transition-all duration-300 ease-in-out">
      <Text variant="title"> Title </Text>
      <Text variant="subtitle"> Subtitle </Text>
      <Text variant="body"> Body </Text>
      <Text variant="caption"> Caption </Text>
      <Text variant="highlight"> Highlight </Text>
    </div>
  );
}

export default Main;
