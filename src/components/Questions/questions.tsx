import { useEffect, useState } from "react"
import { FieldValues, FormProvider, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { ScrollBox } from "./ScrollBox"
import { questions } from "./questionsAnswers"
import {
  BoxValueQuestion,
  Container,
  ContentQuestion,
  Header,
  KeyBox,
  NumberQuestion,
  Text,
  Title,
  ValueQuestion,
} from "./styles"
import { Button, Input } from "@/components"
import { schema } from "./validations"
import { ModalReturnQuestion } from "./ModalReturnQuestion"
import { useNavigate } from "react-router-dom"
import { useDataStates } from "@/contexts"

export type FieldValuesWithoutPassword = Omit<FieldValues, "password">

export function Questions() {
  const [openModal, setOpenModal] = useState(false)
  const [wrongQuestion, setWrongQuestion] = useState(false)
  const { score, numberQuestion, winner, handleData } = useDataStates()
  const navigate = useNavigate()

  const methods = useForm<FieldValuesWithoutPassword>({
    resolver: yupResolver(schema),
  })

  const { handleSubmit, reset } = methods

  function closeModal() {
    setOpenModal(false)

    if (winner) {
      navigate("/dashboard")
    }
  }

  const dataQuestion = questions?.map((question) => {
    const data = {
      id: question.id,
      password: question.password,
      points: question.points,
      text: question.text,
    }
    return data
  })

  async function finalGame() {
    handleData({
      winner: true,
      winnerModal: true,
      bonusModal: true,
    })
  }

  async function isWinner() {
    if (score === 100 && numberQuestion === 4) {
      handleData({ winner: true })
      finalGame()
    }
  }

  useEffect(() => {
    isWinner()
  }, [score])

  async function sendQuestion(formData: FieldValuesWithoutPassword) {
    try {
      const passwordQuestion = formData?.password

      if (!passwordQuestion) {
        return
      }

      if (dataQuestion[Number(numberQuestion)]?.password === passwordQuestion) {
        setWrongQuestion(false)
        handleData({
          numberQuestion: Number(numberQuestion) + 1,
          score: Number(score) + dataQuestion[Number(numberQuestion)]?.points,
          winner: !!(score === 100 && numberQuestion === 4),
        })

        setOpenModal(true)

        reset()
        return
      }

      setOpenModal(true)
      setWrongQuestion(true)
      reset()
      return
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Container aria-label="questions">
      <Header>
        <ContentQuestion>
          <Title>Question</Title>
          <NumberQuestion>
            {dataQuestion[Number(numberQuestion)]?.id}
          </NumberQuestion>
        </ContentQuestion>
        <BoxValueQuestion>
          <ValueQuestion>25</ValueQuestion>
          <Text>pts</Text>
        </BoxValueQuestion>
      </Header>
      <ScrollBox text={dataQuestion[Number(numberQuestion)]?.text} />

      <FormProvider {...methods}>
        <KeyBox onSubmit={handleSubmit(sendQuestion)}>
          <Input
            name="password"
            error=""
            label="Insert the code here"
            placeholder="********"
            type="password"
          />
          <Button
            variant={0}
            type="submit"
            arrow
            disabled={numberQuestion === 4}
          />
        </KeyBox>
      </FormProvider>

      <ModalReturnQuestion
        open={openModal}
        onClose={() => closeModal()}
        icon={!wrongQuestion ? "ok" : "wrong"}
        finishQuestions={numberQuestion === 4}
      />
    </Container>
  )
}
