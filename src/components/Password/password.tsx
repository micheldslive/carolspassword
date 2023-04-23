import { Bloc, Container, ContentBloc, Padlock } from "./styles"
import { BsLock, BsUnlock } from "react-icons/bs"
import { useDataStates } from "@/contexts"

export const password = [6, 9, 1]

export function Password() {
  const { score, winner } = useDataStates()

  return (
    <Container aria-label="password">
      <Padlock score={score}>{winner ? <BsUnlock /> : <BsLock />}</Padlock>
      <ContentBloc>
        {password.map((char, index) => (
          <Bloc key={index} aria-label="pass">
            {winner ? char : "?"}
          </Bloc>
        ))}
      </ContentBloc>
    </Container>
  )
}
