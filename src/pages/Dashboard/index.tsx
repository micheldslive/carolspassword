import { useEffect, useState } from "react"
import { Button, Password, ScoreCircle, Loading } from "@/components"
import { WelcomeModal } from "./WelcomeModal"
import { WinnerModal } from "./WinnerModal"
import { useNavigate } from "react-router-dom"
import { BonusButton, Container } from "./styles"
import { useDataStates } from "@/contexts"

export function Dashboard() {
  const [openModal, setOpenModal] = useState(false)
  const [openWinnerModal, setOpenWinnerModal] = useState(false)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const {
    score,
    winner,
    winnerModal,
    numberQuestion,
    welcomeModal,
    handleData,
  } = useDataStates()

  function openInitialModal() {
    setOpenModal(true)
  }

  function closeInitialModal() {
    setOpenModal(false)
    handleData({
      welcomeModal: false,
      initialLoading: false,
    })
  }

  function handleWinnerModal() {
    if (winnerModal) {
      setOpenWinnerModal(true)
    }
  }

  function closeWinnerModal() {
    setOpenWinnerModal(false)
    handleData({ winnerModal: false })
  }

  async function resetProgress() {
    handleData({
      numberQuestion: 0,
      score: 0,
      winner: false,
    })
  }

  useEffect(() => {
    openInitialModal()
    handleWinnerModal()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <Password />
          <ScoreCircle score={score} />

          {winner && (
            <BonusButton onClick={() => navigate("/bonus")}>Bonus</BonusButton>
          )}

          {winner ? (
            <Button
              text="Reset Progress"
              variant={1}
              icon="arrowBack"
              onClick={() => resetProgress()}
            />
          ) : (
            <Button
              text={numberQuestion! > 0 ? "Continue Quiz" : "Start the Quiz"}
              variant={0}
              onClick={() => navigate("/quiz")}
            />
          )}

          {welcomeModal && (
            <WelcomeModal
              open={openModal}
              onClose={() => closeInitialModal()}
            />
          )}

          {openWinnerModal && (
            <WinnerModal
              open={openWinnerModal}
              onClose={() => closeWinnerModal()}
            />
          )}
        </Container>
      )}
    </>
  )
}
