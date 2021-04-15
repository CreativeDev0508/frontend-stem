
export const quesQuery=
    `query ques{
      questions{
        id
        quesid
        Question
        OptionA
        OptionB
        OptionC
        OptionD
        Image{
          id
          url
        }
        Category
        Answer
      }
    }
` 





export const results=`
query quesQuery {
  questions{
    id
    quesid
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
export const getcontrols=`
query conf{
  controls{
    GoLive
    LiveURL
    Platform
    StratExam
    PublishResult
    Height
    Width
  }
}`