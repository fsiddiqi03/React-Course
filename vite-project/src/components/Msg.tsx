let count = 0;

const Msg = () => {
  console.log("Message Called", count);
  count++;
  return <div>Message {count}</div>;
};
export default Msg;
