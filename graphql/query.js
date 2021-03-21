
export const quesQuery=`
query quesQuery {
    questions{
      id
      Question
      Answer
      OptionA
      OptionB
      OptionC
      OptionD
      Image{
        id
        url
      }
    }
  }
`

