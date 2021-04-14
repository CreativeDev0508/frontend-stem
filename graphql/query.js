
export function quesQuery(cat){
  return `query ques{
    questions(where:{Category:"${cat}"}){
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
      Answer
    }
  }
` 
} 





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
    Height
    Width
  }
}`