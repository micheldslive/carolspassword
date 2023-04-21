import { Bloc, Container, ContentBloc, Padlock } from "./styles"
import { BsLock, BsUnlock } from "react-icons/bs"
import { useDataStates } from "@/contexts"

export function Password() {
  const { score, winner } = useDataStates()

  const password = [6, 9, 1]

  return (
    <Container>
      <Padlock score={score}>{winner ? <BsUnlock /> : <BsLock />}</Padlock>
      <ContentBloc>
        {password.map((password, index) => (
          <Bloc key={index}>{winner ? password : "?"}</Bloc>
        ))}
      </ContentBloc>
    </Container>
  )
}
