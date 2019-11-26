import React from "react"
import InputField from "../form/InputField"
import { Author } from "../message/Message"
import { InputGroup } from "./styles"

type Props = {
  id: number
  author: Author | undefined
  onChange: (author: Author | undefined) => void
}

export default function AuthorEditor(props: Props) {
  const { id: embedId, author = {} } = props
  const { name, url, iconUrl } = author

  const handleChange = (author: Author) =>
    Object.values(author).some(Boolean)
      ? props.onChange(author)
      : props.onChange(undefined)

  return (
    <InputGroup>
      <InputField
        id={`message-embed${embedId}-author-name`}
        value={name}
        onChange={name =>
          handleChange({
            ...author,
            name,
          })
        }
        label="Author Name"
        maxLength={256}
      />
      <InputField
        id={`message-embed${embedId}-author-url`}
        value={url}
        onChange={url =>
          handleChange({
            ...author,
            url,
          })
        }
        label="Author URL"
      />
      <InputField
        id={`message-embed${embedId}-author-icon`}
        value={iconUrl}
        onChange={iconUrl =>
          handleChange({
            ...author,
            iconUrl,
          })
        }
        label="Author Icon"
      />
    </InputGroup>
  )
}
