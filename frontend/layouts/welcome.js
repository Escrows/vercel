import Chat from "../components/chat.component";

const Welcome = ({ account, balance, disconnect }) => {
  return (
    <div>
      <Chat nombre={account} />
    </div>
  )
}

export default Welcome;