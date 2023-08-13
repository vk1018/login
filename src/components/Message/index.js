import './index.css'

const Message = props => {
  const {content} = props

  return <h1 className="content">{content}</h1>
}
export default Message
